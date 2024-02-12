import {
    BankTransferResponseOne
} from "../../Model/Models";
import Icons from "../../components/Icons";
import style from "./BankTransferPage.module.css"
import ActionButton from "../../components/UI/ActionButton/ActionButton";
import {useContext, useEffect, useState} from "react";
import BankTransferService from "./BankTransferService";
import axiosCalls from "../../API/AxiosCalls";
import {DefaultContext} from "../../context/DefaultContext";

const BankTransferPage=()=>{
    const {state} = useContext(DefaultContext)
    const bankService = BankTransferService;
    const endpointService = axiosCalls;
    const [responseOne, setResponseOne] = useState<BankTransferResponseOne | null>(null)

    useEffect(()=>{
        const payload = bankService.initializeTransaction(state.rawTransactionInfo,state.paymentGatewayRequest)
        endpointService.initializeTransaction(payload,payload.PBFPubKey)
            .then((res)=>{
                console.log("this is the response for charge bank transfer")
                console.log(res)

                if(res.status === 200){
                    setResponseOne(res.data.data)
                }
            })
    },[])
    return(
        <div>
            {responseOne !== null && <>
            <h3 className={style.bt_head}>Transfer to the account below</h3>

            <div className={style.bt_inner_container}>
                <p>Bank <b>{responseOne.bankname}</b></p>
                <p>Account Number</p>
                <h4 className={style.bt_ac}>{responseOne.accountnumber} <img onClick={()=>{bankService.handleCopy(responseOne.accountnumber)}} src={Icons.copy} alt={"copy icon"}/></h4>
                <p>Account name</p>
                <h5>{responseOne.note}</h5>
            </div>

            <ActionButton
                text={"I have made the transfer"}
                type={"button"} clickEvent={()=> console.log("button clicked")}
                validity={false}/>

        </>}
        </div>
    )
}
export default BankTransferPage;
