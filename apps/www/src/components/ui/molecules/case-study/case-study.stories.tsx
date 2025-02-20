import {imageFactory} from '@/tests/factories/image.factory'
import CaseStudy, {CaseStudyProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Molecules/case-study',
  component: CaseStudy,
  tags: ['autodocs'],
  args: {
    image: imageFactory()
  }
} satisfies Meta<typeof CaseStudy>

export default meta

export const Default = {
  name: 'Default',
  render: (args: CaseStudyProps) => <CaseStudy {...args} />
}
