'use client';
import { auth } from "@/firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import {useRouter} from "next/navigation";
import { createContext, ReactNode, useEffect,  } from "react";



const AuthContext = createContext({});


const AuthProvider = ({ children }: { children: ReactNode }) => {
    const router = useRouter();

    useEffect(() => {
        // listen for auth state changes
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) {
                router.push("/auth/signin");
            }
        });

        return () => {
            unsubscribe();
        }
    }, []);

    return (
        <AuthContext.Provider value={[]}>
            {children}
        </AuthContext.Provider>
    )
};

export { AuthProvider, AuthContext };