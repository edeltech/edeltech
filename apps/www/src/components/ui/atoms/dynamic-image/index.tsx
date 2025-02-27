'use client'

import {cn} from '@/utils/toolbox'
import {getImageSize} from 'react-image-size'
import Image, {ImageProps} from 'next/image'
import React, {useEffect} from 'react'

export type DynamicImageProps = Partial<ImageProps> & {
  maxHeight?: number
}

export default function DynamicImage(props: DynamicImageProps) {
  const [dimensions, setDimensions] = React.useState({width: 0, height: 0})

  console.log('props className', props.className)

  useEffect(() => {
    if (typeof props.src === 'string') {
      getImageSize(props.src).then((size) => {
        setDimensions(size)
      })
    }
  }, [props.src])

  return (
    <>
      <Image
        alt=''
        width={dimensions.width}
        height={dimensions.height}
        src={props.src as string}
        {...props}
        className={cn(props.className, dimensions.height > (props.maxHeight || 418) ? `md:h-[418px] w-auto` : '')}
      />
    </>
  )
}
