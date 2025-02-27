import {CaseStudy} from '@/models/case-study.model'
import {faker} from '@faker-js/faker'
import {imageFactory} from './image.factory'

export function caseStudyFactory(): CaseStudy {
  const title = faker.lorem.words(3)

  return {
    id: faker.number.int(),
    slug: faker.helpers.slugify(title),
    title,
    description: faker.lorem.paragraph(),
    image: imageFactory({width: 800, height: 600}),
    annexeParagraph: faker.lorem.paragraph(),
    content: faker.lorem.paragraphs(3)
  }
}
