import React, {FC, useContext, useEffect, useRef, useState} from "react"
import WhiteBox from "@/components/helperComponents/whitebox";
import Avatar from "@/components/helperComponents/avatar";
import {BsArrowDown} from "react-icons/bs";
import {MainContext} from "../../../pages";

interface IChooseAvatar {

}

const ChooseAvatar: FC<IChooseAvatar> = () => {
    const {onNextStep} = useContext(MainContext)
    const [avatarUrl, setAvatarUrl] = useState<string>('');
    const inputFileRef = React.useRef<HTMLInputElement>(null)

    const handleChangeImage = (event: Event): void => {
        const file = (event.target as any).files[0]
        const imageUrl = URL.createObjectURL(file)
        setAvatarUrl(imageUrl)
    }
    useEffect(() => {
        if (inputFileRef.current) {
            inputFileRef.current.addEventListener<any>('change', handleChangeImage)
        }
    },[])
    return (
        <>
            <WhiteBox width={96} height={80}>
                <div className='flex flex-col space-y-1'>
                    <p className='text-base text-gray-600 text-center'>Ok, <b>mollie andersson</b></p>
                    <p className='text-xs text-center text-gray-600'>Howe this photo</p>
                </div>
                <div className='w-full h-full flex flex-col justify-around items-center space-y-3 my-4'>
                    {/* photos */}
                        <Avatar src={avatarUrl} width="120px" height="120px"/>
                    <label className='text-xs text-gray-600 cursor-pointer' htmlFor="image">Choose a different photo </label>
                    <input type="file" id="image" ref={inputFileRef} hidden/>
                    <button
                        onClick={onNextStep}
                        className={`bg-indigo-500 h-8 w-20 mt-3  flex items-center justify-center space-x-3 text-white rounded-xl`}>
                        <p className='text-sm '>Next</p>
                        <BsArrowDown className='w-4  h-4 transform -rotate-90 '/>
                    </button>
                </div>
            </WhiteBox>
        </>
    )
}
export default ChooseAvatar