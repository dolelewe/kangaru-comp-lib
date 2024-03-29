import "./OrderSummary.css"
import React, {useContext} from "react";
import {DefaultContext} from "../../context/DefaultContext";
import {OrderSummaryLoading} from "../UI/LoadingComp/LoadingComp";

const OrderSummary=()=>{
    const {state} = useContext(DefaultContext)

    const orderInfo = {
        merchant: state.rawTransactionInfo?.merchantName,
        description: state.paymentGatewayRequest?.customizations.description,
        amount: state.rawTransactionInfo?.amount,
        charge: 0.0,
        total: state.rawTransactionInfo?.amount
    }

    return (<div>
        <h4 className={"os_order_title"}>Order Summary</h4>

        {
            orderInfo.total > 0 && <ul className={"os_order_ul"}>
                <li><span>Merchant Name</span> <span>{orderInfo.merchant}</span></li>
                <li><span>{orderInfo.description}</span> <span>N {orderInfo.amount}</span></li>
                <li><span>Charges</span> <span>N {orderInfo.charge}</span></li>
                <li><span className={"os_bold_span"}>Total Amount</span> <span className={"os_bold_span"}>N {orderInfo.total}</span></li>
            </ul>
        }
        {
            orderInfo.total === 0 && <OrderSummaryLoading/>
        }

    </div>)
}



export default OrderSummary;
