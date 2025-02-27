import type {Schema, Attribute} from '@strapi/strapi'

export interface ValueSectionsValue extends Schema.Component {
  collectionName: 'components_value_sections_values'
  info: {
    displayName: 'value'
    description: ''
  }
  attributes: {
    name: Attribute.String & Attribute.Required
    description: Attribute.Text & Attribute.Required
    background: Attribute.Media<'images'> & Attribute.Required
  }
}

export interface ValueSectionsValueTwoColumn extends Schema.Component {
  collectionName: 'components_value_sections_value_two_columns'
  info: {
    displayName: 'value-two-rows'
    description: ''
  }
  attributes: {
    title: Attribute.String & Attribute.Required
    subtitle: Attribute.Text & Attribute.Required
    values: Attribute.Component<'value-sections.value', true>
  }
}

export interface TeamSectionsTeamTwoColumn extends Schema.Component {
  collectionName: 'team_two_columns'
  info: {
    displayName: 'team-two-column'
  }
  attributes: {
    title: Attribute.String & Attribute.Required
    subtitle: Attribute.Text & Attribute.Required
    teamMembers: Attribute.Relation<'team-sections.team-two-column', 'oneToMany', 'api::team-member.team-member'>
  }
}

export interface SolutionSectionsSolutionThreeColumnsWithImage extends Schema.Component {
  collectionName: 'solution_three_columns_with_images'
  info: {
    displayName: 'solution-three-columns-with-image'
    description: ''
  }
  attributes: {
    title: Attribute.String & Attribute.Required
    subtitle: Attribute.Text & Attribute.Required
    solutions: Attribute.Relation<
      'solution-sections.solution-three-columns-with-image',
      'oneToMany',
      'api::solution.solution'
    >
  }
}

export interface SolutionSectionsSolutionThreeColumnWithLargeIcons extends Schema.Component {
  collectionName: 'solution_three_column_with_large_icons'
  info: {
    displayName: 'solution-three-column-with-large-icons'
  }
  attributes: {
    title: Attribute.String & Attribute.Required
    subtitle: Attribute.Text & Attribute.Required
    solutions: Attribute.Relation<
      'solution-sections.solution-three-column-with-large-icons',
      'oneToMany',
      'api::solution.solution'
    >
  }
}

export interface SolutionSectionsSolutionOneColumn extends Schema.Component {
  collectionName: 'solution_one_column'
  info: {
    displayName: 'solution-one-column'
  }
  attributes: {
    title: Attribute.String & Attribute.Required
    subtitle: Attribute.Text & Attribute.Required
    solutions: Attribute.Relation<'solution-sections.solution-one-column', 'oneToMany', 'api::solution.solution'>
  }
}

export interface ServiceSectionsServiceThreeColumnWithLargeIcons extends Schema.Component {
  collectionName: 'service_three_column_with_large_icons'
  info: {
    displayName: 'service-three-column-with-large-icons'
  }
  attributes: {
    title: Attribute.String & Attribute.Required
    subtitle: Attribute.Text & Attribute.Required
    services: Attribute.Relation<
      'service-sections.service-three-column-with-large-icons',
      'oneToMany',
      'api::service.service'
    >
  }
}

export interface ServiceSectionsServiceMasonryCard extends Schema.Component {
  collectionName: 'service_masonry_cards'
  info: {
    displayName: 'service-masonry-card'
    description: ''
  }
  attributes: {
    title: Attribute.String & Attribute.Required
    subtitle: Attribute.Text & Attribute.Required
    services: Attribute.Relation<'service-sections.service-masonry-card', 'oneToMany', 'api::service.service'>
  }
}

export interface ServiceSectionsServiceAlternatePositionIcon extends Schema.Component {
  collectionName: 'service_alternate_position_icon'
  info: {
    displayName: 'service-alternate-position-icon'
  }
  attributes: {
    title: Attribute.String & Attribute.Required
    subtitle: Attribute.Text & Attribute.Required
    services: Attribute.Relation<
      'service-sections.service-alternate-position-icon',
      'oneToMany',
      'api::service.service'
    >
  }
}

export interface SeoSeo extends Schema.Component {
  collectionName: 'components_seo_seos'
  info: {
    displayName: 'seo'
    description: ''
  }
  attributes: {
    title: Attribute.String & Attribute.Required
    description: Attribute.Text
  }
}

export interface SeoOpenGraph extends Schema.Component {
  collectionName: 'components_seo_open_graphs'
  info: {
    displayName: 'open-graph'
    description: ''
  }
  attributes: {
    title: Attribute.String & Attribute.Required
    description: Attribute.Text & Attribute.Required
    image: Attribute.Media<'images'> & Attribute.Required
  }
}

export interface PartnerSectionsPartnerLogoSimpleWithTitle extends Schema.Component {
  collectionName: 'partner_logo_simple_with_titles'
  info: {
    displayName: 'partner-logo-simple-with-title'
    description: ''
  }
  attributes: {
    surtitle: Attribute.String & Attribute.Required
    title: Attribute.String & Attribute.Required
    partners: Attribute.Relation<'partner-sections.partner-logo-simple-with-title', 'oneToMany', 'api::partner.partner'>
  }
}

export interface MapSectionsMapWithTitle extends Schema.Component {
  collectionName: 'components_map_sections_map_with_titles'
  info: {
    displayName: 'map-with-title'
    description: ''
  }
  attributes: {
    title: Attribute.String
    subtitle: Attribute.Text
    locations: Attribute.Relation<'map-sections.map-with-title', 'oneToMany', 'api::location.location'>
  }
}

export interface ImageSectionsImageSimple extends Schema.Component {
  collectionName: 'components_image_sections_image_simples'
  info: {
    displayName: 'image-simple'
  }
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required
  }
}

export interface IconIcon extends Schema.Component {
  collectionName: 'components_icon_icons'
  info: {
    displayName: 'icon'
    description: ''
  }
  attributes: {
    name: Attribute.Enumeration<
      [
        'AcademicCapIcon',
        'AdjustmentsHorizontalIcon',
        'AdjustmentsVerticalIcon',
        'ArchiveBoxArrowDownIcon',
        'ArchiveBoxIcon',
        'ArchiveBoxXMarkIcon',
        'ArrowDownCircleIcon',
        'ArrowDownIcon',
        'ArrowDownLeftIcon',
        'ArrowDownOnSquareIcon',
        'ArrowDownOnSquareStackIcon',
        'ArrowDownRightIcon',
        'ArrowDownTrayIcon',
        'ArrowLeftCircleIcon',
        'ArrowLeftIcon',
        'ArrowLeftOnRectangleIcon',
        'ArrowLongDownIcon',
        'ArrowLongLeftIcon',
        'ArrowLongRightIcon',
        'ArrowLongUpIcon',
        'ArrowPathIcon',
        'ArrowPathRoundedSquareIcon',
        'ArrowRightCircleIcon',
        'ArrowRightIcon',
        'ArrowRightOnRectangleIcon',
        'ArrowSmallDownIcon',
        'ArrowSmallLeftIcon',
        'ArrowSmallRightIcon',
        'ArrowSmallUpIcon',
        'ArrowTopRightOnSquareIcon',
        'ArrowTrendingDownIcon',
        'ArrowTrendingUpIcon',
        'ArrowUpCircleIcon',
        'ArrowUpIcon',
        'ArrowUpLeftIcon',
        'ArrowUpOnSquareIcon',
        'ArrowUpOnSquareStackIcon',
        'ArrowUpRightIcon',
        'ArrowUpTrayIcon',
        'ArrowUturnDownIcon',
        'ArrowUturnLeftIcon',
        'ArrowUturnRightIcon',
        'ArrowUturnUpIcon',
        'ArrowsPointingInIcon',
        'ArrowsPointingOutIcon',
        'ArrowsRightLeftIcon',
        'ArrowsUpDownIcon',
        'AtSymbolIcon',
        'BackspaceIcon',
        'BackwardIcon',
        'BanknotesIcon',
        'Bars2Icon',
        'Bars3BottomLeftIcon',
        'Bars3BottomRightIcon',
        'Bars3CenterLeftIcon',
        'Bars3Icon',
        'Bars4Icon',
        'BarsArrowDownIcon',
        'BarsArrowUpIcon',
        'Battery0Icon',
        'Battery100Icon',
        'Battery50Icon',
        'BeakerIcon',
        'BellAlertIcon',
        'BellIcon',
        'BellSlashIcon',
        'BellSnoozeIcon',
        'BoltIcon',
        'BoltSlashIcon',
        'BookOpenIcon',
        'BookmarkIcon',
        'BookmarkSlashIcon',
        'BookmarkSquareIcon',
        'BriefcaseIcon',
        'BugAntIcon',
        'BuildingLibraryIcon',
        'BuildingOffice2Icon',
        'BuildingOfficeIcon',
        'BuildingStorefrontIcon',
        'CakeIcon',
        'CalculatorIcon',
        'CalendarDaysIcon',
        'CalendarIcon',
        'CameraIcon',
        'ChartBarIcon',
        'ChartBarSquareIcon',
        'ChartPieIcon',
        'ChatBubbleBottomCenterIcon',
        'ChatBubbleBottomCenterTextIcon',
        'ChatBubbleLeftEllipsisIcon',
        'ChatBubbleLeftIcon',
        'ChatBubbleLeftRightIcon',
        'ChatBubbleOvalLeftEllipsisIcon',
        'ChatBubbleOvalLeftIcon',
        'CheckBadgeIcon',
        'CheckCircleIcon',
        'CheckIcon',
        'ChevronDoubleDownIcon',
        'ChevronDoubleLeftIcon',
        'ChevronDoubleRightIcon',
        'ChevronDoubleUpIcon',
        'ChevronDownIcon',
        'ChevronLeftIcon',
        'ChevronRightIcon',
        'ChevronUpDownIcon',
        'ChevronUpIcon',
        'CircleStackIcon',
        'ClipboardDocumentCheckIcon',
        'ClipboardDocumentIcon',
        'ClipboardDocumentListIcon',
        'ClipboardIcon',
        'ClockIcon',
        'CloudArrowDownIcon',
        'CloudArrowUpIcon',
        'CloudIcon',
        'CodeBracketIcon',
        'CodeBracketSquareIcon',
        'Cog6ToothIcon',
        'Cog8ToothIcon',
        'CogIcon',
        'CommandLineIcon',
        'ComputerDesktopIcon',
        'CpuChipIcon',
        'CreditCardIcon',
        'CubeIcon',
        'CubeTransparentIcon',
        'CurrencyBangladeshiIcon',
        'CurrencyDollarIcon',
        'CurrencyEuroIcon',
        'CurrencyPoundIcon',
        'CurrencyRupeeIcon',
        'CurrencyYenIcon',
        'CursorArrowRaysIcon',
        'CursorArrowRippleIcon',
        'DevicePhoneMobileIcon',
        'DeviceTabletIcon',
        'DocumentArrowDownIcon',
        'DocumentArrowUpIcon',
        'DocumentChartBarIcon',
        'DocumentCheckIcon',
        'DocumentDuplicateIcon',
        'DocumentIcon',
        'DocumentMagnifyingGlassIcon',
        'DocumentMinusIcon',
        'DocumentPlusIcon',
        'DocumentTextIcon',
        'EllipsisHorizontalCircleIcon',
        'EllipsisHorizontalIcon',
        'EllipsisVerticalIcon',
        'EnvelopeIcon',
        'EnvelopeOpenIcon',
        'ExclamationCircleIcon',
        'ExclamationTriangleIcon',
        'EyeDropperIcon',
        'EyeIcon',
        'EyeSlashIcon',
        'FaceFrownIcon',
        'FaceSmileIcon',
        'FilmIcon',
        'FingerPrintIcon',
        'FireIcon',
        'FlagIcon',
        'FolderArrowDownIcon',
        'FolderIcon',
        'FolderMinusIcon',
        'FolderOpenIcon',
        'FolderPlusIcon',
        'ForwardIcon',
        'FunnelIcon',
        'GifIcon',
        'GiftIcon',
        'GiftTopIcon',
        'GlobeAltIcon',
        'GlobeAmericasIcon',
        'GlobeAsiaAustraliaIcon',
        'GlobeEuropeAfricaIcon',
        'HandRaisedIcon',
        'HandThumbDownIcon',
        'HandThumbUpIcon',
        'HashtagIcon',
        'HeartIcon',
        'HomeIcon',
        'HomeModernIcon',
        'IdentificationIcon',
        'InboxArrowDownIcon',
        'InboxIcon',
        'InboxStackIcon',
        'InformationCircleIcon',
        'KeyIcon',
        'LanguageIcon',
        'LifebuoyIcon',
        'LightBulbIcon',
        'LinkIcon',
        'ListBulletIcon',
        'LockClosedIcon',
        'LockOpenIcon',
        'MagnifyingGlassCircleIcon',
        'MagnifyingGlassIcon',
        'MagnifyingGlassMinusIcon',
        'MagnifyingGlassPlusIcon',
        'MapIcon',
        'MapPinIcon',
        'MegaphoneIcon',
        'MicrophoneIcon',
        'MinusCircleIcon',
        'MinusIcon',
        'MinusSmallIcon',
        'MoonIcon',
        'MusicalNoteIcon',
        'NewspaperIcon',
        'NoSymbolIcon',
        'PaintBrushIcon',
        'PaperAirplaneIcon',
        'PaperClipIcon',
        'PauseCircleIcon',
        'PauseIcon',
        'PencilIcon',
        'PencilSquareIcon',
        'PhoneArrowDownLeftIcon',
        'PhoneArrowUpRightIcon',
        'PhoneIcon',
        'PhoneXMarkIcon',
        'PhotoIcon',
        'PlayCircleIcon',
        'PlayIcon',
        'PlayPauseIcon',
        'PlusCircleIcon',
        'PlusIcon',
        'PlusSmallIcon',
        'PowerIcon',
        'PresentationChartBarIcon',
        'PresentationChartLineIcon',
        'PrinterIcon',
        'PuzzlePieceIcon',
        'QrCodeIcon',
        'QuestionMarkCircleIcon',
        'QueueListIcon',
        'RadioIcon',
        'ReceiptPercentIcon',
        'ReceiptRefundIcon',
        'RectangleGroupIcon',
        'RectangleStackIcon',
        'RocketLaunchIcon',
        'RssIcon',
        'ScaleIcon',
        'ScissorsIcon',
        'ServerIcon',
        'ServerStackIcon',
        'ShareIcon',
        'ShieldCheckIcon',
        'ShieldExclamationIcon',
        'ShoppingBagIcon',
        'ShoppingCartIcon',
        'SignalIcon',
        'SignalSlashIcon',
        'SparklesIcon',
        'SpeakerWaveIcon',
        'SpeakerXMarkIcon',
        'Square2StackIcon',
        'Square3Stack3DIcon',
        'Squares2X2Icon',
        'SquaresPlusIcon',
        'StarIcon',
        'StopCircleIcon',
        'StopIcon',
        'SunIcon',
        'SwatchIcon',
        'TableCellsIcon',
        'TagIcon',
        'TicketIcon',
        'TrashIcon',
        'TrophyIcon',
        'TruckIcon',
        'TvIcon',
        'UserCircleIcon',
        'UserGroupIcon',
        'UserIcon',
        'UserMinusIcon',
        'UserPlusIcon',
        'UsersIcon',
        'VariableIcon',
        'VideoCameraIcon',
        'VideoCameraSlashIcon',
        'ViewColumnsIcon',
        'ViewfinderCircleIcon',
        'WalletIcon',
        'WifiIcon',
        'WindowIcon',
        'WrenchIcon',
        'WrenchScrewdriverIcon',
        'XCircleIcon',
        'XMarkIcon'
      ]
    >
    type: Attribute.Enumeration<['outline', 'solid']> & Attribute.Required & Attribute.DefaultTo<'outline'>
  }
}

export interface HeroSectionsHeroWithGradient extends Schema.Component {
  collectionName: 'components_hero_sections_hero_with_gradients'
  info: {
    displayName: 'hero-with-gradient'
    description: ''
  }
  attributes: {
    surtitle: Attribute.String & Attribute.Required
    title: Attribute.String & Attribute.Required
    subtitle: Attribute.Text & Attribute.Required
  }
}

export interface HeroSectionsHeroWithFloatingGradients extends Schema.Component {
  collectionName: 'hero_with_floating_gradients'
  info: {
    displayName: 'hero-with-floating-gradients'
    description: ''
  }
  attributes: {
    title: Attribute.String & Attribute.Required
    subtitle: Attribute.Text & Attribute.Required
    cta: Attribute.Component<'cta.button'> & Attribute.Required
  }
}

export interface HeroSectionsHeroSimpleCenter extends Schema.Component {
  collectionName: 'components_hero_sections_hero_simple_centers'
  info: {
    displayName: 'hero-simple-center'
  }
  attributes: {
    title: Attribute.String & Attribute.Required
    subtitle: Attribute.Text
  }
}

export interface HeaderSectionsHeaderWithTextCards extends Schema.Component {
  collectionName: 'components_header_sections_header_with_text_cards'
  info: {
    displayName: 'header-with-text-cards'
    description: ''
  }
  attributes: {
    title: Attribute.String & Attribute.Required
    subtitle: Attribute.Text & Attribute.Required
    cards: Attribute.Component<'cards.card-text', true> & Attribute.Required
  }
}

export interface HeaderSectionsHeaderWithCardsWithIcon extends Schema.Component {
  collectionName: 'header_with_cards_with_icons'
  info: {
    displayName: 'header-with-cards-with-icon'
  }
  attributes: {
    title: Attribute.String & Attribute.Required
    subtitle: Attribute.Text & Attribute.Required
    cards: Attribute.Component<'cards.card-with-icon', true>
  }
}

export interface FilterTagsFilter extends Schema.Component {
  collectionName: 'tag_filter'
  info: {
    displayName: 'tag-filter'
    description: ''
  }
  attributes: {
    tags: Attribute.Relation<'filter.tags-filter', 'oneToMany', 'api::tag.tag'>
  }
}

export interface DiagramSectionsDiagramFullWidth extends Schema.Component {
  collectionName: 'diagram_full_width'
  info: {
    displayName: 'diagram-full-width'
    description: ''
  }
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required
  }
}

export interface CustomerSectionsCustomerLogoSimpleWithTitle extends Schema.Component {
  collectionName: 'customer_logo_simple_with_titles'
  info: {
    displayName: 'customer-logo-simple-with-title'
    description: ''
  }
  attributes: {
    surtitle: Attribute.String & Attribute.Required
    title: Attribute.String & Attribute.Required
    customers: Attribute.Relation<
      'customer-sections.customer-logo-simple-with-title',
      'oneToMany',
      'api::customer.customer'
    >
  }
}

export interface CtaSectionsJoinOurTeam extends Schema.Component {
  collectionName: 'components_cta_sections_join_our_teams'
  info: {
    displayName: 'join-our-team'
    description: ''
  }
  attributes: {
    title: Attribute.String & Attribute.Required
    subtitle: Attribute.Text & Attribute.Required
    cta: Attribute.Component<'cta.button'>
    benefits: Attribute.Component<'benefit.benefit', true>
    image: Attribute.Media<'images'> & Attribute.Required
  }
}

export interface ContentSectionIntroductionWithLogo extends Schema.Component {
  collectionName: 'components_content_section_introduction_with_logos'
  info: {
    displayName: 'introduction-with-logo'
    description: ''
  }
  attributes: {
    surtitle: Attribute.String & Attribute.Required
    title: Attribute.String & Attribute.Required
    description: Attribute.Text & Attribute.Required
    logo: Attribute.Media<'images'> & Attribute.Required
  }
}

export interface ContentSectionContentTwoColumn extends Schema.Component {
  collectionName: 'components_content_section_content_two_columns'
  info: {
    displayName: 'Content-two-column'
  }
  attributes: {
    contentLeft: Attribute.Text & Attribute.Required
    contentRight: Attribute.Text & Attribute.Required
  }
}

export interface ContentSectionContentMarkdown extends Schema.Component {
  collectionName: 'components_content_section_content_markdowns'
  info: {
    displayName: 'content-markdown'
  }
  attributes: {
    content: Attribute.RichText & Attribute.Required
  }
}

export interface ContentSectionContentAlternatePositionWithImageList extends Schema.Component {
  collectionName: 'components_content_alternate_pos_w_image_lists'
  info: {
    displayName: 'content-alternate-position-with-image-list'
    description: ''
  }
  attributes: {
    items: Attribute.Component<'cards.content-alternate-position-with-image-item', true> & Attribute.Required
  }
}

export interface CtaButton extends Schema.Component {
  collectionName: 'components_cta_buttons'
  info: {
    displayName: 'button'
    description: ''
  }
  attributes: {
    title: Attribute.String & Attribute.Required
    link: Attribute.String & Attribute.Required
    tone: Attribute.Enumeration<['primary', 'secondary']> & Attribute.Required & Attribute.DefaultTo<'primary'>
  }
}

export interface ContactSectionsContact extends Schema.Component {
  collectionName: 'contacts'
  info: {
    displayName: 'contact'
    description: ''
  }
  attributes: {
    title: Attribute.String & Attribute.Required
    subtitle: Attribute.String & Attribute.Required
  }
}

export interface CertificationsSectionsCertificationsBadgesWithTitle extends Schema.Component {
  collectionName: 'certifications_badges_with_titles'
  info: {
    displayName: 'certifications-badges-with-title'
    description: ''
  }
  attributes: {
    title: Attribute.String & Attribute.Required
    horizontalBadgesImage: Attribute.Media<'images'> & Attribute.Required
    verticalBadgesImage: Attribute.Media<'images'> & Attribute.Required
  }
}

export interface CaseStudiesSectionsCaseStudiesGridCards extends Schema.Component {
  collectionName: 'case_studies_grid_cards'
  info: {
    displayName: 'case-studies-grid-cards'
    description: ''
  }
  attributes: {
    case_studies: Attribute.Relation<
      'case-studies-sections.case-studies-grid-cards',
      'oneToMany',
      'api::case-study.case-study'
    >
  }
}

export interface BlogSectionsBlogThreeColumn extends Schema.Component {
  collectionName: 'components_blog_sections_blog_three_columns'
  info: {
    displayName: 'blog-three-column'
    description: ''
  }
  attributes: {
    title: Attribute.String & Attribute.Required
    articles: Attribute.Relation<'blog-sections.blog-three-column', 'oneToMany', 'api::article.article'>
    subtitle: Attribute.Text & Attribute.Required
  }
}

export interface BlogSectionsBlogMasonry extends Schema.Component {
  collectionName: 'components_blog_sections_blog_masonries'
  info: {
    displayName: 'blog-masonry'
    description: ''
  }
  attributes: {
    articles: Attribute.Relation<'blog-sections.blog-masonry', 'oneToMany', 'api::article.article'>
  }
}

export interface CardsContentAlternatePositionWithImageItem extends Schema.Component {
  collectionName: 'components_content_alternate_pos_w_image_items'
  info: {
    displayName: 'content-alternate-position-with-image-item'
    description: ''
  }
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required
    title: Attribute.String & Attribute.Required
    description: Attribute.Text & Attribute.Required
    link: Attribute.String & Attribute.Required
  }
}

export interface CardsCardWithIcon extends Schema.Component {
  collectionName: 'components_cards_card_with_icons'
  info: {
    displayName: 'card-with-icon'
    description: ''
  }
  attributes: {
    title: Attribute.String & Attribute.Required
    description: Attribute.Text & Attribute.Required
    icon: Attribute.Component<'icon.icon'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
  }
}

export interface CardsCardText extends Schema.Component {
  collectionName: 'components_cards_card_texts'
  info: {
    displayName: 'card-text'
    description: ''
  }
  attributes: {
    title: Attribute.String & Attribute.Required
    description: Attribute.Text & Attribute.Required
  }
}

export interface BenefitBenefit extends Schema.Component {
  collectionName: 'components_benefit_benefits'
  info: {
    displayName: 'benefit'
  }
  attributes: {
    name: Attribute.String & Attribute.Required
  }
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'value-sections.value': ValueSectionsValue
      'value-sections.value-two-column': ValueSectionsValueTwoColumn
      'team-sections.team-two-column': TeamSectionsTeamTwoColumn
      'solution-sections.solution-three-columns-with-image': SolutionSectionsSolutionThreeColumnsWithImage
      'solution-sections.solution-three-column-with-large-icons': SolutionSectionsSolutionThreeColumnWithLargeIcons
      'solution-sections.solution-one-column': SolutionSectionsSolutionOneColumn
      'service-sections.service-three-column-with-large-icons': ServiceSectionsServiceThreeColumnWithLargeIcons
      'service-sections.service-masonry-card': ServiceSectionsServiceMasonryCard
      'service-sections.service-alternate-position-icon': ServiceSectionsServiceAlternatePositionIcon
      'seo.seo': SeoSeo
      'seo.open-graph': SeoOpenGraph
      'partner-sections.partner-logo-simple-with-title': PartnerSectionsPartnerLogoSimpleWithTitle
      'map-sections.map-with-title': MapSectionsMapWithTitle
      'image-sections.image-simple': ImageSectionsImageSimple
      'icon.icon': IconIcon
      'hero-sections.hero-with-gradient': HeroSectionsHeroWithGradient
      'hero-sections.hero-with-floating-gradients': HeroSectionsHeroWithFloatingGradients
      'hero-sections.hero-simple-center': HeroSectionsHeroSimpleCenter
      'header-sections.header-with-text-cards': HeaderSectionsHeaderWithTextCards
      'header-sections.header-with-cards-with-icon': HeaderSectionsHeaderWithCardsWithIcon
      'filter.tags-filter': FilterTagsFilter
      'diagram-sections.diagram-full-width': DiagramSectionsDiagramFullWidth
      'customer-sections.customer-logo-simple-with-title': CustomerSectionsCustomerLogoSimpleWithTitle
      'cta-sections.join-our-team': CtaSectionsJoinOurTeam
      'content-section.introduction-with-logo': ContentSectionIntroductionWithLogo
      'content-section.content-two-column': ContentSectionContentTwoColumn
      'content-section.content-markdown': ContentSectionContentMarkdown
      'content-section.content-alternate-position-with-image-list': ContentSectionContentAlternatePositionWithImageList
      'cta.button': CtaButton
      'contact-sections.contact': ContactSectionsContact
      'certifications-sections.certifications-badges-with-title': CertificationsSectionsCertificationsBadgesWithTitle
      'case-studies-sections.case-studies-grid-cards': CaseStudiesSectionsCaseStudiesGridCards
      'blog-sections.blog-three-column': BlogSectionsBlogThreeColumn
      'blog-sections.blog-masonry': BlogSectionsBlogMasonry
      'cards.content-alternate-position-with-image-item': CardsContentAlternatePositionWithImageItem
      'cards.card-with-icon': CardsCardWithIcon
      'cards.card-text': CardsCardText
      'benefit.benefit': BenefitBenefit
    }
  }
}
