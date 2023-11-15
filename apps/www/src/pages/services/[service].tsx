import {GetStaticPropsContext} from 'next'
import {PageProps} from '@/models/page.mode'
import {Service} from '@/models/service.model'
import {getPageProps} from '@/utils/cms/endpoints'
import {pageRenderer} from '@/utils/cms/renderer/components'
import {strapiFetcher} from '../../../configs/server'
import {useRouter} from 'next/router'

export default function ServicePage({components, seo}: PageProps) {
  const router = useRouter()
  return pageRenderer(components, seo, router.asPath)
}

export async function getStaticPaths() {
  const services = await strapiFetcher.call({
    path: '/api/services-slugs'
  })
  const paths = services.map((service: Partial<Service>) => ({
    params: {service: service.slug}
  }))
  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const service = context.params?.service || ''
  const props = await getPageProps(`services/${service}`, context.locale)
  return {props}
}
