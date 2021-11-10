import React, {FC, useContext, useState} from "react"
import WhiteBox from "@/components/helperComponents/whitebox";
import {BsArrowDown} from "react-icons/bs";
import {MainContext} from "../../../pages";

interface IEnterNameStep {

}

const EnterNameStep: FC<IEnterNameStep> = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const {onNextStep} = useContext(MainContext)

    const nextDisabled = !inputValue

    const handleChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)

    }

    const onClickNext = () => {
        onNextStep()
    }

    return (
        <>
            <div>
                <p className='text-base text-gray-500 font-semibold text-center'>Whats your name?</p>
                <p className='text-sm text-gray-400 font-semibold text-center'>People use real names on ClubHouse :) Thanks!</p>
            </div>
            <WhiteBox width={96} height={60}>
                <div className='h-full w-full flex flex-col items-center justify-evenly p-6'>
                    <div className='border-2 border-gray-300 rounded-2xl w-60 h-10 p-1.5'>
                        <input onChange={handleChangeEvent} value={inputValue} type="text" className='w-full h-full outline-none' placeholder='Enter name'/>
                    </div>
                    <button
                        disabled={nextDisabled}
                        onClick={onClickNext}
                        className={`${!nextDisabled ? 'bg-indigo-500' : 'bg-opacity-40 bg-indigo-500'}  h-8 w-28 mt-3  flex items-center justify-center space-x-3 text-white rounded-xl`}>
                        <p className='text-sm '>Next</p>
                        <BsArrowDown className='w-4  h-4 transform -rotate-90 '/>
                    </button>
                </div>
            </WhiteBox>
        </>
    )
}
export default EnterNameStep