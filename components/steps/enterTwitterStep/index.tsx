import {FC} from "react"
import WhiteBox from "@/components/helperComponents/whitebox";
import Button from "@/components/helperComponents/button";
import {ImTwitter} from 'react-icons/im'

interface IEnterTwitterStep {

}
const EnterTwitterStep: FC<IEnterTwitterStep> = () => {
  return (
     <>
        <WhiteBox width={80} height={72}>
            <div className='w-full h-full flex flex-col items-center justify-around'>
                <p className='text-sm text-center font-Nunito font-light text-gray-500'>Do you want import info from Twitter?</p>
                <div className='w-20 h-20 rounded-2xl bg-gray-300 flex justify-center items-center '>
                    <p className='text-2xl'>AD</p>
                </div>
                <Button width={52} text='Import from Twitter' Icon={ImTwitter}/>
                <p  className='text-xs text-center font-light text-gray-700'>Enter My info manually</p>
            </div>
        </WhiteBox>
     </>
  )
}
export default EnterTwitterStep