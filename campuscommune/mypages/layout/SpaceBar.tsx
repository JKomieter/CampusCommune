import NoteModal from '@/modals/noteModal/NoteModal'
import SpaceModal from '@/modals/spaceModal/SpaceModal'
import { Modal, ModalContent, useDisclosure } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { AiOutlinePlus } from 'react-icons/ai'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { GrNotes } from 'react-icons/gr'
import { MdOutlineExplore } from 'react-icons/md'
import { RiDiscussLine } from 'react-icons/ri'

const SpaceBar = () => {
  const router = useRouter()

  const {
    isOpen: notesIsOpen,
    onOpen: notesOnOpen,
    onOpenChange: notesOnpenChange
  } = useDisclosure()

  const {
    isOpen: spaceIsOpen,
    onOpen: spaceOnOpen,
    onOpenChange: spaceOnpenChange
  } = useDisclosure()

  return (
    <div className='flex flex-col gap-3 items-start bg-white shadow-lg px-4 py-3 rounded-md overflow-x-hidden'>
      <div
        onClick={() => spaceOnOpen()}
        className='cursor-pointer hover:bg-neutral-300 p-2 rounded-md w-full flex items-center gap-2'
      >
        <AiOutlinePlus size={20} className='text-neutral-800' />
        <p className='text-sm'>Create Space</p>
      </div>
      <Modal isOpen={spaceIsOpen} onOpenChange={spaceOnpenChange}>
        <ModalContent className='rounded-md'>
          {onClose => <SpaceModal onClose={onClose} />}
        </ModalContent>
      </Modal>
      <div
        onClick={() => notesOnOpen()}
        className='cursor-pointer hover:bg-neutral-300 p-2 rounded-md w-full  flex items-center gap-2'
      >
        <GrNotes size={20} className='text-neutral-800' />
        <p className='text-sm'>Share Notes</p>
      </div>
      <Modal isOpen={notesIsOpen} onOpenChange={notesOnpenChange}>
        <ModalContent className='rounded-md'>
          {onClose => <NoteModal onClose={onClose} />}
        </ModalContent>
      </Modal>
      <div className='cursor-pointer hover:bg-neutral-300 p-2 rounded-md w-full  flex items-center gap-2'>
        <RiDiscussLine size={20} className='text-neutral-800' />
        <p onClick={() => router.push('/join-discussion')} className='text-sm'>
          Join Discussions
        </p>
      </div>
      <div className='cursor-pointer hover:bg-neutral-300 p-2 rounded-md w-full  flex items-center gap-2'>
        <MdOutlineExplore size={20} className='text-neutral-800' />
        <p className='text-sm'>Explore Courses</p>
      </div>
      <div className='cursor-pointer hover:bg-neutral-300 p-2 rounded-md w-full  flex items-center gap-2'>
        <FaChalkboardTeacher size={20} className='text-neutral-800' />
        <p className='text-sm'>Find Tutors</p>
      </div>
    </div>
  )
}

export default SpaceBar
