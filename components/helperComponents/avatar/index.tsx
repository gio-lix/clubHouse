import {FC} from "react"

interface IAvatar {
    src: string
    width: any
    height: any
    isVoice?: any
}

const Avatar: FC<IAvatar> = ({src, height, isVoice, width}) => {
    return (
        <>
            <div
                className='bg-cover bg-no-repeat bg-center rounded-full bg-indigo-50'
                style={{width, height, backgroundImage: `url(${src})`}}>
            </div>
        </>
    )
}
export default Avatar