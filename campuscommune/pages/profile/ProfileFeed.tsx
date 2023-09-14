import { db } from "@/firebase/config";
import { FeedType, PostType, QuestionType } from "@/types";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useState, useEffect, use } from "react";
import { auth } from "@/firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import UserFeed from "./UserFeed";


const ProfileFeed = ({ user_email }: { user_email: string}) => {    
    
    const postsCollectionRef = collection(db, "posts");
    const questionsCollectionRef = collection(db, "questions");
    const [user] = useAuthState(auth);
    const [feed, setFeed] = useState<FeedType[]>([]);
    const [userEmail, setUserEmail] = useState<string>(user_email);
    
    useEffect(() => {
        console.log("user_email", userEmail);
        const getUserFeed = async () => {
            const queryPosts = query(postsCollectionRef, where("author_email", "==", userEmail));
            const postQuerySnapshot = await getDocs(queryPosts);
            const posts = postQuerySnapshot.docs.map(doc => doc.data() as PostType);
            
            const queryQuestions = query(questionsCollectionRef, where("author_email", "==", userEmail));
            const questionQuerySnapshot = await getDocs(queryQuestions);
            const questions = questionQuerySnapshot.docs.map(doc => doc.data() as QuestionType);
            
            setFeed([...posts, ...questions]);
        }

        return () => {
            getUserFeed();
        }
    }, []);

    return (
        <div className="w-full">
            <UserFeed feed={feed}/>
        </div>
    )
};

export default ProfileFeed;


