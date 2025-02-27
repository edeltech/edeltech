/**
 * case-study controller
 */

import {factories} from '@strapi/strapi'
import {findOne, getAllPublishedSlugs} from '../../../utils/toolbox'

const uid = 'api::case-study.case-study'

export default factories.createCoreController(uid, () => ({
  findOne: (ctx) =>
    findOne({
      ctx,
      uid,
      contentTypeHandler: (caseStudy) => {
        caseStudy.body = [
          {
            __component: 'case-study.case-study-content',
            title: caseStudy.title,
            description: caseStudy.description,
            image: caseStudy.image,
            annexeParagraph: caseStudy.annexeParagraph,
            content: caseStudy.content
          }
        ]
      },
      where: {
        slug: ctx.params.id
      }
    }),
  slugs: (ctx) => getAllPublishedSlugs(ctx, uid)
}))
