import React, {FC, useEffect, useRef, useState} from "react"
import WhiteBox from "@/components/helperComponents/whitebox";
import Button from "@/components/helperComponents/button";
import Avatar from "@/components/helperComponents/avatar";

interface IChooseAvatar {

}

const ChooseAvatar: FC<IChooseAvatar> = () => {
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
            <WhiteBox width={72} height={80}>
                <div className='flex flex-col space-y-1'>
                    <p className='text-base text-gray-600 text-center'>Ok, <b>mollie andersson</b></p>
                    <p className='text-xs text-center text-gray-600'>Howe this photo</p>
                </div>
                <div className='w-full h-full flex flex-col justify-around items-center space-y-3 my-4'>
                    {/* photos */}
                        <Avatar src={avatarUrl} width="120px" height="120px"/>
                    <label className='text-xs text-gray-600 cursor-pointer' htmlFor="image">Choose a different photo </label>
                    <input type="file" id="image" ref={inputFileRef} hidden/>
                    <Button width={28} text='sent'/>
                </div>
            </WhiteBox>
        </>
    )
}
export default ChooseAvatar