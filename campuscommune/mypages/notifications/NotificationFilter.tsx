"use client";
import { usePathname, useRouter } from "next/navigation";


const NotificationFilter = () => {
    const pathname = usePathname();
    const router = useRouter();

    const categories = [
        {
            name: "all notifications",
            link: "/notifications"
        },
        {
            name: "stories",
            link: "/notifications/stories"
        },
        {
            name: "questions",
            link: "/notifications/questions"
        },
        {
            name: "spaces",
            link: "/notifications/spaces"
        },
        {
            name: "people updates",
            link: "/notifications/people"
        },
        {
            name: "comments and mentions",
            link: "/notifications/comments"
        },
        {
            name: "upvotes",
            link: "/notifications/upvotes"
        },
        {
            name: "your content",
            link: "/notifications/your-content"
        },
        {
            name: "your profile",
            link: "/notifications/your-profile"
        },
        {
            name: "announcements",
            link: "/notifications/announcements"
        },
        {
            name: "earnings",
            link: "/notifications/earnings"
        },
        {
            name: "subscriptions",
            link: "/notifications/subscriptions"
        }
    ];

    return (
        <div className="md:flex flex-col gap-1 h-full hidden">
            <h3 
            style={{borderBottomWidth: "1px"}}
            className="text-sm text-neutral-600 px-4 py-0.5 border-b-neutral-500 font-semibold">
                Filters
            </h3>
            <div className="flex flex-col text-xs">
                {
                    categories.map((category) => (
                        <span 
                        onClick={() => router.push(category.link)}
                        style={{
                                backgroundColor: pathname === category.link ? "#fbd5d0" : "",
                                color: pathname === category.link ? "#FF725E" : "",
                                fontWeight: pathname === category.link ? "bold" : ""
                        }}
                        key={category.link} 
                        className={`text-neutral-700 px-4 py-2 capitalize hover:bg-neutral-300 cursor-pointer`}>
                            {category.name}
                        </span>
                    ))
                }
            </div>
        </div>
    )
};


export default NotificationFilter;