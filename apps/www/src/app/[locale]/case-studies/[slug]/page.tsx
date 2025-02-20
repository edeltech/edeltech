import {BasePageProps} from '../../page'
import {Metadata} from 'next'
import {getDictionary} from '../../dictionaries'
import {getList, getPageComponents, getPageSeo} from '@/utils/cms/endpoints'
import {locales} from '../../../../../configs/shared'
import {notFound} from 'next/navigation'
import {pageRenderer} from '@/utils/cms/renderer/components'

type CaseStudyPageProps = BasePageProps & {
  params: {
    slug: string
  }
}

const basePath = 'case-studies/'

export async function generateStaticParams() {
  const staticParams = [] as Array<Record<string, string>>
  const caseStudies = await getList('case-studies')
  locales.forEach((locale) => {
    staticParams.push(
      ...caseStudies.map((caseStudy) => {
        return {
          ...caseStudy,
          locale: locale
        }
      })
    )
  })
  return staticParams
}

export async function generateMetadata({params}: CaseStudyPageProps): Promise<Metadata> {
  const props = await getPageSeo(`${basePath}${params.slug}`)
  if (props) {
    return {
      title: props.title,
      description: props.description,
      openGraph: {
        url: `/case-studies/${params.slug}`,
        images: [props.image.url]
      }
    }
  }
  return {}
}

export default async function CaseStudyPage({params}: CaseStudyPageProps) {
  try {
    const dict = await getDictionary(params.locale)
    const components = await getPageComponents(`${basePath}${params.slug}`)
    return pageRenderer(dict, components)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    notFound()
  }
}
