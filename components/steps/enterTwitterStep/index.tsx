import React, {FC, useContext} from "react"
import WhiteBox from "@/components/helperComponents/whitebox";
import {ImTwitter} from 'react-icons/im'
import {BsArrowDown} from "react-icons/bs";
import {MainContext} from "../../../pages";

interface IEnterTwitterStep {

}

const EnterTwitterStep: FC<IEnterTwitterStep> = () => {
    const {onNextStep} = useContext(MainContext)

    return (
        <>
            <WhiteBox width={80} height={72}>
                <div className='w-full h-full flex flex-col items-center justify-around'>
                    <p className='text-sm text-center font-Nunito font-light text-gray-500'>Do you want import info from
                        Twitter?</p>
                    <div className='w-20 h-20 rounded-2xl my-3 bg-gray-300 flex justify-center items-center '>
                        <p className='text-2xl'>AD</p>
                    </div>
                    <button
                        onClick={() => onNextStep()}
                        className={`bg-indigo-500 h-8 w-52 mt-3  flex items-center justify-center space-x-3 text-white rounded-xl`}>
                        <ImTwitter/>
                        <p className='text-sm '>Import from Twitter</p>
                        <BsArrowDown className='w-4  h-4 transform -rotate-90 '/>
                    </button>
                    <p className='text-xs text-center font-light text-gray-700'>Enter My info manually</p>
                </div>
            </WhiteBox>
        </>
    )
}
export default EnterTwitterStep