import Icons from "../Icons";
import ActionButton from "../UI/ActionButton/ActionButton";
import {useNavigate} from "react-router-dom"
import "./FinalStatus.css"
import {useContext} from "react";
import {DefaultContext} from "../../context/DefaultContext";


const FinalStatus=()=>{
    const {state} = useContext(DefaultContext)
    return(
        <>
            {state.transactionStatus == "success" && <Success/>}
            {state.transactionStatus == "failed" && <Failed/>}
        </>
    )
}

const Success=()=>{
    const {successGif} = Icons;
    return(
        <div>
            <div className={"fs_img_container"}>
                <img src={successGif} alt={"success transaction"} className={"fs_img"}/>
                <h3 className={"fs_h3"}>Payment Successful</h3>
                <p className={"fs_p"}>Your order has been confirmed and will be processed by the merchant</p>
            </div>
            <ActionButton text={"Done"} type={"button"} clickEvent={()=>("")} validity={false}/>
        </div>
    )
}


const Failed=()=>{
    const {failedGif} = Icons;
    return(
        <div>
            <div className={"fs_img_container"}>
                <img src={failedGif} alt={"success transaction"} className={"fs_img"}/>
                <h3 className={"fs_h3"}>Payment Failed</h3>
                <p className={"fs_p"}>Your transaction failed due to insufficeint funds</p>
            </div>
            <RetryOptions/>
            <ActionButton text={"Done"} type={"button"} clickEvent={()=>("")} validity={false}/>
        </div>
    )
}

const RetryOptions=()=>{
    const {update} = useContext(DefaultContext)
     const navigate = useNavigate();
    const handleChoiceMade=(choice:string):void=>{
        update({type:"TRANSACTION_STATUS",payload:""})
        navigate("/"+choice)
    }

    return (
        <ul className={"fs_option_ul"}>
            <li onClick={()=>handleChoiceMade('card')}> <div className={"fs_flex"}><img src={Icons['card']} alt={"this is your choice icon card"}/>Try Another Debit or Credit Card</div></li>
            <li onClick={()=>handleChoiceMade('transfer')}> <div className={"fs_flex"}><img src={Icons['transfer']} alt={"this is your choice icon bank transfer"}/>Try Another Bank Transfer</div></li>
            <li onClick={()=>handleChoiceMade('bank')}> <div className={"fs_flex"}><img src={Icons['bank']} alt={"this is your choice icon internet banking"}/>Try Internet Banking</div></li>
            <li onClick={()=>handleChoiceMade('ussd')}> <div className={"fs_flex"}><img src={Icons['ussd']} alt={"this is your choice icon ussd"}/>Try USSD</div></li>
        </ul>
    );
}

export default FinalStatus;
