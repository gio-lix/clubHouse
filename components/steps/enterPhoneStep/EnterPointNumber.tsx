import {FC, useState} from "react"
import NumberFormat from 'react-number-format';
import Button from "@/components/helperComponents/button";
import WhiteBox from "@/components/helperComponents/whitebox";

type IEnterPointNumber = {
    formattedValue: string,
    value: string
}

const EnterPointNumber = () => {
    const [values, setValues] = useState<IEnterPointNumber>({} as IEnterPointNumber);
    const nextDisabled = !values.formattedValue || values.formattedValue.includes('_')

    console.log(values)

    return (
        <>
            <WhiteBox width={72} height={60}>
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
                    <Button width={44} text='send' disabled={nextDisabled}/>
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