import type {NextPage} from "next";
import ProfileHeader from "@/components/page/profile/ProfileHeader";

const RoomsPage: NextPage = () => {
    return (
        <>
            <div className='w-full h-screen p-10 bg-yellow-100'>
                <ProfileHeader fullName='mollie andersson' />
                <div>
                    HERE WE BE ALL FETCHING TADA
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad distinctio eveniet ex expedita ipsam iure laboriosam nobis tempora tenetur voluptas. Adipisci asperiores et ex officia omnis placeat quod vitae voluptates!
                </div>
            </div>

        </>
    )
}
export default RoomsPage