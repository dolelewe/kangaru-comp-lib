import {useParams, useNavigate} from "react-router-dom"
import React,{useContext, useEffect} from "react";
import AxiosCalls from "../../API/AxiosCalls";
import {PaymentGateWayRequest, RawTransactionInfo} from "../../Model/Models";
import {DefaultContext} from "../../context/DefaultContext";
const PayPage=()=>{
    const {update} = useContext(DefaultContext);
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        AxiosCalls.fetchDetailsOfTransaction(id || "")
            .then(response=>{
                if(response.status === 200){
                    const rawTransactionInfo:RawTransactionInfo = response.data.data
                    const paymentGatewayRequest:PaymentGateWayRequest = JSON.parse(rawTransactionInfo.paymentGatewayRequest)
                    update({type:"UPDATE_PAYMENT_GATEWAY_REQUEST",payload: paymentGatewayRequest})
                    update({type:"UPDATE_RAW_TRANSACTION_INFO",payload: rawTransactionInfo})
                    navigate("/card")
                }
            })
    },[])
    return (<div></div>)
}
export default PayPage
