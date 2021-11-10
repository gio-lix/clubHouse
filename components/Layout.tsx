import {FC} from "react"
import Head from "next/head";

interface ILayout {
    title: string,
    keywords?: string
    description?: string
    hiddenSmile?: boolean
}

const Layout: FC<ILayout> = ({title,hiddenSmile ,description, children, keywords}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='keywords' content={keywords}/>
                <meta name='description' content={description}/>
            </Head>
            <div className={`w-full h-screen ${hiddenSmile ? 'bg-opacity-100' : 'bg-yellow-100'}  flex items-center justify-center`}>
                <div className={`w-auto max-w-lg h-auto max-h-lg bg-white ${!hiddenSmile && 'shadow-2xl'}  rounded`}>
                    {children}
                </div>
            </div>
        </>
    )
}
export default Layout
Layout.defaultProps = {
    title: 'ClubHouse',
    keywords: 'ClubHouse For Everyone',
    description: 'ClubHouse For Everyone'
}