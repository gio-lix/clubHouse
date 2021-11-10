import type {NextPage} from 'next'
import Layout from "@/components/Layout";
import WelcomeStep from "@/components/steps/welcomeStep/WelcomeStep";
import EnterPointNumber from "@/components/steps/enterPhoneStep/EnterPointNumber";
import {useState} from "react";
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



const Home: NextPage = () => {
    const [step, setStep] = useState<number>(0);
    const Steps = StepsComponents[5]
    return (
        <Layout title='enter'>
            <Steps />
        </Layout>
    )
}

export default Home
