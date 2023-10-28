import { db } from "@/firebase/config";
import { Follower, QuestionType } from "@/types";
import { doc, getDoc, setDoc } from "firebase/firestore";
import toast from "react-hot-toast";


export const handleFollow = async (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    id: string,
    currentUserEmail: string,
) => {
    e.preventDefault();
    const questionDocRef = doc(db, "questions", id);
    const questionDoc = await getDoc(questionDocRef);

    try {
        if (questionDoc.exists()) {
            const questionData = questionDoc.data() as QuestionType;
    
            if (questionData.followers.some((follower: Follower) => follower.user_email === currentUserEmail)) {
                // User is already following, so unfollow by removing from the followers array.
                const updatedFollowers = questionData.followers.filter(
                    (follower: Follower) => follower.user_email !== currentUserEmail
                );
    
                // Update the followers array with the updated list.
                await setDoc(questionDocRef, { followers: updatedFollowers }, { merge: true });
    
                toast.success("You have unfollowed this question.");
            } else {
                // User is not following, so follow by adding to the followers array.
                const newFollower: Follower = {
                    user_email: currentUserEmail,
                    created_at: new Date(),
                };
                const updatedFollowers = [...questionData.followers, newFollower];
    
                // Update the followers array with the updated list.
                await setDoc(questionDocRef, { followers: updatedFollowers }, { merge: true });
    
                toast.success("You have followed this question.");
            }
        } else {
            toast.error("Something went wrong. Please try again.")
        }
    } catch (error) {
        console.log(error);
        toast.error("Something went wrong. Please try again 2.") 
    }
};