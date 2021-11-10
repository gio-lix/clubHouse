import React, {FC, useContext, useState} from "react"
import NumberFormat from 'react-number-format';
import Button from "@/components/helperComponents/button";
import WhiteBox from "@/components/helperComponents/whitebox";
import {ImTwitter} from "react-icons/im";
import {BsArrowDown} from "react-icons/bs";
import {MainContext} from "../../../pages";

type IEnterPointNumber = {
    formattedValue: string,
    value: string
}

const EnterPointNumber = () => {
    const [values, setValues] = useState<IEnterPointNumber>({} as IEnterPointNumber);
    const nextDisabled = !values.formattedValue || values.formattedValue.includes('_')
    const {onNextStep} = useContext(MainContext)


    return (
        <>
            <WhiteBox width={52} height={60}>
                <div className='w-full px-2 flex justify-center border border-gray-400'>
                    <NumberFormat
                        className='outline-none w-full '
                        format="+# (###) ## ## ##"
                        mask="_"
                        value={values.value}
                        onValueChange={({formattedValue, value}) => setValues({formattedValue, value})}
                        placeholder='+595 55 55 55'
                    />
                </div>
                <div className='flex justify-center'>
                    <button
                        disabled={nextDisabled}
                        onClick={() => onNextStep()}
                        className={`${nextDisabled ? 'bg-indigo-500 bg-opacity-50' : 'bg-indigo-500'}  h-8 w-20 mt-3  flex items-center justify-center space-x-3 text-white rounded-xl`}>
                        <p className='text-sm '>Next</p>
                        <BsArrowDown className='w-4  h-4 transform -rotate-90 '/>
                    </button>
                </div>

                <p className='text-sm text-center font-Nunito font-light text-gray-400 text-xs'>
                    By entering your number, you're agreeing to uor terms of services,
                    and Privacy Services, Thanks!
                </p>
            </WhiteBox>
        </>
    )
}
export default EnterPointNumber