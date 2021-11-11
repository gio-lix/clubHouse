import type {NextPage} from "next";
import Profile from "@/components/page/profile/Profile";
import birds from '../../public/bird.webp'


const ProfilePage: NextPage = () => {

    return (
        <>
            <Profile fullName='mollie andersson' avatarUrl={birds} userName='mollie' about='super'/>
        </>
    )
}
export default ProfilePage