import { Skeleton } from "@nextui-org/react";



const MessageSkeleton = () => {
    const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    return (
        <div className="flex flex-col w-full">
        {arr.map((num) => (
            <div key={num} className="w-full flex items-center gap-2 px-3 py-4">
                <div>
                    <Skeleton className="flex rounded-full w-12 h-12" />
                </div>
                <div className="w-full flex flex-col gap-2">
                    <Skeleton className="h-3 w-3/5 rounded-lg" />
                    <Skeleton className="h-3 w-4/5 rounded-lg" />
                </div>
            </div>
        ))}
     </div>
    )
}

export default MessageSkeleton;