import { SpaceMail } from '@/svgs'
import { Button, ModalBody, ModalFooter, ModalHeader } from '@nextui-org/react'
import { FiLink } from 'react-icons/fi'
import { HiOutlineSearch } from 'react-icons/hi'

const SpaceStepTwo = ({
   spaceName,
   handleCreateSpace,
  }: { 
    spaceName: string,
    handleCreateSpace: () => void, 
}) => {
  return (
    <>
      <ModalHeader>Invite Contributors to {spaceName}</ModalHeader>
      <ModalBody>
        <div className='flex flex-col gap-5'>
          <p className='text-xs md:text-sm text-neutral-500'>
            Contributors can add content to the Space. Inviting more
            contributors can encourage discussions and grow content.{' '}
          </p>
          <div className='flex flex-row gap-1 w-full px-1 items-center text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
            <HiOutlineSearch size={20} className="text-neutral-400" />
            <input
              type='search'
              className='p-2 w-full bg-transparent outline-none focus:bg-blue-300'
              placeholder='Search by name'
            />
          </div>
          <div className="w-full flex flex-row items-center justify-between">
            <div className="flex flex-row gap-2">
              <FiLink
                size={20}
                className='text-neutral-700'  
                />
              <p className="text-sm text-neutral-700 font-semibold">Get invite link</p>
            </div>
            <Button
              variant='bordered'
              color='primary'
              className='text-sm md:text-base rounded-3xl px-4 py-2'
            >
              Copy
            </Button>
          </div>
          <div className="p-2 bg-neutral-200 w-full md:text-[13px] text-[11px]">
            0 selected
          </div>
          <div style={{height: "130px"}} className="w-full flex flex-col gap-2 items-center justify-center">
            <SpaceMail className="h-14 w-14 text-neutral-500" />
            <p className='text-neutral-500 font-semibold text-xs md:text-sm'>
              No Suggestions
            </p>
            <p className='text-[10px] text-center md:text-[12px] text-neutral-500'>
              You are out of follower suggestions. To invite someone you know, use the invite link.
            </p>
          </div>
        </div>
      </ModalBody>
      <ModalFooter className='w-full items-center justify-end flex flex-row gap-2'>
        <Button
          onClick={handleCreateSpace}
          variant='flat'
          color='default'
          className='text-sm md:text-base rounded-3xl px-4 py-2 text-neutral-600'
        >
            Skip
        </Button>
        <Button
          variant="solid"
          color="primary"
          className='text-sm md:text-base rounded-3xl px-4 py-2 font-semibold text-white'
        >
          Preview invite
        </Button>
      </ModalFooter>
    </>
  )
}

export default SpaceStepTwo
