import {
    BankTransferOptions,
    Customer,
    Customizations,
    PaymentGateWayRequest,
    RawTransactionInfo
} from "../Model/Models";

class DefaultValueService{
    public getDefaultRawTransactionInfo():RawTransactionInfo{
        return {
            transactionReference: '',
            amount: 0,
            paymentStatus: '',
            transactionStatus: '',
            purposeOfTransaction: '',
            paymentGatewayRequest: '',
            valueStatus: '',
            paymentGateway: '',
            environment: '',
            callbackUrl: '',
            deleted: false,
            userType: '',
            okStatusReceivedAfterSendingWebhook: false,
            noOfWebhookRelayAttempts: 0,
            merchantEmail: '',
            userEmail: '',
            settleThroughSubAccounts: false,
            toSaveCard: false,
            merchantUuid: '',
            merchantName: '',
            merchantPublicKey: '',
        }
    }

    public getDefaultPaymentGatewayRequest():PaymentGateWayRequest{
        return {
            amount: '',
            currency: '',
            customer: this.getDefaultCustomer(),
            customizations: this.getCustomization(),
            tx_ref: '',
            redirect_url: '',
            payment_options: '',
            bank_transfer_options: this.getDefaultBankTransferOptions()
        }
    }

    public getDefaultCustomer():Customer{
        return {
            email: '',
            name: '',
            phonenumber: '',
        }
    }

    public getCustomization():Customizations{
        return {
            title: '',
            logo: '',
            description: '',
        }
    }

    public getDefaultBankTransferOptions():BankTransferOptions{
        return {
            expires: 0
        }
    }

}
export default new DefaultValueService();
