import {BuildingOffice2Icon} from '@heroicons/react/24/outline'
import {Dictionary} from '@/models/dictionary.model'
import {LinkProps, SocialLinks} from '@/models/link.model'
import {LocationObject} from '@/models/location.model'
import {Service} from '@/models/service.model'
import {Solution} from '@/models/solution.model'
import Button from '../../atoms/button'
import ComponentLayout from '../../atoms/component-layout'
import Linkedin from '../../svgs/logos/linkedin'
import Logo from '../../svgs/logos/56k'
import X from '../../svgs/logos/x'

export type FooterProps = {
  dictionary: Dictionary
  text: string
  solutions: Array<Pick<Solution, 'title' | 'slug'>>
  services: Array<Pick<Service, 'title' | 'slug'>>
  locations: Array<LocationObject>
  mwstNumber?: string
}

export default function Footer(props: FooterProps) {
  const companyLinks: Array<LinkProps> = [
    {title: props.dictionary.aboutUs, link: '/about-us'},
    {title: props.dictionary.caseStudies, link: '/case-studies'},
    {title: props.dictionary.blog, link: '/blog'}
  ]

  const socialLinks: Array<SocialLinks> = [
    {
      title: 'X',
      link: 'https://x.com/56kcloud',
      socialIcon: X
    },
    {
      title: 'Linkedin',
      link: 'https://www.linkedin.com/company/56kcloud',
      socialIcon: Linkedin
    }
  ]

  const currentYear = new Date().getFullYear()

  return (
    <ComponentLayout>
      <footer aria-labelledby='footer-heading'>
        <h2
          id='footer-heading'
          className='sr-only'
        >
          Footer
        </h2>
        <div className='pt-9 pb-8 mx-auto max-w-7xl lg:pt-[104px]'>
          <div className='flex flex-col gap-y-12 lg:flex-row lg:justify-between'>
            <div className='max-w-full space-y-8 xl:max-w-sm'>
              <Logo className='h-5 text-slate-50' />
              <div className='flex flex-col gap-y-6 min-[432px]:flex-row min-[432px]:space-x-20'>
                {props.locations &&
                  props.locations.map((location, index) => (
                    <div
                      key={index}
                      className='flex flex-col gap-y-2'
                    >
                      <BuildingOffice2Icon className='w-6 h-6 translate-y-[2px] text-slate-400' />
                      <div className='flex flex-col text-sm leading-6 text-slate-400 font-light'>
                        <p>{location.address}</p>
                        <p>{`${location.zipCode} ${location.city}`}</p>
                        <p>{location.country}</p>
                      </div>
                    </div>
                  ))}
              </div>
              {props.mwstNumber && (
                <div>
                  <p className='text-sm leading-6 text-slate-400 font-light'>
                    {props.dictionary.mwstNumber}: {props.mwstNumber}
                  </p>
                </div>
              )}
              <div className='flex items-center space-x-6 !mt-10'>
                {socialLinks.map((item) => (
                  <Button
                    key={item.title}
                    asChild
                    tone='secondary'
                    variant='link'
                  >
                    <a
                      href={item.link}
                      target='_blank'
                    >
                      <span className='sr-only'>{item.title}</span>
                      <item.socialIcon
                        className='w-[18px] h-[18px] text-sky-500'
                        aria-hidden='true'
                      />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
            <div className='flex flex-col gap-y-10 sm:flex-row sm:justify-between sm:gap-28'>
              <div>
                <h3 className='text-sm font-normal text-slate-50 capitalize'>{props.dictionary.services}</h3>
                <ul
                  role='list'
                  className='mt-4 space-y-3 lg:mt-8'
                >
                  {props.services.map((item) => (
                    <li key={item.slug}>
                      <Button
                        asChild
                        tone='secondary'
                        variant='link'
                        className='font-light text-slate-400'
                      >
                        <a
                          href={`/services/${item.slug}`}
                          className='text-sm leading-6 text-slate-400 hover:text-slate-50'
                        >
                          {item.title}
                        </a>
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className='text-sm font-normal text-slate-50 capitalize'>{props.dictionary.solutions}</h3>
                <ul
                  role='list'
                  className='mt-4 space-y-3 lg:mt-8'
                >
                  {props.solutions.map((item) => (
                    <li key={item.slug}>
                      <Button
                        asChild
                        tone='secondary'
                        variant='link'
                        className='font-light text-slate-400 hover:text-slate-50'
                      >
                        <a href={`/solutions/${item.slug}`}>{item.title}</a>
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className='text-sm font-normal text-slate-50 capitalize'>{props.dictionary.company}</h3>
                <ul
                  role='list'
                  className='mt-4 space-y-3 lg:mt-8'
                >
                  {companyLinks.map((item) => (
                    <li key={item.title}>
                      <Button
                        key={item.title}
                        asChild
                        tone='secondary'
                        variant='link'
                        className='font-light text-slate-400 hover:text-slate-50'
                      >
                        <a href={item.link}>{item.title}</a>
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className='pt-8 mt-14 border-t border-slate-800'>
            <p className='text-xs font-light text-slate-400 text-center'>
              &copy; 56K.Cloud {currentYear} – All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </ComponentLayout>
  )
}
