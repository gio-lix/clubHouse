import {FC} from "react"

interface IWhiteBox {
    width: number
    height: number
}
const WhiteBox: FC<IWhiteBox> = ({children, width,height}) => {
  return (
     <>
         <div className={`w-${width} h-${height} p-5  flex flex-col bg-white space-y-5 rounded`}>
             {children}
         </div>
     </>
  )
}
export default WhiteBox