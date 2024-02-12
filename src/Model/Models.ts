
export type Transaction = {
    transactionId : string;
    amount: number
    status: string;
}

export type RawTransactionInfo = {
    transactionReference: string
    amount: number
    paymentStatus: string
    transactionStatus: string
    purposeOfTransaction: string
    paymentGatewayRequest: string
    valueStatus: string
    paymentGateway: string
    environment: string
    callbackUrl: string
    deleted: boolean
    userType: string
    okStatusReceivedAfterSendingWebhook: boolean
    noOfWebhookRelayAttempts: number
    merchantEmail: string
    userEmail: string
    settleThroughSubAccounts: boolean
    toSaveCard: boolean
    merchantUuid: string
    merchantName: string
    merchantPublicKey: string
}
export type PaymentGateWayRequest = {
    amount: string
    currency: string
    customer: Customer
    customizations: Customizations
    tx_ref: string
    redirect_url: string
    payment_options: string
    bank_transfer_options: BankTransferOptions
}

export type Customer = {
    email: string
    name: string
    phonenumber: string
}

export type Customizations = {
    title: string
    logo: string
    description: string
}

export type BankTransferOptions = {
    expires: number
}

export type CardPaymentModel = {
    PBFPubKey: string
    cardno: string
    cvv: string
    expirymonth: string
    expiryyear: string
    currency: string
    country: string
    amount: string
    email: string
    phonenumber: string
    firstname: string
    lastname: string
    IP: string
    txRef: string
    meta: any
    suggested_auth: string
    pin?: string
    billingzip: string
    billingcity: string
    billingaddress: string
    billingstate: string
    billingcountry: string
    redirect_url: string
    device_fingerprint: string
}

export type CardDetail = {
    cardNumber:string,
    exp:string,
    cvv:string,
    pin:string
}

export type CardResponseOne = {
    suggested_auth:string,
    amount: number,
    charged_amount: number,
    appfee: number,
    merchantfee: number,
    merchantbearsfee: number,
    is_live: number,
    customercandosubsequentnoauth: boolean,
    redirect: boolean
}

export type CardResponseTwo = {
    id: number
    txRef: string
    orderRef: string
    redirectUrl: string
    device_fingerprint: string
    cycle: string
    amount: number
    charged_amount: number
    appfee: number
    merchantfee: number
    merchantbearsfee: number
    chargeResponseCode: string
    chargeResponseMessage: string
    authModelUsed: string
    currency: string
    narration: string
    status: string
    vbvrespmessage: string
    authurl: string
    vbvrespcode: string
    paymentType: string
    paymentId: string
    fraud_status: string
    charge_type: string
    is_live: number
    createdAt: string
    updatedAt: string
    customerId: string
    customercandosubsequentnoauth: boolean
    redirect: boolean
}

export type OtpModel = {
    PBFPubKey: string,
    transaction_reference: string,
    otp: string
}

export type BankTransferModel = {
    amount: number
    PBFPubKey: string
    currency: string
    country: string
    email: string
    txRef: string
    meta: string | null
    payment_type: string
    ip?: string | null
    is_bank_transfer: boolean
    firstname: string
    lastname: string
}

export type  BankTransferResponseOne = {
    orderRef: string
    amount: number
    charged_amount: number
    appfee: number
    merchantfee: number
    merchantbearsfee: number
    is_live: number
    customercandosubsequentnoauth: boolean
    response_code: string
    response_message: string
    accountnumber: string
    bankname: string
    created_on: string
    expiry_date: string
    note: string
    redirect: boolean
}

