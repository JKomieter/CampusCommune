import { SpaceType } from '@/types'
import SpaceNav from './SpaceNav'
import SpaceSubmit from './SpaceSubmit'
import { BsGraphUpArrow } from 'react-icons/bs'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

const SpaceMainContent = ({ space }: { space: SpaceType }) => {
  return (
    <div className='w-full flex flex-col gap-4'>
      <SpaceNav />
      <SpaceSubmit space={space} />
      <div className='w-full text-xs text-neutral-700 flex flex-row items-center gap-1'>
        <BsGraphUpArrow size={15} /> Top{' '}
        <MdOutlineKeyboardArrowDown size={15} />
      </div>
    </div>
  )
}

export default SpaceMainContent
