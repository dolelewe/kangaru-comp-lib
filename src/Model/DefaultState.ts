import {PaymentGateWayRequest, RawTransactionInfo} from "./Models";

type DefaultState = {
    rawTransactionInfo: RawTransactionInfo,
    paymentGatewayRequest: PaymentGateWayRequest,
    transactionStatus: "success" | "failed" | ""
}
export default DefaultState;
