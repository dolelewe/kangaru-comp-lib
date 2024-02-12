import Icons from "../Icons";
import ActionButton from "../UI/ActionButton/ActionButton";
import {useNavigate} from "react-router-dom"
import style from "./FinalStatus.module.css"
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
            <div className={style.img_container}>
                <img src={successGif} alt={"success transaction"} className={style.img}/>
                <h3 className={style.h3}>Payment Successful</h3>
                <p className={style.p}>Your order has been confirmed and will be processed by the merchant</p>
            </div>
            <ActionButton text={"Done"} type={"button"} clickEvent={()=>("")} validity={false}/>
        </div>
    )
}


const Failed=()=>{
    const {failedGif} = Icons;
    return(
        <div>
            <div className={style.img_container}>
                <img src={failedGif} alt={"success transaction"} className={style.img}/>
                <h3 className={style.h3}>Payment Failed</h3>
                <p className={style.p}>Your transaction failed due to insufficeint funds</p>
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
        <ul className={style.option_ul}>
            <li onClick={()=>handleChoiceMade('card')}> <div className={style.flex}><img src={Icons['card']} alt={"this is your choice icon card"}/>Try Another Debit or Credit Card</div></li>
            <li onClick={()=>handleChoiceMade('transfer')}> <div className={style.flex}><img src={Icons['transfer']} alt={"this is your choice icon bank transfer"}/>Try Another Bank Transfer</div></li>
            <li onClick={()=>handleChoiceMade('bank')}> <div className={style.flex}><img src={Icons['bank']} alt={"this is your choice icon internet banking"}/>Try Internet Banking</div></li>
            <li onClick={()=>handleChoiceMade('ussd')}> <div className={style.flex}><img src={Icons['ussd']} alt={"this is your choice icon ussd"}/>Try USSD</div></li>
        </ul>
    );
}

export default FinalStatus;
