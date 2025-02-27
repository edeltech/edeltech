import {MetadataRoute} from 'next'
import {getList} from '@/utils/cms/endpoints'
import {hostname} from '../../configs/server'
import {locales} from '../../configs/shared'

const staticPaths = ['/', '/blog', '/about-us']

async function getArticlePaths() {
  return (await getList('articles'))
    .map((article) => {
      return locales.map((locale) => {
        return `${locale}/blog/${article.slug}`
      })
    })
    .flat(1)
}

async function getCaseStudiePaths() {
  return (await getList('case-studies'))
    .map((caseStudy) => {
      return locales.map((locale) => {
        return `${locale}/case-studies/${caseStudy.slug}`
      })
    })
    .flat(1)
}

async function getSolutionsPaths() {
  return (await getList('solutions')).map((solution) => {
    return `${solution.locale}/solutions/${solution.slug}`
  })
}

async function getServicesPaths() {
  return (await getList('services')).map((service) => {
    return `${service.locale}/services/${service.slug}`
  })
}

function getStaticPaths() {
  return locales
    .map((locale) => {
      return staticPaths.map((path) => {
        return `${locale}${path}`
      })
    })
    .flat(1)
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const paths = [
    ...getStaticPaths(),
    ...(await getArticlePaths()),
    ...(await getSolutionsPaths()),
    ...(await getServicesPaths()),
    ...(await getCaseStudiePaths())
  ]

  return paths.map((path) => ({
    url: `${hostname}${path}`,
    lastModified: new Date()
  }))
}
