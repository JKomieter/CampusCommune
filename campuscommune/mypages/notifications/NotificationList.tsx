import { useGetNotifications } from "@/hooks/useGetNotifications";
import NotificationItem from "./NotificationItem";
import { BsDot } from "react-icons/bs";


const NotificationList = () => {
    const [notifications] = useGetNotifications();

    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center justify-between md:text-sm text-xs">
                <h4 className=" font-semibold text-neutral-600">Notifications</h4>
                <div className="text-neutral-500 md:text-sm text-xs flex flex-row items-center gap-0.5">
                    <span className="hover:underline">Mark all as read</span>
                    <BsDot size={12} />
                    <span className="hover:underline">Settings</span>
                </div>
            </div>
            <div
                className="flex flex-col w-full shadow-sm over">
                {
                    notifications?.map((notification) => (
                        <NotificationItem
                            key={notification.id}
                            notification={notification}
                        />
                    ))
                }
            </div>
        </div>
    )
};

export default NotificationList