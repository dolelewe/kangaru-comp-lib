
import React,{useState} from "react";
import CardStage1 from "./CardStage1/CardStage1";
import CardStage2 from "./CardStage2/CardStage2";
import {LoadingPage} from "../../components/UI/LoadingComp/LoadingComp";
import "./CardPage.css"
const CardPage=()=>{
    const [stage, setStage] = useState(1);
    const [otpMessage, setOtpMessage] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)

    const handleOtpMessage=(msg:string)=>{
        setOtpMessage(msg);
        setStage(2)
    }

    return (<div className={"cp_background"}>
        {(stage==1) && <CardStage1
            updateMessage={handleOtpMessage}
            loader={setLoading}
        />}
        {(stage==2) && <CardStage2 otpMessage={otpMessage} loader={setLoading}/>}
        {loading && <LoadingPage/>}

    </div>)
}
export default CardPage;
