import DiscussionHeader from "@/pages/discussion/DiscussionHeader"
import DiscussionSidebar from "@/pages/discussion/discussionTitle/DiscussionSidebar"



export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="w-full h-full overflow-x-hidden">
            <DiscussionHeader />
            <DiscussionSidebar />
            {children}
        </div>
    )
}
