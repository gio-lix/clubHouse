import {FC} from "react"
import {FaUserFriends} from 'react-icons/fa'
import {RiMessage2Fill} from 'react-icons/ri'
import Image from "next/image";

interface IConversationRooms {
    title: string
    speakCount: number
    guestCount: number
    avatarUrl: string[] | string
    guest: string[]
}

const ConversationRooms: FC<IConversationRooms> = ({avatarUrl, guestCount, guest, title, speakCount}) => {
    return (
        <>

            <div className='w-auto h-full flex flex-col items-center md:items-start justify-center   px-6 md:p-2'>
                <div className='flex flex-col '>
                    <p className='w-full '>{title}</p>
                    <div className='flex space-x-4 bg-indigo1500'>
                        <div className='w-20 h-20  '>

                            <div className='relative w-12 h-12 bg-indigo-500  rounded-2xl  transform translate-y-2'>
                                <Image src={avatarUrl[0]} layout='fill' className='absolute rounded-2xl'
                                       alt='logo'/>
                            </div>
                            {avatarUrl[1] && (
                                <div className='w-10 h-10 bg-indigo-500  rounded-2xl  ml-8 relative -translate-y-3'>
                                    <Image src={avatarUrl[1]} layout='fill' className='absolute rounded-2xl'
                                           alt='logo'/>
                                </div>
                            )}

                        </div>
                        <div className='flex flex-col space-y-3'>
                            <div className='flex flex-col'>
                                <ul>
                                    {guest && guest.map((guest, index) => (
                                        <li className='text-gray-600 text-sm whitespace-nowrap' key={index}>{guest}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className='flex items-center space-x-4'>
                                <button className='flex space-x-1 items-center'>
                                    <span className='text-gray-500'>{guestCount}</span>
                                    <FaUserFriends className='w-5 h-5 text-gray-400'/>
                                </button>
                                <button className='ml-5 flex space-x-1 items-center'>
                                    <span className='text-gray-500'>{speakCount}</span>
                                    <RiMessage2Fill className='w-5 h-5 text-gray-400'/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default ConversationRooms