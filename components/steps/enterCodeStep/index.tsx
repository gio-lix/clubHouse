import React, {FC, useState} from "react"
import WhiteBox from "@/components/helperComponents/whitebox";

interface IEnterCodeStep {

}
const EnterCodeStep: FC<IEnterCodeStep> = () => {
    const [codes, setCodes] = useState([]);
    const handleChangeValue = (e: any) => {
        const id  = Number(e.target.getAttribute("id"))
        const value = e.target.value
        console.log(id)
    }
    return (
     <>
        <WhiteBox width={60} height={44}>
            <div className='w-full h-full '>
                <div>
                    <p className='text-sm font-semibold text-center'>Enter your active code</p>
                </div>
                <div className='flex justify-center items-center space-x-2 mt-3'>
                        <input id="1" maxLength={1} value={codes[0]} onChange={handleChangeValue} type="tel" placeholder='X' className='w-10 h-10 text-center outline-none  border border-gray-600 '/>
                        <input id="2" maxLength={1} value={codes[1]} onChange={handleChangeValue} type="tel" placeholder='X' className='w-10 h-10 text-center outline-none  border border-gray-600 '/>
                        <input id="3" maxLength={1} value={codes[2]} onChange={handleChangeValue} type="tel" placeholder='X' className='w-10 h-10 text-center outline-none  border border-gray-600 '/>
                        <input id="4" maxLength={1} value={codes[3]} onChange={handleChangeValue} type="tel" placeholder='X' className='w-10 h-10 text-center outline-none  border border-gray-600 '/>
                </div>

            </div>
        </WhiteBox>
     </>
  )
}
export default EnterCodeStep