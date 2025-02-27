'use client'

import ComponentLayout from '@/components/ui/atoms/component-layout'

import {ImageProps} from '@/models/image.model'
import {cn} from '@/utils/toolbox'
import {useState} from 'react'
import Image from 'next/image'
import MarkdownViewer from '../../markdown'

export type CaseStudyContentSectionProps = {
  title: string
  description: string
  image: ImageProps
  annexeParagraph?: string
  content: string
}

export default function CaseStudyContentSection({
  title,
  description,
  content,
  image,
  annexeParagraph
}: CaseStudyContentSectionProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <ComponentLayout gradientVariant='heroGradient'>
      <div className='space-y-14 pb-8 pt-40 lg:space-y-20 lg:pb-20 lg:pt-60'>
        <div className='flex flex-col gap-y-20 lg:gap-y-24'>
          <div className='flex flex-col'>
            <div className='space-y-8'>
              <div className='flex justify-center w-full'>
                <span className='text-base font-semibold text-transparent bg-clip-text bg-text-gradient-blue'>
                  Case study
                </span>
              </div>
              <h2
                className='w-fit max-w-5xl mx-auto text-[44px] leading-[52px] font-extrabold tracking-tight text-center \
              text-transparent bg-clip-text bg-text-gradient-gray'
              >
                {title}
              </h2>
            </div>
            <div className='max-w-3xl mx-auto text-lg font-light text-center mt-7 text-slate-400'>
              <p>{description}</p>
            </div>
          </div>
          <div className='h-[480px] overflow-hidden rounded-3xl'>
            <Image
              src={image.url}
              alt={image.alternateText || image.name}
              onLoad={() => {
                setIsLoaded(true)
              }}
              width={image.width}
              height={image.height}
              className={cn('object-cover w-full h-full', isLoaded && 'bg-white')}
            />
          </div>
        </div>
        <div className={annexeParagraph ? 'flex flex-col lg:flex-row lg:gap-x-36' : ''}>
          {annexeParagraph && (
            <div className='w-full lg:w-3/12 order-2 lg:order-1'>
              <MarkdownViewer
                content={annexeParagraph}
                className='text-sm leading-6 p-0 [&_h3]:w-fit [&_h3]:text-transparent [&_h3]:bg-clip-text [&_h3]:bg-text-gradient-blue'
              />
            </div>
          )}
          <div className={annexeParagraph ? 'w-full lg:w-9/12 order-1 lg:order-2' : 'w-full'}>
            <MarkdownViewer
              content={content}
              className='p-0'
              imageClassName='!w-full !h-auto mt-0'
            />
          </div>
        </div>
      </div>
    </ComponentLayout>
  )
}
