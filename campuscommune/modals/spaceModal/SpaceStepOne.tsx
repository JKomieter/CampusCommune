import { ModalHeader, ModalBody, ModalFooter } from '@nextui-org/react'

const SpaceStepOne = ({
  onClose,
  setStep,
  spaceName,
  setSpaceName,
  spaceDescription,
  setSpaceDescription
}: {
  onClose: () => void
  setStep: React.Dispatch<React.SetStateAction<1 | 2 | 3>>
  spaceName: string
  setSpaceName: React.Dispatch<React.SetStateAction<string>>
  spaceDescription: string
  setSpaceDescription: React.Dispatch<React.SetStateAction<string>>
}) => {
  return (
    <>
      <ModalHeader>Create a Space</ModalHeader>
      <ModalBody>
        <div style={{ gap: '25px' }} className='flex flex-col'>
          <p className='text-xs md:text-sm text-neutral-500'>
            Share your interests, curate content, host discussions, and more.
          </p>
          <div className='text-neutral-700 flex flex-col gap-1'>
            <span>
              Name<span style={{ color: 'red' }}>*</span>
            </span>
            <p className='md:text-xs text-[11px] text-neutral-500'>
              This can be changed in Space settings.
            </p>
            <input
              type='text'
              value={spaceName}
              onChange={e => setSpaceName(e.target.value)}
              style={{ borderWidth: '1px', borderColor: '#e5e4e4' }}
              className='w-full p-2 rounded-md focus:border-primary-400'
              placeholder='Enter space name'
            />
          </div>
          <div className='text-neutral-700 flex flex-col gap-1'>
            <span>Brief description</span>
            <p className='md:text-xs text-[11px] text-neutral-500'>
              Include a few keywords to show people what to expect if they join.
            </p>
            <input
              type='text'
              value={spaceDescription}
              onChange={e => setSpaceDescription(e.target.value)}
              style={{ borderWidth: '1px', borderColor: '#e5e4e4' }}
              className='w-full p-2 rounded-md focus:border-primary-400'
              placeholder='Enter space description'
            />
          </div>
        </div>
        <ModalFooter className='w-full items-center justify-end flex flex-row'>
          <button
            disabled={spaceName.length === 0}
            onClick={() => {
              setStep(3);
              setTimeout(() => {
                setStep(2);
              }, 2000);
            }}
            className='text-sm md:text-base text-white bg-blue-500 rounded-2xl px-4 py-2'
          >
            Create Space
          </button>
        </ModalFooter>
      </ModalBody>
    </>
  )
}

export default SpaceStepOne
