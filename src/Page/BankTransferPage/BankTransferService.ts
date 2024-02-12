import {BankTransferModel, PaymentGateWayRequest, RawTransactionInfo} from "../../Model/Models";

class BankTransferService{

    initializeTransaction(raw:RawTransactionInfo, pay:PaymentGateWayRequest){

        const bankTransferModel:BankTransferModel = {
            amount: raw.amount,
            PBFPubKey: raw.merchantPublicKey,
            currency: "NGN",
            country: "NG",
            email: pay.customer.email,
            txRef: raw.transactionReference,
            meta: null,
            payment_type: "banktransfer",
            ip: null,
            is_bank_transfer: true,
            firstname: pay.customer.name,
            lastname: pay.customer.name
        }

        return bankTransferModel;
    }

    handleCopy(text:string):void{
        navigator.clipboard.writeText(text)
            .then(()=>{
                console.log("copy successful")
            })
    }

}
export default new BankTransferService();
