import { DiscussionListType } from '@/types'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade
} from 'swiper/modules'
import 'swiper/css'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { categoryColor, categoryIcon } from './CategoryColor'
import { BsDot } from 'react-icons/bs'
import AvatarCluster from './AvatarCluster'
import { IconType } from 'react-icons'
import formatNumber from '@/utils/formatNumber'
import {
  useDisclosure
} from '@nextui-org/react'
import DiscussionModal from './DiscussionModal'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/firebase/config";
import { arrayUnion, collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { currentUserType } from "@/types";
import { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'


interface DiscussionItemProps extends DiscussionListType {
  index: number
}

const DiscussionItem: React.FC<DiscussionItemProps> = ({
  title,
  description,
  participants,
  category,
  index,
  views
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [currentUser, setCurrentUser] = useState<currentUserType>({} as currentUserType);
  const [user] = useAuthState(auth);
  const usersCollectionRef = collection(db, "user");
  const discussionsCollectionRef = collection(db, "discussions");
  const [discussion_id, setDiscussion_id] = useState<string>("");
  const [userId, setUserId] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();


  useEffect(() => {
    const getCurrentUser = async () => {
      const userRef = query(usersCollectionRef, where("email", "==", user?.email || ""));
      const querySnapshot = await getDocs(userRef);
      setCurrentUser(querySnapshot.docs.map((doc) => doc.data())[0] as currentUserType);
    };

    getCurrentUser();
  }, []);

  
  const onSubmit = useCallback(async (data: Record<string, any>) => {
    // add user to discussion participants
    try {
      setIsLoading(true);
      const { agree } = data;

      if (!agree) return;

      await addUserToDiscussion();
      await addDiscussionToUserDatabase();

      setTimeout(() => setIsLoading(false), 5000);

      toast.success("Successfully joined discussion");
      router.push(`/join-discussion/${title}`);
    } catch (error) {
      console.log(error);
      toast.error("Error joining discussion");
      setIsLoading(false);
    }
  }, []);

  
  const addUserToDiscussion = async () => {
    // add user to discussion participants
    const discussionRefQuery = query(discussionsCollectionRef, where("title", "==", title));
    const discussionSnapshot = await getDocs(discussionRefQuery);
    discussionSnapshot.forEach((doc) => {
      setDiscussion_id(doc.id);
    });

    const discussionRef = doc(db, "discussions", discussion_id);

    await updateDoc(discussionRef, {
      participants: arrayUnion(currentUser?.email),
    });
  };


  console.log(currentUser?.email); 
  const addDiscussionToUserDatabase = async () => {
    // add discussion to user database
    const userRefQuery = query(usersCollectionRef, where("email", "==", currentUser?.email || ""));
    const userSnapshot = await getDocs(userRefQuery);
    userSnapshot.forEach((doc) => {
      setUserId(doc.id);
    });

    const userRef = doc(db, "user", userId);

    await updateDoc(userRef, {
      discussions: arrayUnion(title),
    });
  }


  let isEven = index % 2 === 0
  let color = 'bg-slate-300' || 'bg-slate-500'
  if (isEven) {
    color = 'bg-slate-300'
  } else {
    color = 'bg-slate-500'
  }


  const CatIcon = categoryIcon[
    category[0] as keyof typeof categoryIcon
  ] as IconType
  const catColor = categoryColor[category[0] as keyof typeof categoryColor]


  return (
    <>
      <Swiper
        onClick={() => onOpen()}
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
        spaceBetween={5}
        slidesPerView={1}
        navigation={true}
        className='rounded-sm w-full cursor-pointer hover:scale-[1.02] ease-in-out transition-all duration-300'
      >
        <SwiperSlide className={`py-6 px-3 ${color}`}>
          <div className='flex flex-row w-full items-center justify-between gap-4'>
            <h3
              className={`md:text-sm text-xs lg:text-base 
                    ${isEven ? 'text-neutral-700' : 'text-neutral-100'
                } min-w-[50%]`}
            >
              {title}
            </h3>
            <div className='flex flex-row gap-0 items-center justify-start'>
              <BsDot
                size={30}
                color={catColor}
                className={`text-[${catColor}]`}
              />
              <p
                className={`text-xs md:text-sm capitalize 
                        md:flex hidden ${isEven
                    ? 'text-neutral-700'
                    : 'text-neutral-100'
                  }`}
              >
                {category}
              </p>
              <CatIcon
                size={18}
                className={`${isEven ? 'text-neutral-700' : 'text-neutral-100'
                  } md:hidden flex`}
              />
            </div>
            <p
              className={`text-xs md:text-sm capitalize 
                         ${isEven
                  ? 'text-neutral-700'
                  : 'text-neutral-100'
                }`}
            >
              {formatNumber(views, 1)} views
            </p>
            <AvatarCluster />
            <span className='rounded-full p-1 flex items-center justify-center bg-neutral-100 cursor-pointer'>
              <MdKeyboardArrowRight size={24} className='text-blue-700' />
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={`py-6 px-3 ${color}`}>Hey</SwiperSlide>
      </Swiper>
      <DiscussionModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onSubmit={onSubmit}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </>
  )
}

export default DiscussionItem
