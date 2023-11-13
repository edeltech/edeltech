import type { Schema, Attribute } from '@strapi/strapi';

export interface BenefitBenefit extends Schema.Component {
  collectionName: 'components_benefit_benefits';
  info: {
    displayName: 'benefit';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
  };
}

export interface BlogSectionsBlogThreeColumn extends Schema.Component {
  collectionName: 'components_blog_sections_blog_three_columns';
  info: {
    displayName: 'blog-three-column';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    articles: Attribute.Relation<
      'blog-sections.blog-three-column',
      'oneToMany',
      'api::article.article'
    >;
    subtitle: Attribute.Text & Attribute.Required;
  };
}

export interface CardsCardWithIcon extends Schema.Component {
  collectionName: 'components_cards_card_with_icons';
  info: {
    displayName: 'card-with-icon';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    icon: Attribute.Component<'icon.icon'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface ContactSectionsBookACallSplitWithPattern
  extends Schema.Component {
  collectionName: 'k book_a_call_split_with_patterns';
  info: {
    displayName: 'book-a-call-split-with-pattern';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.Text & Attribute.Required;
  };
}

export interface ContactSectionsContactSplitWithPattern
  extends Schema.Component {
  collectionName: 'contact_split_with_patterns';
  info: {
    displayName: 'contact-split-with-pattern';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String & Attribute.Required;
  };
}

export interface ContentSectionContentMarkdown extends Schema.Component {
  collectionName: 'components_content_section_content_markdowns';
  info: {
    displayName: 'content-markdown';
  };
  attributes: {
    content: Attribute.RichText & Attribute.Required;
  };
}

export interface ContentSectionContentTwoColumn extends Schema.Component {
  collectionName: 'components_content_section_content_two_columns';
  info: {
    displayName: 'Content-two-column';
  };
  attributes: {
    contentLeft: Attribute.Text & Attribute.Required;
    contentRight: Attribute.Text & Attribute.Required;
  };
}

export interface CtaSectionsJoinOurTeam extends Schema.Component {
  collectionName: 'components_cta_sections_join_our_teams';
  info: {
    displayName: 'join-our-team';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.Text & Attribute.Required;
    cta: Attribute.Component<'cta.button'>;
    benefits: Attribute.Component<'benefit.benefit', true>;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface CtaButton extends Schema.Component {
  collectionName: 'components_cta_buttons';
  info: {
    displayName: 'button';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
    tone: Attribute.Enumeration<['primary', 'secondary']> &
      Attribute.Required &
      Attribute.DefaultTo<'primary'>;
  };
}

export interface CustomerSectionsCustomerLogoSimpleWithTitle
  extends Schema.Component {
  collectionName: 'customer_logo_simple_with_titles';
  info: {
    displayName: 'customer-logo-simple-with-title';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    customers: Attribute.Relation<
      'customer-sections.customer-logo-simple-with-title',
      'oneToMany',
      'api::customer.customer'
    >;
  };
}

export interface FilterTagsFilter extends Schema.Component {
  collectionName: 'tag_filter';
  info: {
    displayName: 'tag-filter';
    description: '';
  };
  attributes: {
    tags: Attribute.Relation<'filter.tags-filter', 'oneToMany', 'api::tag.tag'>;
  };
}

export interface HeaderSectionsHeaderWithCards extends Schema.Component {
  collectionName: 'components_header_sections_header_with_cards';
  info: {
    displayName: 'header-with-cards';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.Text & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    cards: Attribute.Component<'cards.card-with-icon', true>;
  };
}

export interface HeroSectionsHeroSimpleCenterWithBackground
  extends Schema.Component {
  collectionName: 'hero_simple_center_with_backgrounds';
  info: {
    displayName: 'hero-simple-center-with-background';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.Text;
    leftCTA: Attribute.Component<'cta.button'>;
    rightCTA: Attribute.Component<'cta.button'>;
  };
}

export interface HeroSectionsHeroSimpleCenter extends Schema.Component {
  collectionName: 'components_hero_sections_hero_simple_centers';
  info: {
    displayName: 'hero-simple-center';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.Text;
  };
}

export interface IconIcon extends Schema.Component {
  collectionName: 'components_icon_icons';
  info: {
    displayName: 'icon';
    description: '';
  };
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
    >;
    type: Attribute.Enumeration<['outline', 'solid']> &
      Attribute.Required &
      Attribute.DefaultTo<'outline'>;
  };
}

export interface ImageSectionsImageSimple extends Schema.Component {
  collectionName: 'components_image_sections_image_simples';
  info: {
    displayName: 'image-simple';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
  };
}

export interface PartnerSectionsPartnerLogoSimpleWithTitle
  extends Schema.Component {
  collectionName: 'partner_logo_simple_with_titles';
  info: {
    displayName: 'partner-logo-simple-with-title';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    partners: Attribute.Relation<
      'partner-sections.partner-logo-simple-with-title',
      'oneToMany',
      'api::partner.partner'
    >;
  };
}

export interface SeoOpenGraph extends Schema.Component {
  collectionName: 'components_seo_open_graphs';
  info: {
    displayName: 'open-graph';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface ServiceSectionsServiceThreeColumnWithLargeIcons
  extends Schema.Component {
  collectionName: 'service_three_column_with_large_icons';
  info: {
    displayName: 'service-three-column-with-large-icons';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.Text & Attribute.Required;
    services: Attribute.Relation<
      'service-sections.service-three-column-with-large-icons',
      'oneToMany',
      'api::service.service'
    >;
  };
}

export interface SolutionSectionsSolutionThreeColumnWithLargeIcons
  extends Schema.Component {
  collectionName: 'solution_three_column_with_large_icons';
  info: {
    displayName: 'solution-three-column-with-large-icons';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.Text & Attribute.Required;
    solutions: Attribute.Relation<
      'solution-sections.solution-three-column-with-large-icons',
      'oneToMany',
      'api::solution.solution'
    >;
  };
}

export interface TeamSectionsTeamThreeColumn extends Schema.Component {
  collectionName: 'team_three_columns';
  info: {
    displayName: 'team-three-column';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.Text & Attribute.Required;
    teamMembers: Attribute.Relation<
      'team-sections.team-three-column',
      'oneToMany',
      'api::team-member.team-member'
    >;
  };
}

export interface ValueSectionsValueTwoColumn extends Schema.Component {
  collectionName: 'components_value_sections_value_two_columns';
  info: {
    displayName: 'value-two-column';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.Text & Attribute.Required;
    values: Attribute.Component<'value-sections.value', true>;
  };
}

export interface ValueSectionsValue extends Schema.Component {
  collectionName: 'components_value_sections_values';
  info: {
    displayName: 'value';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    description: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'benefit.benefit': BenefitBenefit;
      'blog-sections.blog-three-column': BlogSectionsBlogThreeColumn;
      'cards.card-with-icon': CardsCardWithIcon;
      'contact-sections.book-a-call-split-with-pattern': ContactSectionsBookACallSplitWithPattern;
      'contact-sections.contact-split-with-pattern': ContactSectionsContactSplitWithPattern;
      'content-section.content-markdown': ContentSectionContentMarkdown;
      'content-section.content-two-column': ContentSectionContentTwoColumn;
      'cta-sections.join-our-team': CtaSectionsJoinOurTeam;
      'cta.button': CtaButton;
      'customer-sections.customer-logo-simple-with-title': CustomerSectionsCustomerLogoSimpleWithTitle;
      'filter.tags-filter': FilterTagsFilter;
      'header-sections.header-with-cards': HeaderSectionsHeaderWithCards;
      'hero-sections.hero-simple-center-with-background': HeroSectionsHeroSimpleCenterWithBackground;
      'hero-sections.hero-simple-center': HeroSectionsHeroSimpleCenter;
      'icon.icon': IconIcon;
      'image-sections.image-simple': ImageSectionsImageSimple;
      'partner-sections.partner-logo-simple-with-title': PartnerSectionsPartnerLogoSimpleWithTitle;
      'seo.open-graph': SeoOpenGraph;
      'service-sections.service-three-column-with-large-icons': ServiceSectionsServiceThreeColumnWithLargeIcons;
      'solution-sections.solution-three-column-with-large-icons': SolutionSectionsSolutionThreeColumnWithLargeIcons;
      'team-sections.team-three-column': TeamSectionsTeamThreeColumn;
      'value-sections.value-two-column': ValueSectionsValueTwoColumn;
      'value-sections.value': ValueSectionsValue;
    }
  }
}
