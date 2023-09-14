import { AvatarGroup, Avatar } from "@nextui-org/react"


const AvatarCluster = () => {
    return (
        <div className = "md:flex flex-row items-center gap-0 hidden" >
            <AvatarGroup isBordered>
                <Avatar size="sm" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLPD2xqvCPDDtDdgFkU72kA0yCDrXg5FccYA&usqp=CAU" />
                <Avatar size="sm" src="https://res.cloudinary.com/highereducation/images/w_1024,h_683,c_scale/f_auto,q_auto/v1659639301/BestColleges.com/College-Guide-For-Black-and-African-American-Students_1367067674/College-Guide-For-Black-and-African-American-Students-1024x683.jpg" />
                <Avatar size="sm" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIWHF16TfPrviJSNRxomfWpTJVy1vfF_UAMQ&usqp=CAU" />
            </AvatarGroup>
        </div>
    )
}

export default AvatarCluster;