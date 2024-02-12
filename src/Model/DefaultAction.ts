import {PaymentGateWayRequest, RawTransactionInfo} from "./Models";

type DefaultAction = {type: "UPDATE_RAW_TRANSACTION_INFO", payload: RawTransactionInfo } |
    {type: "UPDATE_PAYMENT_GATEWAY_REQUEST", payload: PaymentGateWayRequest } |
    {type: "TRANSACTION_STATUS", payload : "failed" | "success" | ""}

export default DefaultAction;
