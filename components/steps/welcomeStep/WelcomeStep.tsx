import {FC} from "react"
import {MdFrontHand} from 'react-icons/md'
import Button from "@/components/helperComponents/button";
import WhiteBox from "@/components/helperComponents/whitebox";

interface IWelcomeStep {

}
const WelcomeStep: FC<IWelcomeStep> = () => {
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
                <Button width={52} text='get your username' />
                <p className='text-xs mt-2 text-center'>have a invite text? sign in</p>

            </div>
        </WhiteBox>

     </>
  )
}
export default WelcomeStep