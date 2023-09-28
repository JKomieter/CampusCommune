import { SpaceType } from '@/types'
import { Avatar } from '@nextui-org/react'

const SpaceContributors = ({ space }: { space: SpaceType }) => {
  return (
    <div className='basis-1/3 md:flex hidden flex-col gap-4'>
      <div className='rounded-md shadow-md flex flex-col bg-white'>
        <div
          style={{ borderBottomWidth: '1px', minWidth: '390px' }}
          className='flex flex-row item-center justify-between w-full p-3 border-neutral-300 text-neutral-600 text-sm'
        >
          <p>{space.contributors?.length || 3} contributors</p>
          <p>View all</p>
        </div>
        <div className='flex flex-col w-full'>
          {space.contributors?.map(contributor => (
            <div
              key={contributor.user_email}
              className='w-full p-3 text-neutral-800'
            >
              <div className='flex flex-row items-start gap-2'>
                <Avatar
                  size='md'
                  src={contributor.user_photo}
                  alt=''
                  className='rounded-full w-8 h-8'
                />
                <div className='flex flex-col'>
                  <span className='text-sm font-bold'>
                    {contributor.user_name}
                  </span>
                  <span className='text-xs'>{contributor.user_role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SpaceContributors
