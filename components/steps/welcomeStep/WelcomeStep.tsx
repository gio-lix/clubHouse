import React, {FC, useContext} from "react"
import {MdFrontHand} from 'react-icons/md'
import WhiteBox from "@/components/helperComponents/whitebox";
import {MainContext} from "../../../pages";
import {BsArrowDown} from "react-icons/bs";

interface IWelcomeStep {

}
const WelcomeStep: FC<IWelcomeStep> = () => {
    const {onNextStep} = useContext(MainContext)
  return (
     <>
        <WhiteBox width={96} height={60} >
            <div className='flex justify-center space-x-3 '>
                <MdFrontHand  className='w-5 h-5 text-yellow-500 transform -rotate-45  '/>
                <h3 className='text-base font-semibold text-center'>Welcome to clubhouse</h3>
            </div>
            <p className='text-sm text-center font-Nunito font-light text-gray-500'>
                We are working hard to get Clubhouse for everyone! white we are wrap
                up  the finishing youtube, we're adding people gradually  to make sure nothing break.
            </p>
            <div className='flex flex-col items-center justify-center'>
                <button
                    onClick={() => onNextStep()}
                    className={`bg-indigo-500 h-8 w-44  flex items-center justify-center space-x-3 text-white rounded-xl`}>
                    <p className='text-sm '>get your username</p>
                    <BsArrowDown className='w-4  h-4 transform -rotate-90 '/>
                </button>
                <p className='text-xs mt-2 text-center'>have a invite text? sign in</p>

            </div>
        </WhiteBox>

     </>
  )
}
export default WelcomeStep