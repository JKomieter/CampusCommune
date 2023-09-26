import { ModalBody, ModalHeader } from '@nextui-org/react'
import { HiOutlineSearch } from 'react-icons/hi'

const SpaceStepTwo = ({ spaceName }: { spaceName: string }) => {
  return (
    <>
      <ModalHeader>Invite Contributors to {spaceName}</ModalHeader>
      <ModalBody>
        <div className='flex flex-col gap-4'>
          <p className='text-xs md:text-sm text-neutral-500'>
            Contributors can add content to the Space. Inviting more
            contributors can encourage discussions and grow content.{' '}
          </p>
          <div className='flex flex-row gap-1 w-full px-1 items-center text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
            <HiOutlineSearch size={20} className="text-neutral-400" />
            <input
              type='search'
              className='p-2 w-full bg-transparent outline-none'
              placeholder='Search by name'
            />
          </div>
        </div>
      </ModalBody>
    </>
  )
}

export default SpaceStepTwo
