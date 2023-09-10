import DiscussionHeader from "@/components/Discussion/DiscussionHeader"
import DiscussionSidebar from "@/components/Discussion/DiscussionTitle/DiscussionSidebar"



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
