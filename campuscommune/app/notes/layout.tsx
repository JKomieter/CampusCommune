import News from "@/mypages/news/News"
import NotesTopics from "@/mypages/notes/NotesTopics"

export default function NotesLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <div className="w-full h-screen bg-neutral-200 overflow-hidden">
            <div className="lg:px-36 h-full md:px-16 sm:px-12 px-3 w-full flex flex-row gap-4 items-start pt-20">
                <NotesTopics />
                {children}
                <News />
            </div>
        </div>
    )
}