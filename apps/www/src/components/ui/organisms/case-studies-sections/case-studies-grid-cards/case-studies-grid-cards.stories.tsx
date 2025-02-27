import {caseStudyFactory} from '@/tests/factories/case-study.factory'
import CaseStudiesGridCards, {CaseStudiesGridCardsProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/CaseStudiesSections/CaseStudiesGridCards',
  component: CaseStudiesGridCards,
  tags: ['autodocs'],
  args: {
    caseStudies: Array.from({length: 3}, () => caseStudyFactory())
  }
} satisfies Meta<typeof CaseStudiesGridCards>

export default meta

export const Default = {
  name: 'Default',
  render: (args: CaseStudiesGridCardsProps) => <CaseStudiesGridCards {...args} />
}
