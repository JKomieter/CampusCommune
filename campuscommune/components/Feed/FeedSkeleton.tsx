import { Skeleton, Card } from "@nextui-org/react";



const FeedSkeleton = () => {
    return (
        <div className="flex flex-col gap-4 items-center justify-center overflow-y-scroll w-full">
            <Card className="w-full rounded-md flex flex-col shadow-md" >
                <div style={{ borderBottomWidth: "0.3px" }} className="px-3 py-4 w-full border-b-neutral-500"/>
                <Skeleton className="w-full px-3 py-7"/>
                <Skeleton className="w-full px-3 py-4"/>
            </Card>
            <Card className="w-full rounded-md flex flex-col shadow-md gap-2" >
                <div className="flex flex-row items-center justify-between px-3 py-2 gap-3 w-full">
                    <span>
                        <Skeleton className="flex rounded-full w-12 h-12" />
                    </span>
                    <div className="w-full flex flex-col gap-2">
                        <Skeleton className="h-3 w-3/5 rounded-lg" />
                        <Skeleton className="h-3 w-4/5 rounded-lg" />
                    </div>
                </div>
                <div className="flex flex-col gap-2 px-3 w-full">
                    <Skeleton className="h-5 w-3/5 rounded-lg" />
                    <Skeleton className="h-7 w-4/5 rounded-lg" />
                </div>
                <Skeleton className="w-full h-[300px]" />
                <div className="py-6"></div>
            </Card>
        </div>
    )
};

export default FeedSkeleton;