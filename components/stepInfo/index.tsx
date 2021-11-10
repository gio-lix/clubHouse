import {FC} from "react"


interface IStepInfoProps {
    title: string
    description?: string
    Icon: any
}
const StepInfoProps: FC<IStepInfoProps> = ({title,Icon}) => {
  return (
     <>
        <div className='flex flex-col justify-center items-center mt-3'>
            <Icon  className='animate-spin w-5 h-5'/>
            <p className='text-gray-400 '>{title}</p>
        </div>
     </>
  )
}
export default StepInfoProps