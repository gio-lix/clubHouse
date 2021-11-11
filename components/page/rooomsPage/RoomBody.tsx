import {FC} from "react"

interface IRoomBody {
    title: string

}
const RoomBody: FC<IRoomBody> = ({title}) => {
  return (
     <>
         <div className='w-full h-96 bg-white border p-5 border-gray-400 rounded-3xl'>
            <div className='flex justify-between '>
                <p className='text-2xl'>{title}</p>
                <button className='text-red-400 w-36 rounded-2xl border bg-gray-100 hover:bg-gray-200'> leave quality </button>
            </div>
         </div>
     </>
  )
}
export default RoomBody