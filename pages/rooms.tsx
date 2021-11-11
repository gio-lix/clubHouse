import type {GetServerSideProps, NextPage} from "next";
import ProfileHeader from "@/components/page/profile/ProfileHeader";
import ConversationRooms from "@/components/page/rooomsPage";
import Link from 'next/link'
import Axios from '../config/axios'

const RoomsPage: NextPage = ({rooms = []}: any) => {

    return (
        <>
            <div className='w-full h-screen p-10 bg-yellow-100'>
                <ProfileHeader fullName='mollie andersson'/>
                <div>
                    <div className='flex justify-between'>
                        <p>All Conversation</p>
                        <button className='w-28 py-1 rounded-2xl bg-green-300 text-white font-semibold'>+ start room </button>
                    </div>
                    <div className='md:grid flex flex-col items-center justify-center md:grid-cols-3 gap-3 my-4'>
                        {rooms.map((obj: any, index: number) => (
                        <div key={index} className='col-span-3   md:col-span-1  bg-white shadow-2xl  border border-gary-300 h-40 px-1'>
                                <Link href={`/rooms/${obj._id}`}>
                                    <a>
                                        <ConversationRooms
                                            speakCount={obj.speakCount}
                                            guestCount={obj.guestCount}
                                            guest={obj.guest}
                                            title={obj.title}
                                            avatarUrl={obj.avatars}
                                        />
                                    </a>
                                </Link>
                        </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}
export default RoomsPage
export const getServerSideProps = async () => {
    try {
        const {data} = await Axios.get('/rooms.json')
        return {
            props: {
                rooms: data
            }
        }
    } catch (err) {
        console.log(err)
    }

}