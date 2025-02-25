import {Common} from '@strapi/strapi'

const defaultLocale = process.env.STRAPI_PLUGIN_I18N_INIT_LOCALE_CODE

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export async function seoHandler(contentType, uid: string) {
  const isDynamicPage = ['article', 'solution', 'service', 'case-study']
  let title = contentType.seo?.title || contentType.title
  if (isDynamicPage.some((id) => uid.endsWith(id))) {
    const needSuffix = ['.solution', '.service'].some((id) => uid.endsWith(id))
    const suffix = needSuffix ? `${capitalizeFirstLetter(uid.slice(uid.lastIndexOf('.') + 1))} - ` : ''
    title = `${suffix}${title} - 56k.Cloud`
  }
  contentType.seo = {
    title,
    description: contentType.seo?.description || contentType.description,
    image: contentType.image || (await strapi.entityService.findOne('plugin::upload.file', 2335)) //Default Image
  }
}

export async function bodyHandler(contentType, locale = 'en') {
  contentType.body = Array.isArray(contentType.body) ? contentType.body : []
  const contactComponentIndex = contentType.body
    .map((el) => el.__component)
    .indexOf('contact-sections.contact-with-gradient')
  if (contactComponentIndex >= 0) {
    const locations = await strapi.entityService.findMany('api::location.location', {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      populate: 'deep' as any,
      locale: locale
    })
    contentType.body[contactComponentIndex].locations = locations
  }

  const footerComponentName = 'footer.footer'
  const footer = await strapi.entityService.findMany(`api::${footerComponentName}`, {
    populate: '*',
    locale: locale
  })
  footer['__component'] = footerComponentName
  contentType.body.push(footer)
}

function generatePaths(keys: Array<string>, options: Array<string>, depth: number) {
  if (depth === 0) {
    return []
  }

  const paths = []
  for (const key of keys) {
    paths.push(key)
    for (const option of options) {
      paths.push(`${key}.${option}`)
    }
  }

  if (depth > 1) {
    const subPaths = generatePaths(paths, options, depth - 1)
    paths.push(...subPaths.map((subPath) => `${subPath}`))
  }

  return paths
}

export function createPopulateArray(depth = 2) {
  let props = ['image', 'cover', 'author.avatar', 'avatar', 'icon', 'role']
  const basePaths = ['image', 'author', 'tags', 'body', 'seo']
  Object.keys(strapi.components).forEach((key) => {
    const component = strapi.components[key]
    Object.keys(component.attributes).forEach((attribute) => {
      if (!attribute.includes('related')) {
        props.push(`${attribute}`)
      }
    })
  })
  props = [...new Set(props)]
  return generatePaths(basePaths, props, depth)
}

const cleanUnnecessaryProps = (contentType) => {
  const necessaryProps = ['id', 'slug', 'publishedAt', 'updatedAt', 'createdAt', 'body', 'seo', 'locale']
  Object.keys(contentType)
    .filter((key) => !necessaryProps.includes(key))
    .forEach((key) => {
      delete contentType[key]
    })
}

async function queryByLocale(uid: string, query: Record<string, string>, where?: Record<string, string>) {
  const populate = createPopulateArray()
  if (query.locale) {
    where = {
      ...where,
      locale: query.locale
    }
  }

  let contentType = await strapi.db.query(uid).findOne({
    populate,
    where
  })
  if (query.locale && (!contentType || (contentType.publishedAt === null && query.preview !== 'true'))) {
    contentType = await strapi.db.query(uid).findOne({
      populate,
      where: {
        ...where,
        locale: defaultLocale
      }
    })
  }
  return contentType
}

type FindBaseProps = {
  ctx
  uid: string
}

type FindOneProps = FindBaseProps & {
  where?: Record<string, string>
  // eslint-disable-next-line no-unused-vars
  contentTypeHandler?: (contentType: Record<string, unknown>) => void
}

export async function findOne(props: FindOneProps) {
  try {
    const contentType = await queryByLocale(props.uid, props.ctx.query, props.where)
    if (!props.ctx.query.seoOnly) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      props.contentTypeHandler && props.contentTypeHandler(contentType)
      await bodyHandler(contentType, props.ctx.query.locale)
    } else {
      await seoHandler(contentType, props.uid)
    }
    cleanUnnecessaryProps(contentType)
    return contentType
  } catch (e) {
    console.log(e)
    props.ctx.status = 404
    props.ctx.body = {error: 'not found'}
  }
}

async function findManyContentTypes(uid: string, select: Array<string>, showDrafts: boolean = false) {
  const publishedAt = showDrafts ? {} : {publishedAt: null}
  return await strapi.db.query(uid).findMany({
    select,
    where: {
      $not: publishedAt
    }
  })
}

export async function getAllPublishedSlugs(ctx, uid: Common.UID.Service) {
  const showDrafts = ctx.query['show-drafts'] === 'true'
  try {
    const contentTypes = await findManyContentTypes(uid, ['slug', 'locale'], showDrafts)
    return contentTypes.filter((content) => content.slug)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    const contentTypes = await findManyContentTypes(uid, ['slug'], showDrafts)
    return contentTypes
      .filter((content) => content.slug)
      .map((content) => ({
        slug: content.slug,
        locale: defaultLocale
      }))
  }
}
