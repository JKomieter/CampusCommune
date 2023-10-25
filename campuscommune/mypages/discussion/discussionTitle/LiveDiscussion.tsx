import { db, auth } from "@/firebase/config";
import { DiscussionType, currentUserType } from "@/types";
import { collection, doc, getDocs, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { DiscussionMessage } from "@/types";
import LiveDiscussionHeader from "./LiveDiscussionHeader";
import LiveDiscussionMessages from "./LiveDiscussionMessages";
import LiveDiscussionActions from "./LiveDiscussionActions";

const LiveDiscussion = ({
    full_title
}: {
    full_title: string
}) => {
    const [currentUserDiscussions, setCurrentUserDiscussions] = useState<DiscussionType[]>([] as DiscussionType[]);
    const discussionsCollectionRef = collection(db, "discussions");
    const usersCollectionRef = collection(db, "user");
    const discussionMessagesCollectionRef = collection(db, "discussion_messages");
    const [currentUser, setCurrentUser] = useState<currentUserType>({} as currentUserType);
    const [user] = useAuthState(auth);
    const [discussionMessages, setDiscussionMessages] = useState<DiscussionMessage[]>([] as DiscussionMessage[]);
    

    useEffect(() => {
        const getCurrentUser = async () => {
            const userQuery = query(usersCollectionRef, where("email", "==", user?.email));
            const querySnapshot = await getDocs(userQuery);
            const currentUser = querySnapshot.docs.map((doc) => doc.data()) as currentUserType[];
            setCurrentUser(currentUser[0]);
        };

        getCurrentUser();
    }, []);


    useEffect(() => {
        // subscribe to discssion messages doc changes querying by title
        const discussionMessagesQuery = query(
            discussionMessagesCollectionRef, 
            where("title", "==", full_title),
            // orderBy("timestamp", "asc")
        );
        const unsubscribe = onSnapshot(discussionMessagesQuery, (querySnapshot) => {
            const messages = querySnapshot.docs.map((doc) => doc.data()) as DiscussionMessage[];
            setDiscussionMessages(messages);
        });

        return () => unsubscribe();
    }, []);


    return (
        <div className="h-full w-full bg-gray-200 flex flex-col overflow-y-hidden shadow-md">
            <LiveDiscussionHeader
                title={full_title}
            />
            <LiveDiscussionMessages messages={discussionMessages} currentUserEmail={currentUser?.email} />
            <LiveDiscussionActions title={full_title} currentUser={currentUser} />
        </div>
    )
};


export default LiveDiscussion;