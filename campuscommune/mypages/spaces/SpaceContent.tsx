import { SpaceType } from '@/types'
import SpaceContributors from './SpaceContributors'
import SpaceMainContent from './SpaceMainContent'

const SpaceContent = ({ space }: { space: SpaceType }) => {
  return (
    <div
      style={{ gap: '60px' }}
      className='flex flex-row items-start w-full lg:px-36 md:px-16 sm:px-12 px-3 py-3'
    >
      <SpaceMainContent space={space} />
      <SpaceContributors space={space} />
    </div>
  )
}

export default SpaceContent
