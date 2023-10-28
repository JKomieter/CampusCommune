import { NotificationType } from "@/types";
import { formatMonthDay } from "@/utils/formatMonthDay";
import { useMemo } from "react";


const TypeOfNotification = ({
    notification
}: {
    notification: NotificationType
}) => {

    const Types = {
        "comment": (
            <div className="w-full md:text-sm text-xs text-neutral-700">
                {notification.sender_name} commented on your post:{" "} 
                <span
                    style={{color: "#1e56a0"}}
                    className="font-semibold"
                >
                    {notification.post_title}
                </span> 
                <span className="md:text-xs text-[10px]">
                    . {formatMonthDay(new Date(notification.created_at?.seconds * 1000 + notification.created_at?.nanoseconds / 1000000))}
                </span>
            </div>
        ),
        "upvote": (
            <div className=""></div>
        ),
    } as Record<string, JSX.Element>;


    return (
        <div className="w-full">
            {
                Types[notification.type]
            }
        </div>
    )
};

export default TypeOfNotification