'use client'

import {ImageProps} from '@/models/image.model'
import {cn} from '@/utils/toolbox'
import {useState} from 'react'
import Image from 'next/image'

export type CaseStudyProps = {
  title: string
  content: string
  image: ImageProps
}

export default function CaseStudy({title, content, image}: CaseStudyProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className='w-full h-96 bg-red-400'>
      <h1 className='text-4xl font-bold text-red-400'>{title} TEST</h1>
      <p>{content}</p>
      <Image
        src={image.url}
        alt={image.alternateText || image.name}
        onLoad={() => {
          setIsLoaded(true)
        }}
        width={100}
        height={100}
        className={cn('object-cover w-full', isLoaded && 'bg-white')}
      />
    </div>
  )
}
