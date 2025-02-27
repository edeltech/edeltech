import {Article} from '@/models/article.model'
import {faker} from '@faker-js/faker'
import {imageFactory} from './image.factory'
import {tagFactory} from './tag.factory'
import {teamMemberFactory} from './team-member.factory'

export function articleFactory(): Article {
  const title = faker.lorem.words(3)

  return {
    id: faker.number.int(),
    title,
    slug: faker.helpers.slugify(title),
    description: faker.lorem.paragraph(),
    content: faker.lorem.paragraphs(3),
    tags: Array.from({length: faker.number.int({min: 2, max: 5})}).map(() => tagFactory()),
    publishedOn: faker.date.past().toISOString(),
    readTime: faker.number.int({min: 1, max: 10}),
    image: imageFactory({width: 800, height: 600}),
    author: teamMemberFactory()
  }
}
