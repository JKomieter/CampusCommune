import SpaceSwiper from '@/components/SpaceSwiper'
import { SpaceType } from '@/types'

const SpaceHeroDetails = ({ space }: { space: SpaceType }) => {
  return (
    <div className='w-full flex flex-col justify-between md:items-end'>
      <div>
        <h1 style={{color: "#f7f7f7"}} className='md:text-2xl sm:text-xl text-lg font-bold'>
          {space.name}
        </h1>
        <p style={{ color: "#e5e4e4" }} className="md:text-sm sm:text-xs text-[10px]">
          {space.description}
        </p>
        <div className='flex flex-row items-center justify-between w-full mt-2'>
          <p
            style={{ color: "#e5e4e4" }} className="md:text-sm sm:text-xs text-[10px]"
          >
            {space.contributors?.length || 3} contributor
          </p>
          <p
            style={{ color: "#e5e4e4" }} className="md:text-sm sm:text-xs text-[10px]"
          >
            View all
          </p>
        </div>
      </div>
      <SpaceSwiper contributors={space.contributors} />
    </div>
  )
}

export default SpaceHeroDetails
