import {imageSchema} from './image.model'
import {z} from 'zod'

export const caseStudySchema = z.object({
  id: z.number(),
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  image: imageSchema,
  annexeParagraph: z.string().optional(),
  content: z.string()
})

export type CaseStudy = z.infer<typeof caseStudySchema>
