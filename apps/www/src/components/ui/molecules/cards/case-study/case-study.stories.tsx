import {caseStudyFactory} from '@/tests/factories/case-study.factory'
import CaseStudyCard, {CaseStudyCardProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Molecules/Cards/CaseStudy',
  component: CaseStudyCard,
  tags: ['autodocs'],
  args: {
    caseStudy: caseStudyFactory()
  }
} satisfies Meta<typeof CaseStudyCard>

export default meta

export const Default = {
  name: 'Default',
  render: (args: CaseStudyCardProps) => <CaseStudyCard {...args} />
}
