import {Dictionary} from '@/models/dictionary.model'
import {Suspense} from 'react'
import {draftMode} from 'next/headers'
import ArticleContentSection from '@/components/ui/molecules/article/content-section'
import BlogMasonry from '@/components/ui/organisms/blog-sections/blog-masonry'
import BlogThreeColumn from '@/components/ui/organisms/blog-sections/blog-three-column'
import CaseStudiesGridCards from '@/components/ui/organisms/case-studies-sections/case-studies-grid-cards'
import CaseStudyContentSection from '@/components/ui/molecules/case-study/content-section'
import CertificationsBadgesWithTitle from '@/components/ui/organisms/certifications-sections/certifications-badges-with-title'
import Contact from '@/components/ui/organisms/contact-sections/contact'
import ContentAlternatePositionWithImageItem from '@/components/ui/organisms/content-sections/content-alternate-position-with-image-item'
import ContentAlternatePositionWithImageList from '@/components/ui/organisms/content-sections/content-alternate-position-with-image-list'
import ContentMarkdown from '@/components/ui/organisms/content-sections/content-markdown'
import ContentTwoColumn from '@/components/ui/organisms/content-sections/content-two-column'
import CustomerLogosSimpleWithTitle from '@/components/ui/organisms/customer-sections/customer-logos-simple-with-title'
import DiagramFullWidth from '@/components/ui/organisms/diagram-sections/diagram-full-width'
import DraftModal from '@/components/ui/organisms/draft-modal'
import Footer from '@/components/ui/organisms/footer'
import Header from '@/components/ui/organisms/header'
import HeaderWithCardsWithIcon from '@/components/ui/organisms/header-sections/header-with-cards-with-icon'
import HeaderWithTextCards from '@/components/ui/organisms/header-sections/header-with-text-cards'
import HeroSimpleCenter from '@/components/ui/organisms/hero-sections/hero-simple-center'
import HeroWithFloatingGradients from '@/components/ui/organisms/hero-sections/hero-with-floating-gradients'
import HeroWithGradient from '@/components/ui/organisms/hero-sections/hero-with-gradient'
import ImageSimple from '@/components/ui/organisms/image-sections/image-simple'
import IntroductionWithLogo from '@/components/ui/organisms/content-sections/introduction-with-logo'
import JoinOurTeam from '@/components/ui/organisms/cta-sections/join-our-team'
import MapWithTitle from '@/components/ui/organisms/map-sections/map-with-title'
import PartnerLogosSimpleWithTitle from '@/components/ui/organisms/partner-sections/partner-logos-simple-with-title'
import ServiceAlternatePositionIcon from '@/components/ui/organisms/service-sections/service-alternate-position-icon'
import ServiceMasonryCard from '@/components/ui/organisms/service-sections/service-masonry-card'
import ServiceThreeColumnWithLargeIcons from '@/components/ui/organisms/service-sections/service-three-column-with-large-icons'
import SolutionOneColumn from '@/components/ui/organisms/solution-sections/solution-one-column'
import SolutionThreeColumnWithLargeIcons from '@/components/ui/organisms/solution-sections/solution-three-column-with-large-icons'
import SolutionThreeColumnsWithImage from '@/components/ui/organisms/solution-sections/solution-three-columns-with-image'
import TagFilter from '@/components/ui/molecules/tag-filter'
import TeamMemberCard from '@/components/ui/molecules/cards/team-member'
import TeamTwoColumn from '@/components/ui/organisms/team-sections/team-two-column'
import ValueTwoColumn from '@/components/ui/organisms/value-sections/value-two-column'

export type ComponentBlueprints = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export const needSuspense = ['blog-masonry']
export const componentBlueprints: ComponentBlueprints = {
  footer: Footer,
  'hero-simple-center': HeroSimpleCenter,
  'hero-with-gradient': HeroWithGradient,
  'hero-with-floating-gradients': HeroWithFloatingGradients,
  'blog-three-column': BlogThreeColumn,
  'blog-masonry': BlogMasonry,
  contact: Contact,
  'service-alternate-position-icon': ServiceAlternatePositionIcon,
  'service-three-column-with-large-icons': ServiceThreeColumnWithLargeIcons,
  'service-masonry-card': ServiceMasonryCard,
  'solution-one-column': SolutionOneColumn,
  'solution-three-column-with-large-icons': SolutionThreeColumnWithLargeIcons,
  'solution-three-columns-with-image': SolutionThreeColumnsWithImage,
  'partner-logo-simple-with-title': PartnerLogosSimpleWithTitle,
  'customer-logo-simple-with-title': CustomerLogosSimpleWithTitle,
  'article-content': ArticleContentSection,
  'content-two-column': ContentTwoColumn,
  'image-simple': ImageSimple,
  'value-two-column': ValueTwoColumn,
  'team-two-column': TeamTwoColumn,
  'join-our-team': JoinOurTeam,
  'tag-filter': TagFilter,
  'team-member-card': TeamMemberCard,
  'header-with-cards-with-icon': HeaderWithCardsWithIcon,
  'header-with-text-cards': HeaderWithTextCards,
  'content-markdown': ContentMarkdown,
  'introduction-with-logo': IntroductionWithLogo,
  'diagram-full-width': DiagramFullWidth,
  'content-alternate-position-with-image-list': ContentAlternatePositionWithImageList,
  'content-alternate-position-with-image-item': ContentAlternatePositionWithImageItem,
  'certifications-badges-with-title': CertificationsBadgesWithTitle,
  'map-with-title': MapWithTitle,
  'case-studies-grid-cards': CaseStudiesGridCards,
  'case-study-content': CaseStudyContentSection
}
export type ComponentBlueprint = {
  component: keyof ComponentBlueprints
  props: Record<string, unknown>
}

export function renderComponents(dictionary: Dictionary, components?: Array<ComponentBlueprint>) {
  return components?.map((item, index) => {
    const Component = componentBlueprints[item.component]
    if (!Component) {
      return
    }
    const render = (
      <Component
        {...item.props}
        dictionary={dictionary}
        key={index}
      />
    )
    return needSuspense.includes(item.component.toString()) ? <Suspense>{render}</Suspense> : render
  })
}

export function pageRenderer(dictionary: Dictionary, components?: Array<ComponentBlueprint>) {
  const {isEnabled} = draftMode()
  const children = renderComponents(dictionary, components)
  return (
    <>
      <Header dictionary={dictionary} />
      {isEnabled && <DraftModal />}
      {children}
    </>
  )
}
