import type {Schema, Attribute} from '@strapi/strapi'

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions'
  info: {
    name: 'Permission'
    description: ''
    singularName: 'permission'
    pluralName: 'permissions'
    displayName: 'Permission'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    properties: Attribute.JSON & Attribute.DefaultTo<{}>
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'admin::permission', 'oneToOne', 'admin::user'> & Attribute.Private
    updatedBy: Attribute.Relation<'admin::permission', 'oneToOne', 'admin::user'> & Attribute.Private
  }
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users'
  info: {
    name: 'User'
    description: ''
    singularName: 'user'
    pluralName: 'users'
    displayName: 'User'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    username: Attribute.String
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6
      }>
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6
      }>
    resetPasswordToken: Attribute.String & Attribute.Private
    registrationToken: Attribute.String & Attribute.Private
    isActive: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> & Attribute.Private
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>
    preferedLanguage: Attribute.String
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> & Attribute.Private
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> & Attribute.Private
  }
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles'
  info: {
    name: 'Role'
    description: ''
    singularName: 'role'
    pluralName: 'roles'
    displayName: 'Role'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    description: Attribute.String
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>
    permissions: Attribute.Relation<'admin::role', 'oneToMany', 'admin::permission'>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> & Attribute.Private
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> & Attribute.Private
  }
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens'
  info: {
    name: 'Api Token'
    singularName: 'api-token'
    pluralName: 'api-tokens'
    displayName: 'Api Token'
    description: ''
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }> &
      Attribute.DefaultTo<''>
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    lastUsedAt: Attribute.DateTime
    permissions: Attribute.Relation<'admin::api-token', 'oneToMany', 'admin::api-token-permission'>
    expiresAt: Attribute.DateTime
    lifespan: Attribute.BigInteger
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'admin::api-token', 'oneToOne', 'admin::user'> & Attribute.Private
    updatedBy: Attribute.Relation<'admin::api-token', 'oneToOne', 'admin::user'> & Attribute.Private
  }
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions'
  info: {
    name: 'API Token Permission'
    description: ''
    singularName: 'api-token-permission'
    pluralName: 'api-token-permissions'
    displayName: 'API Token Permission'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    token: Attribute.Relation<'admin::api-token-permission', 'manyToOne', 'admin::api-token'>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'admin::api-token-permission', 'oneToOne', 'admin::user'> & Attribute.Private
    updatedBy: Attribute.Relation<'admin::api-token-permission', 'oneToOne', 'admin::user'> & Attribute.Private
  }
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens'
  info: {
    name: 'Transfer Token'
    singularName: 'transfer-token'
    pluralName: 'transfer-tokens'
    displayName: 'Transfer Token'
    description: ''
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }> &
      Attribute.DefaultTo<''>
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    lastUsedAt: Attribute.DateTime
    permissions: Attribute.Relation<'admin::transfer-token', 'oneToMany', 'admin::transfer-token-permission'>
    expiresAt: Attribute.DateTime
    lifespan: Attribute.BigInteger
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'admin::transfer-token', 'oneToOne', 'admin::user'> & Attribute.Private
    updatedBy: Attribute.Relation<'admin::transfer-token', 'oneToOne', 'admin::user'> & Attribute.Private
  }
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions'
  info: {
    name: 'Transfer Token Permission'
    description: ''
    singularName: 'transfer-token-permission'
    pluralName: 'transfer-token-permissions'
    displayName: 'Transfer Token Permission'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    token: Attribute.Relation<'admin::transfer-token-permission', 'manyToOne', 'admin::transfer-token'>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'admin::transfer-token-permission', 'oneToOne', 'admin::user'> & Attribute.Private
    updatedBy: Attribute.Relation<'admin::transfer-token-permission', 'oneToOne', 'admin::user'> & Attribute.Private
  }
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files'
  info: {
    singularName: 'file'
    pluralName: 'files'
    displayName: 'File'
    description: ''
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: Attribute.String & Attribute.Required
    alternativeText: Attribute.String
    caption: Attribute.String
    width: Attribute.Integer
    height: Attribute.Integer
    formats: Attribute.JSON
    hash: Attribute.String & Attribute.Required
    ext: Attribute.String
    mime: Attribute.String & Attribute.Required
    size: Attribute.Decimal & Attribute.Required
    url: Attribute.String & Attribute.Required
    previewUrl: Attribute.String
    provider: Attribute.String & Attribute.Required
    provider_metadata: Attribute.JSON
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>
    folder: Attribute.Relation<'plugin::upload.file', 'manyToOne', 'plugin::upload.folder'> & Attribute.Private
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1
        },
        number
      >
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'plugin::upload.file', 'oneToOne', 'admin::user'> & Attribute.Private
    updatedBy: Attribute.Relation<'plugin::upload.file', 'oneToOne', 'admin::user'> & Attribute.Private
    placeholder: Attribute.Text
  }
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders'
  info: {
    singularName: 'folder'
    pluralName: 'folders'
    displayName: 'Folder'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1
        },
        number
      >
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique
    parent: Attribute.Relation<'plugin::upload.folder', 'manyToOne', 'plugin::upload.folder'>
    children: Attribute.Relation<'plugin::upload.folder', 'oneToMany', 'plugin::upload.folder'>
    files: Attribute.Relation<'plugin::upload.folder', 'oneToMany', 'plugin::upload.file'>
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1
        },
        number
      >
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'plugin::upload.folder', 'oneToOne', 'admin::user'> & Attribute.Private
    updatedBy: Attribute.Relation<'plugin::upload.folder', 'oneToOne', 'admin::user'> & Attribute.Private
  }
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases'
  info: {
    singularName: 'release'
    pluralName: 'releases'
    displayName: 'Release'
  }
  options: {
    draftAndPublish: false
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: Attribute.String & Attribute.Required
    releasedAt: Attribute.DateTime
    scheduledAt: Attribute.DateTime
    timezone: Attribute.String
    status: Attribute.Enumeration<['ready', 'blocked', 'failed', 'done', 'empty']> & Attribute.Required
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'plugin::content-releases.release', 'oneToOne', 'admin::user'> & Attribute.Private
    updatedBy: Attribute.Relation<'plugin::content-releases.release', 'oneToOne', 'admin::user'> & Attribute.Private
  }
}

export interface PluginContentReleasesReleaseAction extends Schema.CollectionType {
  collectionName: 'strapi_release_actions'
  info: {
    singularName: 'release-action'
    pluralName: 'release-actions'
    displayName: 'Release Action'
  }
  options: {
    draftAndPublish: false
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required
    entry: Attribute.Relation<'plugin::content-releases.release-action', 'morphToOne'>
    contentType: Attribute.String & Attribute.Required
    locale: Attribute.String
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >
    isEntryValid: Attribute.Boolean
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'plugin::content-releases.release-action', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'plugin::content-releases.release-action', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface PluginTranslateBatchTranslateJob extends Schema.CollectionType {
  collectionName: 'translate_batch_translate_jobs'
  info: {
    singularName: 'batch-translate-job'
    pluralName: 'batch-translate-jobs'
    displayName: 'Translate Batch Translate Job'
  }
  options: {
    draftAndPublish: false
    comment: ''
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    contentType: Attribute.String
    sourceLocale: Attribute.String
    targetLocale: Attribute.String
    entityIds: Attribute.JSON
    status: Attribute.Enumeration<['created', 'setup', 'running', 'paused', 'finished', 'cancelled', 'failed']> &
      Attribute.DefaultTo<'created'>
    failureReason: Attribute.JSON
    progress: Attribute.Float & Attribute.DefaultTo<0>
    autoPublish: Attribute.Boolean & Attribute.DefaultTo<false>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'plugin::translate.batch-translate-job', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'plugin::translate.batch-translate-job', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale'
  info: {
    singularName: 'locale'
    pluralName: 'locales'
    collectionName: 'locales'
    displayName: 'Locale'
    description: ''
  }
  options: {
    draftAndPublish: false
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1
          max: 50
        },
        number
      >
    code: Attribute.String & Attribute.Unique
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'plugin::i18n.locale', 'oneToOne', 'admin::user'> & Attribute.Private
    updatedBy: Attribute.Relation<'plugin::i18n.locale', 'oneToOne', 'admin::user'> & Attribute.Private
  }
}

export interface PluginUsersPermissionsPermission extends Schema.CollectionType {
  collectionName: 'up_permissions'
  info: {
    name: 'permission'
    description: ''
    singularName: 'permission'
    pluralName: 'permissions'
    displayName: 'Permission'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    action: Attribute.String & Attribute.Required
    role: Attribute.Relation<'plugin::users-permissions.permission', 'manyToOne', 'plugin::users-permissions.role'>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'plugin::users-permissions.permission', 'oneToOne', 'admin::user'> & Attribute.Private
    updatedBy: Attribute.Relation<'plugin::users-permissions.permission', 'oneToOne', 'admin::user'> & Attribute.Private
  }
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles'
  info: {
    name: 'role'
    description: ''
    singularName: 'role'
    pluralName: 'roles'
    displayName: 'Role'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3
      }>
    description: Attribute.String
    type: Attribute.String & Attribute.Unique
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >
    users: Attribute.Relation<'plugin::users-permissions.role', 'oneToMany', 'plugin::users-permissions.user'>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'plugin::users-permissions.role', 'oneToOne', 'admin::user'> & Attribute.Private
    updatedBy: Attribute.Relation<'plugin::users-permissions.role', 'oneToOne', 'admin::user'> & Attribute.Private
  }
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users'
  info: {
    name: 'user'
    description: ''
    singularName: 'user'
    pluralName: 'users'
    displayName: 'User'
  }
  options: {
    draftAndPublish: false
    timestamps: true
  }
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3
      }>
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6
      }>
    provider: Attribute.String
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6
      }>
    resetPasswordToken: Attribute.String & Attribute.Private
    confirmationToken: Attribute.String & Attribute.Private
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>
    role: Attribute.Relation<'plugin::users-permissions.user', 'manyToOne', 'plugin::users-permissions.role'>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'plugin::users-permissions.user', 'oneToOne', 'admin::user'> & Attribute.Private
    updatedBy: Attribute.Relation<'plugin::users-permissions.user', 'oneToOne', 'admin::user'> & Attribute.Private
  }
}

export interface PluginSlugifySlug extends Schema.CollectionType {
  collectionName: 'slugs'
  info: {
    singularName: 'slug'
    pluralName: 'slugs'
    displayName: 'slug'
  }
  options: {
    draftAndPublish: false
    comment: ''
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    slug: Attribute.Text
    count: Attribute.Integer
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'plugin::slugify.slug', 'oneToOne', 'admin::user'> & Attribute.Private
    updatedBy: Attribute.Relation<'plugin::slugify.slug', 'oneToOne', 'admin::user'> & Attribute.Private
  }
}

export interface ApiAboutUsPageAboutUsPage extends Schema.SingleType {
  collectionName: 'about_us_pages'
  info: {
    singularName: 'about-us-page'
    pluralName: 'about-us-pages'
    displayName: '03 - About Us Page'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    seo: Attribute.Component<'seo.seo'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
        translate: {
          translate: 'translate'
        }
      }>
    body: Attribute.DynamicZone<
      [
        'hero-sections.hero-with-gradient',
        'team-sections.team-two-column',
        'contact-sections.contact',
        'value-sections.value',
        'value-sections.value-two-column',
        'certifications-sections.certifications-badges-with-title',
        'map-sections.map-with-title'
      ]
    > &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
        translate: {
          translate: 'translate'
        }
      }>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::about-us-page.about-us-page', 'oneToOne', 'admin::user'> & Attribute.Private
    updatedBy: Attribute.Relation<'api::about-us-page.about-us-page', 'oneToOne', 'admin::user'> & Attribute.Private
    localizations: Attribute.Relation<
      'api::about-us-page.about-us-page',
      'oneToMany',
      'api::about-us-page.about-us-page'
    >
    locale: Attribute.String
  }
}

export interface ApiArticleArticle extends Schema.CollectionType {
  collectionName: 'articles'
  info: {
    singularName: 'article'
    pluralName: 'articles'
    displayName: 'Article'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    title: Attribute.String & Attribute.Required
    description: Attribute.Text & Attribute.Required
    readTime: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<1>
    publishedOn: Attribute.Date
    slug: Attribute.String & Attribute.Required
    image: Attribute.Media<'images'> & Attribute.Required
    author: Attribute.Relation<'api::article.article', 'oneToOne', 'api::team-member.team-member'>
    tags: Attribute.Relation<'api::article.article', 'oneToMany', 'api::tag.tag'>
    relatedPartners: Attribute.Relation<'api::article.article', 'manyToMany', 'api::partner.partner'>
    relatedArticles: Attribute.Relation<'api::article.article', 'oneToMany', 'api::article.article'>
    content: Attribute.RichText & Attribute.Required
    relatedSolutions: Attribute.Relation<'api::article.article', 'oneToMany', 'api::solution.solution'>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::article.article', 'oneToOne', 'admin::user'> & Attribute.Private
    updatedBy: Attribute.Relation<'api::article.article', 'oneToOne', 'admin::user'> & Attribute.Private
  }
}

export interface ApiBlogPageBlogPage extends Schema.SingleType {
  collectionName: 'blog_pages'
  info: {
    singularName: 'blog-page'
    pluralName: 'blog-pages'
    displayName: '02 - Blog Page'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    body: Attribute.DynamicZone<
      ['hero-sections.hero-with-gradient', 'blog-sections.blog-three-column', 'blog-sections.blog-masonry']
    > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
        translate: {
          translate: 'translate'
        }
      }>
    seo: Attribute.Component<'seo.seo'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
        translate: {
          translate: 'translate'
        }
      }>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::blog-page.blog-page', 'oneToOne', 'admin::user'> & Attribute.Private
    updatedBy: Attribute.Relation<'api::blog-page.blog-page', 'oneToOne', 'admin::user'> & Attribute.Private
    localizations: Attribute.Relation<'api::blog-page.blog-page', 'oneToMany', 'api::blog-page.blog-page'>
    locale: Attribute.String
  }
}

export interface ApiCaseStudiesPageCaseStudiesPage extends Schema.SingleType {
  collectionName: 'case_studies_pages'
  info: {
    singularName: 'case-studies-page'
    pluralName: 'case-studies-pages'
    displayName: '05 - Case Studies Page'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    seo: Attribute.Component<'seo.seo'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
        translate: {
          translate: 'translate'
        }
      }>
    body: Attribute.DynamicZone<
      ['hero-sections.hero-with-gradient', 'case-studies-sections.case-studies-grid-cards', 'contact-sections.contact']
    > &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
        translate: {
          translate: 'translate'
        }
      }>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::case-studies-page.case-studies-page', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'api::case-studies-page.case-studies-page', 'oneToOne', 'admin::user'> &
      Attribute.Private
    localizations: Attribute.Relation<
      'api::case-studies-page.case-studies-page',
      'oneToMany',
      'api::case-studies-page.case-studies-page'
    >
    locale: Attribute.String
  }
}

export interface ApiCaseStudyCaseStudy extends Schema.CollectionType {
  collectionName: 'case_studies'
  info: {
    singularName: 'case-study'
    pluralName: 'case-studies'
    displayName: 'Case Study'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    slug: Attribute.String & Attribute.Required
    title: Attribute.String & Attribute.Required
    description: Attribute.Text & Attribute.Required
    image: Attribute.Media<'images'> & Attribute.Required
    annexeParagraph: Attribute.RichText
    content: Attribute.RichText & Attribute.Required
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::case-study.case-study', 'oneToOne', 'admin::user'> & Attribute.Private
    updatedBy: Attribute.Relation<'api::case-study.case-study', 'oneToOne', 'admin::user'> & Attribute.Private
  }
}

export interface ApiCustomerCustomer extends Schema.CollectionType {
  collectionName: 'customers'
  info: {
    singularName: 'customer'
    pluralName: 'customers'
    displayName: 'Customer'
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    name: Attribute.String & Attribute.Required
    link: Attribute.String
    image: Attribute.Media<'images'> & Attribute.Required
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::customer.customer', 'oneToOne', 'admin::user'> & Attribute.Private
    updatedBy: Attribute.Relation<'api::customer.customer', 'oneToOne', 'admin::user'> & Attribute.Private
  }
}

export interface ApiFooterFooter extends Schema.SingleType {
  collectionName: 'footers'
  info: {
    singularName: 'footer'
    pluralName: 'footers'
    displayName: '90 - Footer'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    services: Attribute.Relation<'api::footer.footer', 'oneToMany', 'api::service.service'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
        translate: {
          translate: 'translate'
        }
      }>
    solutions: Attribute.Relation<'api::footer.footer', 'oneToMany', 'api::solution.solution'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
        translate: {
          translate: 'translate'
        }
      }>
    locations: Attribute.Relation<'api::footer.footer', 'oneToMany', 'api::location.location'> &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate'
        }
      }>
    mwstNumber: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
        translate: {
          translate: 'translate'
        }
      }>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::footer.footer', 'oneToOne', 'admin::user'> & Attribute.Private
    updatedBy: Attribute.Relation<'api::footer.footer', 'oneToOne', 'admin::user'> & Attribute.Private
    localizations: Attribute.Relation<'api::footer.footer', 'oneToMany', 'api::footer.footer'>
    locale: Attribute.String
  }
}

export interface ApiHomePageHomePage extends Schema.SingleType {
  collectionName: 'home_pages'
  info: {
    singularName: 'home-page'
    pluralName: 'home-pages'
    displayName: '01 - Home Page'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    body: Attribute.DynamicZone<
      [
        'hero-sections.hero-with-floating-gradients',
        'service-sections.service-three-column-with-large-icons',
        'solution-sections.solution-three-column-with-large-icons',
        'partner-sections.partner-logo-simple-with-title',
        'customer-sections.customer-logo-simple-with-title',
        'blog-sections.blog-three-column',
        'contact-sections.contact',
        'content-section.introduction-with-logo',
        'service-sections.service-alternate-position-icon',
        'solution-sections.solution-one-column',
        'service-sections.service-masonry-card',
        'solution-sections.solution-three-columns-with-image'
      ]
    > &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
        translate: {
          translate: 'translate'
        }
      }>
    seo: Attribute.Component<'seo.seo'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
        translate: {
          translate: 'translate'
        }
      }>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::home-page.home-page', 'oneToOne', 'admin::user'> & Attribute.Private
    updatedBy: Attribute.Relation<'api::home-page.home-page', 'oneToOne', 'admin::user'> & Attribute.Private
    localizations: Attribute.Relation<'api::home-page.home-page', 'oneToMany', 'api::home-page.home-page'>
    locale: Attribute.String
  }
}

export interface ApiLocationLocation extends Schema.CollectionType {
  collectionName: 'locations'
  info: {
    singularName: 'location'
    pluralName: 'locations'
    displayName: 'Location'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    address: Attribute.Text &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false
        }
      }>
    city: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    zipCode: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false
        }
      }>
    country: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    gMap: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false
        }
      }>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::location.location', 'oneToOne', 'admin::user'> & Attribute.Private
    updatedBy: Attribute.Relation<'api::location.location', 'oneToOne', 'admin::user'> & Attribute.Private
    localizations: Attribute.Relation<'api::location.location', 'oneToMany', 'api::location.location'>
    locale: Attribute.String
  }
}

export interface ApiPartnerPartner extends Schema.CollectionType {
  collectionName: 'partners'
  info: {
    singularName: 'partner'
    pluralName: 'partners'
    displayName: 'Partner'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    name: Attribute.String & Attribute.Required
    link: Attribute.String
    image: Attribute.Media<'images'> & Attribute.Required
    relatedArticles: Attribute.Relation<'api::partner.partner', 'manyToMany', 'api::article.article'>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::partner.partner', 'oneToOne', 'admin::user'> & Attribute.Private
    updatedBy: Attribute.Relation<'api::partner.partner', 'oneToOne', 'admin::user'> & Attribute.Private
  }
}

export interface ApiPartnersPagePartnersPage extends Schema.SingleType {
  collectionName: 'partners_pages'
  info: {
    singularName: 'partners-page'
    pluralName: 'partners-pages'
    displayName: '04 - Partners Page'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    seo: Attribute.Component<'seo.seo'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
        translate: {
          translate: 'translate'
        }
      }>
    body: Attribute.DynamicZone<
      [
        'contact-sections.contact',
        'content-section.content-markdown',
        'header-sections.header-with-text-cards',
        'hero-sections.hero-with-gradient',
        'image-sections.image-simple',
        'content-section.introduction-with-logo'
      ]
    > &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
        translate: {
          translate: 'translate'
        }
      }>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::partners-page.partners-page', 'oneToOne', 'admin::user'> & Attribute.Private
    updatedBy: Attribute.Relation<'api::partners-page.partners-page', 'oneToOne', 'admin::user'> & Attribute.Private
    localizations: Attribute.Relation<
      'api::partners-page.partners-page',
      'oneToMany',
      'api::partners-page.partners-page'
    >
    locale: Attribute.String
  }
}

export interface ApiServiceService extends Schema.CollectionType {
  collectionName: 'services'
  info: {
    singularName: 'service'
    pluralName: 'services'
    displayName: 'Service'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
        translate: {
          translate: 'translate'
        }
      }>
    slug: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'copy'
        }
        i18n: {
          localized: true
        }
      }>
    description: Attribute.Text &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
        translate: {
          translate: 'translate'
        }
      }>
    image: Attribute.Media<'images'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
        translate: {
          translate: 'translate'
        }
      }>
    icon: Attribute.Component<'icon.icon'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
        translate: {
          translate: 'translate'
        }
      }>
    cta: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
        translate: {
          translate: 'translate'
        }
      }>
    body: Attribute.DynamicZone<
      [
        'header-sections.header-with-cards-with-icon',
        'header-sections.header-with-text-cards',
        'service-sections.service-three-column-with-large-icons',
        'solution-sections.solution-three-column-with-large-icons',
        'content-section.content-markdown',
        'contact-sections.contact',
        'service-sections.service-alternate-position-icon',
        'diagram-sections.diagram-full-width',
        'content-section.content-alternate-position-with-image-list',
        'solution-sections.solution-three-columns-with-image'
      ]
    > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
        translate: {
          translate: 'translate'
        }
      }>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::service.service', 'oneToOne', 'admin::user'> & Attribute.Private
    updatedBy: Attribute.Relation<'api::service.service', 'oneToOne', 'admin::user'> & Attribute.Private
    localizations: Attribute.Relation<'api::service.service', 'oneToMany', 'api::service.service'>
    locale: Attribute.String
  }
}

export interface ApiSolutionSolution extends Schema.CollectionType {
  collectionName: 'solutions'
  info: {
    singularName: 'solution'
    pluralName: 'solutions'
    displayName: 'Solution'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    slug: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'copy'
        }
        i18n: {
          localized: true
        }
      }>
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
        translate: {
          translate: 'translate'
        }
      }>
    description: Attribute.Text &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
        translate: {
          translate: 'translate'
        }
      }>
    icon: Attribute.Component<'icon.icon'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
        translate: {
          translate: 'translate'
        }
      }>
    body: Attribute.DynamicZone<
      [
        'header-sections.header-with-cards-with-icon',
        'header-sections.header-with-text-cards',
        'service-sections.service-three-column-with-large-icons',
        'solution-sections.solution-three-column-with-large-icons',
        'content-section.content-markdown',
        'contact-sections.contact',
        'solution-sections.solution-one-column'
      ]
    > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
        translate: {
          translate: 'translate'
        }
      }>
    image: Attribute.Media<'images'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
        translate: {
          translate: 'translate'
        }
      }>
    cta: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
        translate: {
          translate: 'translate'
        }
      }>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::solution.solution', 'oneToOne', 'admin::user'> & Attribute.Private
    updatedBy: Attribute.Relation<'api::solution.solution', 'oneToOne', 'admin::user'> & Attribute.Private
    localizations: Attribute.Relation<'api::solution.solution', 'oneToMany', 'api::solution.solution'>
    locale: Attribute.String
  }
}

export interface ApiTagTag extends Schema.CollectionType {
  collectionName: 'tags'
  info: {
    singularName: 'tag'
    pluralName: 'tags'
    displayName: 'Tag'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    name: Attribute.String & Attribute.Required
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::tag.tag', 'oneToOne', 'admin::user'> & Attribute.Private
    updatedBy: Attribute.Relation<'api::tag.tag', 'oneToOne', 'admin::user'> & Attribute.Private
  }
}

export interface ApiTeamMemberTeamMember extends Schema.CollectionType {
  collectionName: 'team_members'
  info: {
    singularName: 'team-member'
    pluralName: 'team-members'
    displayName: 'Team Member'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false
        }
        translate: {
          translate: 'translate'
        }
      }>
    avatar: Attribute.Media<'images'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false
        }
        translate: {
          translate: 'translate'
        }
      }>
    bio: Attribute.Text &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
        translate: {
          translate: 'translate'
        }
      }>
    linkedin: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
        translate: {
          translate: 'translate'
        }
      }>
    twitter: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false
        }
        translate: {
          translate: 'translate'
        }
      }>
    email: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
        translate: {
          translate: 'translate'
        }
      }>
    website: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false
        }
        translate: {
          translate: 'translate'
        }
      }>
    location: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
        translate: {
          translate: 'translate'
        }
      }>
    slug: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false
        }
        translate: {
          translate: 'translate'
        }
      }>
    role: Attribute.Relation<'api::team-member.team-member', 'oneToOne', 'api::team-role.team-role'> &
      Attribute.SetPluginOptions<{
        translate: {
          translate: 'translate'
        }
      }>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::team-member.team-member', 'oneToOne', 'admin::user'> & Attribute.Private
    updatedBy: Attribute.Relation<'api::team-member.team-member', 'oneToOne', 'admin::user'> & Attribute.Private
    localizations: Attribute.Relation<'api::team-member.team-member', 'oneToMany', 'api::team-member.team-member'>
    locale: Attribute.String
  }
}

export interface ApiTeamRoleTeamRole extends Schema.CollectionType {
  collectionName: 'team_roles'
  info: {
    singularName: 'team-role'
    pluralName: 'team-roles'
    displayName: 'Team Role'
  }
  options: {
    draftAndPublish: true
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
        translate: {
          translate: 'translate'
        }
      }>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::team-role.team-role', 'oneToOne', 'admin::user'> & Attribute.Private
    updatedBy: Attribute.Relation<'api::team-role.team-role', 'oneToOne', 'admin::user'> & Attribute.Private
    localizations: Attribute.Relation<'api::team-role.team-role', 'oneToMany', 'api::team-role.team-role'>
    locale: Attribute.String
  }
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission
      'admin::user': AdminUser
      'admin::role': AdminRole
      'admin::api-token': AdminApiToken
      'admin::api-token-permission': AdminApiTokenPermission
      'admin::transfer-token': AdminTransferToken
      'admin::transfer-token-permission': AdminTransferTokenPermission
      'plugin::upload.file': PluginUploadFile
      'plugin::upload.folder': PluginUploadFolder
      'plugin::content-releases.release': PluginContentReleasesRelease
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction
      'plugin::translate.batch-translate-job': PluginTranslateBatchTranslateJob
      'plugin::i18n.locale': PluginI18NLocale
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission
      'plugin::users-permissions.role': PluginUsersPermissionsRole
      'plugin::users-permissions.user': PluginUsersPermissionsUser
      'plugin::slugify.slug': PluginSlugifySlug
      'api::about-us-page.about-us-page': ApiAboutUsPageAboutUsPage
      'api::article.article': ApiArticleArticle
      'api::blog-page.blog-page': ApiBlogPageBlogPage
      'api::case-studies-page.case-studies-page': ApiCaseStudiesPageCaseStudiesPage
      'api::case-study.case-study': ApiCaseStudyCaseStudy
      'api::customer.customer': ApiCustomerCustomer
      'api::footer.footer': ApiFooterFooter
      'api::home-page.home-page': ApiHomePageHomePage
      'api::location.location': ApiLocationLocation
      'api::partner.partner': ApiPartnerPartner
      'api::partners-page.partners-page': ApiPartnersPagePartnersPage
      'api::service.service': ApiServiceService
      'api::solution.solution': ApiSolutionSolution
      'api::tag.tag': ApiTagTag
      'api::team-member.team-member': ApiTeamMemberTeamMember
      'api::team-role.team-role': ApiTeamRoleTeamRole
    }
  }
}
