/**
 * case-studies-page controller
 */

import {factories} from '@strapi/strapi'
import {findOne} from '../../../utils/toolbox'

const uid = 'api::case-studies-page.case-studies-page'
export default factories.createCoreController(uid, () => ({
  find: (ctx) => findOne({ctx, uid})
}))
