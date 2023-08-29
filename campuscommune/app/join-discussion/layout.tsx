import DiscussionPageHeader from "@/components/Discussion/DiscussionPageHeader"



export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="w-full h-full overflow-x-hidden">
            <DiscussionPageHeader />
            {children}
        </div>
    )
}
