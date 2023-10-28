"use client";
import NotificationFilter from "@/mypages/notifications/NotificationFilter"
import NotificationList from "@/mypages/notifications/NotificationList"


export default function NotificationsPage() {

    return (
        <div className="w-full h-screen bg-white/95 overflow-hidden">
            <div className="lg:px-36 h-full md:px-16 sm:px-12 px-3 w-full mt-[80px] flex flex-row gap-4">
                <NotificationFilter />
                <NotificationList /> 
            </div>
        </div>
    )
};