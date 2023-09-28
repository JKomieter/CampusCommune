import SpaceStepOne from './SpaceStepOne'
import { useCallback, useState } from 'react'
import SpaceStepTwo from './SpaceStepTwo'

const SpaceModal = ({ onClose }: { onClose: () => void }) => {
  const [step, setStep] = useState<1 | 2>(1)
  const [spaceName, setSpaceName] = useState<string>('')
  const [spaceDescription, setSpaceDescription] = useState<string>('')

  const handleCreateSpace = useCallback(() => {}, [])

  const Step = {
    1: (
      <SpaceStepOne
        onClose={onClose}
        setStep={setStep}
        spaceName={spaceName}
        setSpaceName={setSpaceName}
        spaceDescription={spaceDescription}
        setSpaceDescription={setSpaceDescription}
      />
    ),
    2: (
      <SpaceStepTwo
        spaceName={spaceName}
        handleCreateSpace={handleCreateSpace}
      />
    )
  } as Record<1 | 2, JSX.Element>

  return <>{Step[step]}</>
}

export default SpaceModal
