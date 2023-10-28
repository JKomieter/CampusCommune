import { NotificationType } from "@/types";
import { Avatar, Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import TypeOfNotification from "./TypeOfNotification";
import { PiDotsThreeOutlineLight } from "react-icons/pi";



const NotificationItem = ({ notification }: { notification: NotificationType }) => {
    return (
        <div
            style={{ borderBottomWidth: "0.7px", backgroundColor: "#e5f0fa", borderBottomColor: "#8a8a8a", maxWidth: "600px", }}
            className="flex flex-row p-4 gap-2 cursor-pointer">
            <div className="flex flex-row items-start justify-betwee">
                <Avatar
                    src={notification.sender_photo}
                    size="md"
                    radius="md"
                />
            </div>
            <TypeOfNotification
                notification={notification}
            />
            <Popover placement="left" showArrow={true}>
                <PopoverTrigger>
                    <div className="p-1 rounded-full hover:bg-gray-400 cursor-pointer">
                        <PiDotsThreeOutlineLight size={22} />
                    </div>
                </PopoverTrigger>
                <PopoverContent>
                    <div className="flex flex-col gap-1">
                        <span className="text-sm text-neutral-700 px-4 py-2 capitalize hover:bg-neutral-300 cursor-pointer hover:underline">
                            Mark as read
                        </span>
                        <span className="text-sm text-neutral-700 px-4 py-2 capitalize hover:bg-neutral-300 cursor-pointer hover:underline">
                            Settings
                        </span>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    )
};

export default NotificationItem