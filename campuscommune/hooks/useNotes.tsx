import { NoteType } from "@/types";
import { useEffect, useState } from "react";
import useGetCurrentUser from "./useGetCurrentUser";
import { db } from "@/firebase/config";
import { collection, query, where, getDocs } from "firebase/firestore";

const useNotes = () => {
    const [notes, setNotes] = useState<NoteType[]>([] as NoteType[]);
    const [interests, setInterests] = useState<string[]>([]);
    const [major, setMajor] = useState<string | null>(null);
    const { currentUser } = useGetCurrentUser();
    const notesCollectionRef = collection(db, "notes");

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                if (currentUser) {
                    // Set interests and major from currentUser
                    setInterests(currentUser?.interests || []);
                    setMajor(currentUser?.major || null);

                    // Construct the categories array
                    const categories = [...interests, major].filter(Boolean);

                    // Check if categories is empty before executing the query
                    if (categories.length > 0) {
                        const notesQueryRef = query(notesCollectionRef, 
                            where("category", "array-contains-any", categories)
                        );
                        const notesSnapshot = await getDocs(notesQueryRef);
                        // Map the query results to an array of note objects
                        const notesData = notesSnapshot.docs.map(doc => ({
                            id: doc.id,
                            ...doc.data()
                        })) as unknown as NoteType[];

                        setNotes(notesData);
                    }
                }
            } catch (error) {
                console.log(error);
                console.log("Error fetching notes");
            }
        };
        fetchNotes();
    }, [currentUser, interests, major]);
    
    return [notes];
};

export default useNotes;
