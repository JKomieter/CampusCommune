import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { currentUserType } from "@/types";


export const getCurrentUser = async () => {
    const usersCollectionRef = collection(db, "user");
    const [user] = useAuthState(auth);

    const userRef = query(usersCollectionRef, where("email", "==", user?.email || ""));
    const querySnapshot = await getDocs(userRef);

    return querySnapshot.docs.map((doc) => doc.data())[0] as currentUserType;
}