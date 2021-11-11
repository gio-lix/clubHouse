import {FC} from "react"
import {BsArrowLeft, BsThreeDotsVertical} from "react-icons/bs";
import {useRouter} from "next/router";
import Image from "next/image";
import ProfileHeader from "@/components/page/profile/ProfileHeader";
import Link from 'next/link'
import ButtonBack from "@/components/helperComponents/buttonBack";

interface IProfile {
    fullName: string
    userName: string
    avatarUrl?: any
    about: string
}
const Profile: FC<IProfile> = ({userName,fullName,about,avatarUrl}) => {
    const router = useRouter()
    const {id} = router.query
  return (
     <>
         <div className='w-full h-screen border border-black p-10 bg-yellow-100 '>

             <ProfileHeader fullName={fullName} />
            <ButtonBack href='rooms' title='back' />

             <div className='flex items-center justify-between my-5'>
                 <div className='flex items-center space-x-4'>
                     <div className='w-20 h-20 bg-gray-100 border border-gray-200 relative '>
                         <Image src={avatarUrl} layout='fill' className='absolute'  alt='image'/>
                     </div>
                     <div>
                         <p>{fullName}</p>
                         <p className='text-gray-600'>@{userName}</p>
                     </div>
                     <button className='border-2 w-20 hover:text-gray-800 border-gray-300 rounded bg-white text-gray-600  '>Follow</button>
                     <BsThreeDotsVertical className='w-5 h-5 text-gray-400'/>
                 </div>
                 <div className='flex space-x-4'>
                     <div className='w-20 h-20 flex items-center justify-center bg-white border border-gray-700 '>
                         <div className='flex flex-col items-center'>
                             <p className='text-3xl font-semibold'>2</p>
                             <p className=' text-gray-400'>Following</p>
                         </div>
                     </div>
                     <div className='w-20 h-20 flex items-center justify-center bg-white border border-gray-700 '>
                         <div className='flex flex-col items-center'>
                             <p className='text-3xl font-semibold'>0</p>
                             <p className=' text-gray-400'>Following</p>
                         </div>
                     </div>
                 </div>
             </div>
             <p className='text-gray-600'>{about}</p>
             <p className='text-gray-600'> consectetur adipisicing elit. Earum, facilis?</p>
         </div>
     </>
  )
}
export default Profile