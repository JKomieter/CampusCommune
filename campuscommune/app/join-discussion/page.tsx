import Discussion from "@/mypages/discussion/Discussion";
import { DiscussionDesktopBg } from "@/svgs";
import { DiscussionMobileBg } from "@/svgs";


const JoinDiscussionPage = () => {

    return (
        <>
            <DiscussionMobileBg className="w-screen h-screen fixed" />
            {/* <DiscussionDesktopBg className="w-screen h-screen hidden" /> */}
            <div className="lg:px-36 h-screen md:px-16 sm:px-12 px-3 w-full
            flex flex-row gap-2 items-start overflow-x-hidden  overflow-y-hidden">
                <Discussion />
            </div>
        </>
    )
}

export default JoinDiscussionPage;