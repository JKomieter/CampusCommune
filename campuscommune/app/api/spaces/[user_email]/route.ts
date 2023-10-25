import { db } from "@/firebase/config";
import { SpaceType } from "@/types";
import { collection, query, where, getDocs } from "firebase/firestore";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";


export async function GET(
    request: NextApiRequest,
    { params }: { params: { user_email: string }}
) {
    try {
        const user_email = params.user_email;
        const spacesCollectionRef = collection(db, 'spaces');

        const spacesSnapshot = query(
            spacesCollectionRef,
            // where('contributors', 'array-contains', { "user_email": user_email })
        );
        const spacesSnapshotData = await getDocs(spacesSnapshot);
        const spacesData = spacesSnapshotData.docs.map(doc => ({
            ...doc.data()
        })) as SpaceType[];

        return NextResponse.json(spacesData, { status: 200 })
    } catch (error) {
        console.log(error);
        return NextResponse.json([], { status: 500 })
    }
}