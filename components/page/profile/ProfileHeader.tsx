import {FC} from "react"
import {useRouter} from "next/router";

interface IProfileHeader {
    fullName: string
}
const ProfileHeader: FC<IProfileHeader> = ({fullName}) => {
    const router = useRouter()
  return (
     <>
         <div className='flex justify-between mb-10'>
             <button onClick={() => router.push('/')}>
                 <p>Clubhouse</p>
             </button>
             <div className='flex space-x-2'>
                 <button onClick={() => router.push('/profile/1')}>
                     {fullName}
                 </button>
                 <div className='w-10 h-10 border border-black bg-gray-100 '>

                 </div>
             </div>
         </div>
     </>
  )
}
export default ProfileHeader