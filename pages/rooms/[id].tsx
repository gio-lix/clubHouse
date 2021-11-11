import type {GetServerSideProps, NextPage} from "next";
import ProfileHeader from "@/components/page/profile/ProfileHeader";
import ButtonBack from "@/components/helperComponents/buttonBack";
import RoomBody from "@/components/page/rooomsPage/RoomBody";
import Axios from "../../config/axios";


const RoomPage: NextPage = ({room}: any) => {

    return (
        <div   className='bg-yellow-100 w-full h-full'>
            <div  className='w-full h-auto   p-10  '>
                <ProfileHeader fullName='mollie' />
                <div className='my-6'>
                    <ButtonBack href='rooms' title='All Rooms' />
                </div>
                <div className='flex justify-between my-6'>
                    <h2 className='text-xl font-semibold'>All Conversation</h2>
                </div>
            </div>
            <RoomBody title={room.title}/>
        </div>
    )
}
export default RoomPage

export const getServerSideProps = async (ctx: any) => {

    try {
        const {data} = await Axios.get(`/rooms.json`)
        const roomsId = ctx.query.id
        const room = data.find((obj: any) => obj._id === roomsId )
        return {
            props: {
                room
            }
        }
    } catch (err) {
        return {
            props: {
                rooms: []
            }
        }
    }

}