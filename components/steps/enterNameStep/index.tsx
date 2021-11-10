import {FC} from "react"
import WhiteBox from "@/components/helperComponents/whitebox";
import Button from "@/components/helperComponents/button";

interface IEnterNameStep {

}

const EnterNameStep: FC<IEnterNameStep> = () => {
    return (
        <>
            <div>
                <p className='text-base text-gray-500 font-semibold text-center'>Whats your name?</p>
                <p className='text-sm text-gray-400 font-semibold text-center'>People use real names on ClubHouse :) Thanks!</p>
            </div>
            <WhiteBox width={96} height={60}>
                <div className='h-full w-full flex flex-col items-center justify-evenly'>
                    <div className='border-2 border-gray-300 rounded-2xl w-60 h-10 p-1.5'>
                        <input type="text" className='w-full h-full outline-none' placeholder='Enter name'/>
                    </div>
                    <Button width={44} text='Next'/>
                </div>
            </WhiteBox>
        </>
    )
}
export default EnterNameStep