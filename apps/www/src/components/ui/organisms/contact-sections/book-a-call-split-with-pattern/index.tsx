import {BuildingOffice2Icon} from '@heroicons/react/24/outline'
import {LocationObject} from '@/models/location.model'
import Script from 'next/script'

export type BookACallSplitWithPatternProps = {
  title: string
  subtitle: string
  locations: Array<LocationObject>
}

export default function BookACallSplitWithPattern(props: BookACallSplitWithPatternProps) {

  return (<div
    className='relative isolate py-20 lg:py-[104px]'
  >
    <div className='pt-32 mx-auto max-w-7xl lg:pt-44'>
      <div className='flex mx-6 space-x-6 bg-slate-800 rounded-xl'>
        <div className='relative px-6 py-8 lg:static lg:pl-12 lg:pr-0 lg:py-14 w-[500px]'>
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
        <div
          className='flex justify-end flex-1 w-full px-6 py-8 lg:pl-0 lg:pr-10 lg:py-14'
        >
          <div
            className='meetings-iframe-container !h-[600px] overflow-hidden -mt-2 w-full'
            data-src='https://meetings.hubspot.com/56k/team?embed=true'></div>
          <Script
            type='text/javascript'
            src='https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js'></Script>
        </div>
      </div>
    </div>
  </div>)
}
