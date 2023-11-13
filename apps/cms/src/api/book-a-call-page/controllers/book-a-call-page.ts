/**
 * book-a-call-page controller
 */

import {factories} from '@strapi/strapi'
import {findSingleType} from '../../../utils/toolbox'

const uid = 'api::book-a-call-page.book-a-call-page'
export default factories.createCoreController(uid, () => ({
  find: (ctx) => findSingleType(ctx, uid)
}))
