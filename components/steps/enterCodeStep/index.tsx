import React, {FC, useState} from "react"
import WhiteBox from "@/components/helperComponents/whitebox";
import StepInfoProps from "@/components/stepInfo";
import {AiOutlineReload} from 'react-icons/ai'
import {BsArrowDown} from "react-icons/bs";
import Axios from "../../../config/axios";
import {useRouter} from "next/router";

interface IEnterCodeStep {

}

const EnterCodeStep: FC<IEnterCodeStep> = () => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [codes, setCodes] = useState(['', '', '', '',]);
    const nextDisabled = codes.some((v) => !v)


    const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const index = Number(e.target.getAttribute("id"))
        const value = e.target.value

        setCodes((prev) => {
            const newArr = [...prev]
            newArr[index] = value
            return newArr
        })
        if (e.target.nextSibling) {
            (e.target.nextSibling as HTMLInputElement).focus()
        }
    }
    const onSubmit = async () => {
        try {
            setIsLoading(true)
            await Axios.get('/todos')
            router.push('/rooms')
        } catch (err) {
            alert('error during fetching!')
        }
        setIsLoading(false)
    }
    return (
        <>
            {!isLoading ? (
                <WhiteBox width={60} height={44}>
                    <div className='w-full h-full '>
                        <div>
                            <p className='text-sm font-semibold text-center'>Enter your active code</p>
                        </div>
                        <div className='flex justify-center items-center space-x-2 mt-3'>
                            {codes.map((item, index) => (
                                <input key={index} id={String(index)} maxLength={1} value={item} onChange={handleChangeValue} type="tel"
                                       placeholder='X'
                                       className='w-10 h-10 text-center outline-none  border border-gray-600 '/>
                            ))}
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button
                            disabled={nextDisabled} onClick={onSubmit}
                            className={`${nextDisabled ? 'bg-indigo-500 bg-opacity-50' : 'bg-indigo-500'} h-8 w-20  flex items-center justify-center space-x-3 text-white rounded-xl`}>
                            <p className='text-sm '>sent</p>
                            <BsArrowDown className='w-4  h-4 transform -rotate-90 '/>
                        </button>
                    </div>
                </WhiteBox>
            ) : (
                <div className='bg-opacity-100 w-96 h-96 flex justify-center items-center '>
                    <StepInfoProps title='Active Props' Icon={AiOutlineReload}/>
                </div>
            )}

        </>
    )
}
export default EnterCodeStep