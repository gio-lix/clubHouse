import type {NextPage} from 'next'
import Layout from "@/components/Layout";
import WelcomeStep from "@/components/steps/welcomeStep/WelcomeStep";
import EnterPointNumber from "@/components/steps/enterPhoneStep/EnterPointNumber";
import React, {useState} from "react";
import EnterNameStep from "@/components/steps/enterNameStep";
import EnterTwitterStep from "@/components/steps/enterTwitterStep";
import ChooseAvatar from "@/components/steps/chooseAvatarStep";
import EnterCodeStep from "@/components/steps/enterCodeStep";




const StepsComponents: any = {
    0: WelcomeStep,
    1: EnterNameStep,
    2: ChooseAvatar,
    3: EnterTwitterStep,
    4: EnterPointNumber,
    5: EnterCodeStep
}
type MainContextProps = {
    onNextStep: () => void
    step: number
}
export const MainContext = React.createContext<MainContextProps>({} as MainContextProps)

const Home: NextPage = () => {
    const [step, setStep] = useState<number>(0);
    const Steps = StepsComponents[step]

    const onNextStep = () => {
        setStep((prev) => prev + 1)
    }
    return (
        <Layout title='enter'>
            <MainContext.Provider value={{step, onNextStep}}>
                <Steps />
            </MainContext.Provider>
        </Layout>
    )
}

export default Home
