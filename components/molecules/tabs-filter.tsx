import 'pure-react-carousel/dist/react-carousel.es.css'
import {ButtonBack, ButtonNext, CarouselProvider, Slider} from 'pure-react-carousel'
import {useRouter} from 'next/router'
import Link from 'next/link'
import classNames from '../../utils/classes'

export type TabsFilterProps = {
  tags: Array<string>
}

export default function TabsFilter({tags}: TabsFilterProps) {
  const router = useRouter()
  const tagsWithCategoryAll = ['All', ...tags]

  return (
    <CarouselProvider className='mb-10 overflow-hidden' naturalSlideWidth={100} naturalSlideHeight={125} 
      totalSlides={25}>
      <div className='relative flex items-center px-8'>
        <ButtonBack role='button' aria-label='slide backward' className='absolute left-0 z-50'>
          <svg width={8} height={14} viewBox='0 0 8 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M7 1L1 7L7 13' stroke='#1f2c73' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          </svg>
        </ButtonBack>
        <div className='absolute z-30 w-10 h-12 left-6 bg-gradient-to-r from-blue-lighter'></div>
        <Slider>
          <ul className='flex overflow-x-hidden gap-x-3'>
            {tagsWithCategoryAll.map((tag, idx) => (
              tag === 'All' ? (
                <Link key={tag} href={'/blog'} className={classNames(router.pathname === '/blog' 
                  ? 'text-blue-medium' : 'text-blue-300 hover:text-blue-medium', 
                'text-sm 2xl:text-base font-normal relative px-5 py-3 bg-white rounded-xl whitespace-nowrap')}>
                  {tag}
                </Link>
              ) : (
                <Link key={idx} href={`/blog?tag=${tag.toLowerCase()}`} 
                  className={classNames(router.asPath === `/blog?tag=${tag.toLowerCase()}` 
                    ? 'text-blue-medium' : 'text-blue-300 hover:text-blue-medium', 
                  'text-sm 2xl:text-base font-normal relative px-5 py-3 bg-white rounded-xl whitespace-nowrap')}>
                  {tag.replace(/-/g, ' ')}
                </Link>
              )
            ))}
          </ul>
        </Slider>
        <div className='absolute z-30 w-10 h-12 right-6 bg-gradient-to-l from-blue-lighter'></div>
        <ButtonNext role='button' aria-label='slide forward' className='absolute right-0 z-50'>
          <svg width={8} height={14} viewBox='0 0 8 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M1 1L7 7L1 13' stroke='#1f2c73' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          </svg>
        </ButtonNext>
      </div>
    </CarouselProvider>
  )
}
