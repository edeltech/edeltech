import {CaseStudy} from '@/models/case-study.model'
import CaseStudyCard from '@/components/ui/molecules/cards/case-study'
import ComponentLayout from '@/components/ui/atoms/component-layout'

export type CaseStudiesGridCardsProps = {
  caseStudies: Array<CaseStudy>
}

export default function CaseStudiesGridCards({caseStudies}: CaseStudiesGridCardsProps) {
  return (
    <ComponentLayout>
      <div className='py-20 pt-6 lg:pt-20 lg:pb-[104px]'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard
              key={caseStudy.slug}
              caseStudy={caseStudy}
            />
          ))}
        </div>
      </div>
    </ComponentLayout>
  )
}
