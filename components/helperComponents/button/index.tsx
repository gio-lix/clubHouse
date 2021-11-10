import React, {FC} from "react"
import {BsArrowDown} from "react-icons/bs";

interface IButton {
    width: number
    text: string
    disabled?: boolean
    Icon?: any
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
    className?: string
}

const Button: FC<IButton> = ({
                                 width,
                                 Icon,
                                 onClick,
                                 className,
                                 text,
                                 disabled
                             }) => {
    console.log(disabled)

    return (
        <>
            <button
                disabled={disabled}
                onClick={onClick}
                type='button'
                className={`${disabled ? 'bg-indigo-500 bg-opacity-50' : 'bg-indigo-500'} w-${width} h-8  flex items-center justify-center space-x-3 text-white rounded-2xl`}>
                {Icon && <Icon/>}
                <p className='text-sm'>{text}</p>
                <BsArrowDown className='w-4 h-4 transform -rotate-90 '/>
            </button>
        </>
    )
}
export default Button