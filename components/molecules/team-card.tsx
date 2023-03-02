import Img from '../atoms/img'

export type TeamCardProps = {
  firstName: string
  lastName: string
  role: string
  image: string
}

export default function TeamCard ({ firstName, lastName, role, image }: TeamCardProps) {
  return (
    <div className='relative flex flex-col p-6 mb-8 text-white sm:mb-0 bg-blue-medium'>
      <p className='font-normal text-right'>{role}</p>
      <div className='w-2/3 mx-auto my-[10%]'>
        <Img src={image} alt={`${firstName} ${lastName}`} width={100} height={0} className='w-full rounded-full' />
      </div>
      <h3 className='text-2xl title'>{firstName} <br /> {lastName}</h3>
      <div className='absolute bottom-0 right-0 flex items-center justify-center w-16 h-16 bg-blue-light'>
        <Img src='/images/plus-blue.svg' alt='Plus icon' width={18} height={18} />
      </div>
    </div>
  )
}
