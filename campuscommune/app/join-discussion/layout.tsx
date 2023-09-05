import DiscussionHeader from "@/components/Discussion/DiscussionHeader"



export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="w-full h-full overflow-x-hidden">
            <DiscussionHeader />
            {children}
        </div>
    )
}
