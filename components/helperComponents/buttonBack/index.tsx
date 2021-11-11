import {FC} from "react"
import Link from "next/link";
import {BsArrowLeft} from "react-icons/bs";

interface IButtonBack {
    href: string
    title: string
}
const ButtonBack: FC<IButtonBack> = ({href, title}) => {
  return (
     <>
         <Link href={`/${href}`}>
             <div className='flex items-center space-x-3'>
                 <BsArrowLeft/>
                 <button className='font-semibold text-sm'>{title}</button>
             </div>
         </Link>
     </>
  )
}
export default ButtonBack