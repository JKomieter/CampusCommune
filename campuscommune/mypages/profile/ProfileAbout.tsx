

const ProfileAbout = ({about_me}: {about_me: string}) => {
    return (
        <div className="w-full text-neutral-500 text-xs md:text-sm">
            {about_me}
        </div>
    )
};

export default ProfileAbout;