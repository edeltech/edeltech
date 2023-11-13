import {MarkdownViewer} from '@/components/ui/molecules/mardown'
import {z} from 'zod'
import ArticleContentSection from '@/components/ui/molecules/article/content-section'
import BlogThreeColumn from '@/components/ui/organisms/blog-sections/blog-three-column'
import BookACallSplitWithPattern from '@/components/ui/organisms/contact-sections/book-a-call-split-with-pattern'
import ContactSplitWithPattern from '@/components/ui/organisms/contact-sections/contact-split-with-pattern'
import ContentMarkdown from '@/components/ui/organisms/content-sections/content-markdown'
import ContentTwoColumn from '@/components/ui/organisms/content-sections/content-two-column'
import Footer from '@/components/ui/organisms/footer'
import HeaderWithCards from '@/components/ui/organisms/header-sections/header-with-cards'
import HeroSimpleCenter from '@/components/ui/organisms/hero-sections/hero-simple-center'
import HeroSimpleCenterWithBackground 
  from '@/components/ui/organisms/hero-sections/hero-simple-center-with-background'
import ImageSimple from '@/components/ui/organisms/image-sections/image-simple'
import JoinOurTeam from '@/components/ui/organisms/cta-sections/join-our-team'
import LogoCloudsSimpleWithTitle from '@/components/ui/organisms/logo-clouds/logo-clouds-simple-with-title'
import ServiceThreeColumnWithLargeIcons
  from '@/components/ui/organisms/service-sections/service-three-column-with-large-icons'
import SolutionThreeColumnWithLargeIcons 
  from '@/components/ui/organisms/solutions-sections/solution-three-column-with-large-icons'
import TagFilter from '@/components/ui/molecules/tag-filter'
import TeamMemberCard from '@/components/ui/molecules/team-member'
import TeamThreeColumn from '@/components/ui/organisms/team-sections/team-three-column'
import ValueTwoColumn from '@/components/ui/organisms/value-sections/value-two-column'

export const componentBlueprintSchema = z.object({
  component: z.any(),
  props: z.record(z.string(), z.unknown())
})
export type ComponentBlueprint = z.infer<typeof componentBlueprintSchema>

function imageBlueprint(name='image') {
  return {
    name: `${name}.name`,
    alt: `${name}.alternativeText`,
    src: `${name}.url`,
    blurDataURL: `${name}.formats.thumbnail.url`,
    width: `${name}.width`,
    height: `${name}.height`
  }
}

function ctaBlueprint(name='cta') {
  return {
    [name]: {
      text: `${name}.text`,
      link: `${name}.link`,
      tone: `${name}.tone`
    }
  }
}

const tagBlueprint = {
  name: 'name'
}

const locationBlueprint =  {
  name: 'name',
  address: 'address',
  city: 'city',
  zipCode: 'zipCode',
  country: 'country',
  image: imageBlueprint(),
  gMap: 'gMap'
}


const CardWithIconBlueprint = {
  title: 'title',
  description: 'description',
  icon: 'icon'
}

function teamMemberBlueprint(name='') {
  return {
    name: `${name}${name ? '.' : ''}name`,
    bio: `${name}${name ? '.' : ''}bio`,
    twitter: `${name}${name ? '.' : ''}twitter`,
    website: `${name}${name ? '.' : ''}website`,
    slug: `${name}${name ? '.' : ''}slug`,
    role: `${name}${name ? '.' : ''}role`,
    avatar: imageBlueprint(`${name}${name ? '.' : ''}avatar`)
  }
}

export const footerBlueprint: ComponentBlueprint = {
  component: Footer,
  props: {
    text: 'text',
    solutions: [
      {
        title: 'title',
        slug: 'slug'
      }
    ],
    services: [
      {
        title: 'title',
        slug: 'slug'
      }
    ]
  }
}

export const contactSplitWithPatternBlueprint: ComponentBlueprint = {
  component: ContactSplitWithPattern,
  props: {
    title: 'title',
    subtitle: 'subtitle',
    locations: [locationBlueprint]
  }
}

export const bookACallSplitWithPatternBlueprint: ComponentBlueprint = {
  component: BookACallSplitWithPattern,
  props: {
    title: 'title',
    subtitle: 'subtitle',
    locations: [locationBlueprint]
  }
}

export const headerWithCardsBlueprint: ComponentBlueprint = {
  component: HeaderWithCards,
  props: {
    title: 'title',
    subtitle: 'subtitle',
    image: imageBlueprint(),
    cards: [CardWithIconBlueprint]
  }
}

export const tagFilterBlueprint: ComponentBlueprint = {
  component: TagFilter,
  props: {
    tags: [tagBlueprint]
  }
}

export const articleContentBlueprint: ComponentBlueprint = {
  component: ArticleContentSection,
  props: {
    title: 'title',
    content: 'content',
    publishedOn: 'publishedOn',
    author: {
      name: 'author.name',
      avatar: imageBlueprint('author.avatar')
    },
    tags: [tagBlueprint],
    image: imageBlueprint()
  }
}

export const blogThreeColumnBlueprint: ComponentBlueprint = {
  component: BlogThreeColumn,
  props: {
    title: 'title',
    subtitle: 'subtitle',
    articles: [
      {
        title: 'title',
        description: 'description',
        slug: 'slug',
        readTime: 'readTime',
        tags: [tagBlueprint],
        publishedOn: 'publishedOn',
        image: imageBlueprint(),
        author: {
          name: 'author.name',
          avatar: imageBlueprint('author.avatar')
        }
      }
    ]
  }
}

export const solutionThreeColumnWithLargeIconsBlueprint: ComponentBlueprint = {
  component: SolutionThreeColumnWithLargeIcons,
  props: {
    title: 'title',
    subtitle: 'subtitle',
    solutions: [
      {
        title: 'title',
        description: 'description',
        slug: 'slug',
        icon: 'icon'
      }
    ]
  }
}

export const servicesThreeColumnWithLargeIconsBlueprint: ComponentBlueprint = {
  component: ServiceThreeColumnWithLargeIcons,
  props: {
    title: 'title',
    subtitle: 'subtitle',
    services: [
      {
        title: 'title',
        description: 'description',
        slug: 'slug',
        icon: 'icon'
      }
    ]
  }
}

export function logoCloudsSimpleWithTitleBlueprint(companyType: string): ComponentBlueprint{
  return  {
    component: LogoCloudsSimpleWithTitle,
    props: {
      title: 'title',
      [`${companyType}->companies`]: [
        {
          name: 'name',
          image: imageBlueprint()
        }
      ]
    }
  }
}

export const heroSimpleCenterBlueprint: ComponentBlueprint = {
  component: HeroSimpleCenter,
  props: {
    title: 'title',
    subtitle: 'subtitle'
  }
}

export const heroSimpleCenterWithBackgroundBlueprint: ComponentBlueprint = {
  component: HeroSimpleCenterWithBackground,
  props: {
    title: 'title',
    subtitle: 'subtitle',
    image: imageBlueprint(),
    ...ctaBlueprint('leftCTA'),
    ...ctaBlueprint('rightCTA')
  }
}

export const contentTwoColumnBlueprint: ComponentBlueprint = {
  component: ContentTwoColumn,
  props: {
    contentLeft: 'contentLeft',
    contentRight: 'contentRight'
  }
}

export const valueTwoColumnBlueprint: ComponentBlueprint = {
  component: ValueTwoColumn,
  props: {
    title: 'title',
    subtitle: 'subtitle',
    values: [
      {
        name: 'name',
        description: 'description'
      }
    ]
  }
}

export const imageSimpleBlueprint: ComponentBlueprint = {
  component: ImageSimple,
  props: {
    image: imageBlueprint()
  }
}

export const joinOurTeamBlueprint: ComponentBlueprint = {
  component: JoinOurTeam,
  props: {
    title: 'title',
    subtitle: 'subtitle',
    ...ctaBlueprint(),
    image: imageBlueprint(),
    benefits: [{
      name: 'name'
    }]
  }
}

export const teamMemberCardBlueprint: ComponentBlueprint = {
  component: TeamMemberCard,
  props: {
    teamMember: teamMemberBlueprint('teamMember')
  }
}

export const teamThreeColumnBlueprint: ComponentBlueprint = {
  component: TeamThreeColumn,
  props: {
    title: 'title',
    subtitle: 'subtitle',
    teamMembers: [teamMemberBlueprint()]
  }
}

export const markdownViewerBlueprint: ComponentBlueprint = {
  component: MarkdownViewer,
  props: {
    content: 'content'
  }
}

export const contentMarkdownBlueprint: ComponentBlueprint = {
  component: ContentMarkdown,
  props: {
    content: 'content'
  }
}

export const openGraphBlueprint: ComponentBlueprint = {
  props: {
    title: 'title',
    description: 'description',
    image: imageBlueprint()
  }
}
