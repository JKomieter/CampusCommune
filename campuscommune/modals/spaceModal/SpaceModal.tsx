import SpaceStepOne from './SpaceStepOne'
import { useCallback, useState } from 'react'
import SpaceStepTwo from './SpaceStepTwo'
import toast from 'react-hot-toast'
import useGetCurrentUser from '@/hooks/useGetCurrentUser'
import { SpaceType } from '@/types'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '@/firebase/config'
import LoadingMode from '../questionModal/LoadingMode'
import { ModalBody, ModalHeader } from '@nextui-org/react'

const SpaceModal = ({ onClose }: { onClose: () => void }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [spaceName, setSpaceName] = useState<string>('')
  const [spaceDescription, setSpaceDescription] = useState<string>('');
  const { currentUser } = useGetCurrentUser();
  const spacesCollectionRef = collection(db, 'spaces');


  const handleCreateSpace = useCallback(async () => {
    try {
      const spaceData = {
        name: spaceName,
        description: spaceDescription,
        created_at: new Date(),
        icon: '',
        space_photo: '',
        admin: {
          user_email:  currentUser?.email,
          user_name: currentUser?.full_name,
          user_photo: currentUser?.profile_pic,
          user_role: "Vice President of CS club"
        },
        contributors: [],
        category: ["General"],
      } as SpaceType;

      await addDoc(spacesCollectionRef, spaceData);

      toast.success("Space created successfully");
      onClose()
    } catch (error) {
      console.log(error);
      toast.error("Failed to create space")
    }
  }, [currentUser, spaceName, spaceDescription, spacesCollectionRef, onClose])


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
    ),
    3: (
      <>
      <ModalHeader></ModalHeader>
      <ModalBody>
        <div className="py-48">
          <LoadingMode />
        </div>
      </ModalBody>
      </>
    )
  } as Record<1 | 2 | 3, JSX.Element>


  return <>{Step[step]}</>
}

export default SpaceModal
