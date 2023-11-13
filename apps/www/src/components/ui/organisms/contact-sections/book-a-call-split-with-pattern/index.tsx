import {BuildingOffice2Icon, CheckCircleIcon} from '@heroicons/react/24/outline'
import {Checkbox, CheckboxProps} from '@/components/ui/atoms/inputs/checkbox'
import {Input, InputProps} from '@/components/ui/atoms/inputs/input'
import {LocationObject} from '@/models/location.model'
import {TextArea, TextAreaProps} from '@/components/ui/atoms/inputs/textarea'
import {contactUsFormData} from '@/models/contact-us-form-data.model'
import {createHsformsPayload} from '@/utils/toolbox'
import {sendEmail} from '@/utils/hubspot'
import {useForm} from 'react-hook-form'
import {useState} from 'react'
import Button from '@/components/ui/atoms/button'
import ConfettiExplosion from 'react-confetti-explosion'
import Router from 'next/router'
import useTranslation from 'next-translate/useTranslation'

export type BookACallSplitWithPatternProps = {
  title: string
  subtitle: string
  locations: Array<LocationObject>
}

export default function BookACallSplitWithPattern(props: BookACallSplitWithPatternProps) {

  return (<div
    className='relative isolate py-20 lg:py-[104px]'
    id='contact-section'
  >
    <div className='mx-auto max-w-7xl'>
      <div className='grid grid-cols-1 mx-6 lg:grid-cols-2 bg-slate-800 rounded-xl'>
        <div className='relative px-6 py-8 lg:static lg:pl-12 lg:pr-0 lg:py-14'>
          <div className='max-w-full mr-auto lg:mx-0 lg:max-w-sm'>
            <h2 className='text-3xl font-medium text-white sm:text-4xl'>{props.title}</h2>
            <p className='mt-5 text-[20px] leading-8 text-slate-400 font-light'>
              {props.subtitle}
            </p>
            <dl className='mt-10 space-y-5 text-base leading-[26px] font-light text-slate-400'>
              {props.locations?.map((location) => (
                <a
                  key={location.address}
                  href={location.gMap}
                  target='_blank'
                  className='flex gap-x-4'
                >
                  <dt className='flex-none'>
                    <span className='sr-only'>Address</span>
                    <BuildingOffice2Icon
                      className='w-6 h-6 translate-y-1 text-slate-400'
                      aria-hidden='true'/>
                  </dt>
                  <dd>
                    {location.address}
                    <br/>
                    {location.zipCode} {location.city}, {location.country}
                  </dd>
                </a>
              ))}
            </dl>
          </div>
        </div>
        <div
          className='px-6 py-8 lg:pl-0 lg:pr-12 lg:py-14'
        >
          
        </div>
      </div>
    </div>
  </div>)
}
