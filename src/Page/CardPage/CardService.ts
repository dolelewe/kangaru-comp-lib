import {
    CardDetail,
    CardPaymentModel,
    CardResponseOne, OtpModel,
    PaymentGateWayRequest,
    RawTransactionInfo
} from "../../Model/Models";
import AxiosCalls from "../../API/AxiosCalls";
import DefaultAction from "../../Model/DefaultAction";
import ExternalLinkModel from "../../Model/ExternalLinkModel";

class CardService{
    private call = AxiosCalls;

    public getDefaultCardDetail():CardDetail{
        return {cardNumber:"",exp:"",cvv:"",pin:""};
    }
    public setupCardPaymentModel(rawTransactionInfo:RawTransactionInfo,paymentGateWayRequest:PaymentGateWayRequest ):CardPaymentModel {
        return {
            PBFPubKey: rawTransactionInfo.merchantPublicKey,
            cardno: "",
            cvv: "",
            expirymonth: "",
            expiryyear: "",
            currency: "NGN",
            country: "NG",
            amount: rawTransactionInfo.amount.toString(),
            email: paymentGateWayRequest.customer.email,
            phonenumber: paymentGateWayRequest.customer.phonenumber,
            firstname: paymentGateWayRequest.customer.name,
            lastname: paymentGateWayRequest.customer.name,
            IP: "",
            txRef: paymentGateWayRequest.tx_ref,
            meta: null,
            suggested_auth: "",
            pin: "",
            billingzip: "",
            billingcity: "",
            billingaddress: "",
            billingstate: "",
            billingcountry: "",
            redirect_url: "",
            device_fingerprint: ""
        };
    }

    public handleCardUpdate(name:string, value:string, fun:(a:string, b:string)=>void){
        const numberPattern = /^[0-9]*$/;
        const expDatePattern = /^[0-9/]*$/;
        if((name == 'cardNumber') && numberPattern.test(value) && value.length < 18){
            fun(name,value);
        }else if(name == "exp"  && expDatePattern.test(value) && value.length < 6){
            fun(name,value)
        }else if(name == 'cvv' && numberPattern.test(value) && value.length < 4 ){
            fun(name,value);
        }else if(name == 'pin' && numberPattern.test(value) && value.length < 5 ){
            fun(name,value);
        }
    }

    public chargeCardContinue(_cardPaymentModel:CardPaymentModel, _cardDetail:CardDetail,_fun:(data:any)=>void,_authFun:(set:ExternalLinkModel)=>void, _load:(load:boolean)=>void){
        _load(true)
        const cardno = _cardDetail.cardNumber;
        const cvv = _cardDetail.cvv;
        const expirymonth = _cardDetail.exp.substring(0,2);
        const expiryyear = _cardDetail.exp.substring(3,5);
        let cardResponse:CardResponseOne;

        const newCardPaymentModel:CardPaymentModel = {
            ..._cardPaymentModel,
            cardno,cvv,expirymonth,expiryyear,
            pin:""
        }

        // _fun(newCardPaymentModel)

        this.call.chargeCard(newCardPaymentModel,newCardPaymentModel.PBFPubKey)
            .then(response =>{
                if(response.status === 200){
                    cardResponse = response.data.data

                    const res = response.data.data;
                    if(res.hasOwnProperty("authModelUsed")){
                        console.log("this is the url associated")
                        console.log(res.authurl)
                        _authFun({url:res.authurl,key:newCardPaymentModel.PBFPubKey,id:newCardPaymentModel.txRef});
                    }


                    console.log(response.data.data)
                    console.log(cardResponse)
                    const{suggested_auth} = cardResponse;
                    newCardPaymentModel.suggested_auth = suggested_auth;
                    _fun(newCardPaymentModel);
                    _load(false)
                }
            })
            .catch(e=>{
                console.log(e);
                _load(false)
            })

    }

    public chargeCardPay(_cardPaymentModel:CardPaymentModel,_cardDetail:CardDetail, _otpMsg:(msg:string)=>void, _loader:(load:boolean)=>void){
        _loader(true)
        const payload = {..._cardPaymentModel,pin:_cardDetail.pin};

        this.call.chargeCard(payload,_cardPaymentModel.PBFPubKey)
            .then(res=>{
                if(res.status == 200){
                    console.log(res.data)
                    const message = res.data.data?.chargeResponseMessage;
                    _otpMsg(message)
                    _loader(false)
                }
            })
            .catch(e=>{
                console.log(e)
                _loader(false)
            })


    }

    public otpValidation(PBFPubKey:string,txRef:string, otp:string, _callBack:(set:DefaultAction)=>void, _load:(load:boolean)=>void){
       _load(true);
        const otpModel:OtpModel = {
            PBFPubKey: PBFPubKey,
            transaction_reference: txRef,
            otp: otp
        }

        this.call.chargeCardOTP(otpModel)
            .then((res)=>{
                if(res.status === 200){
                    console.log(res.data)
                    _callBack({type:"TRANSACTION_STATUS", payload:"success"})
                    _load(false)
                }
            })
            .catch(e=>{
                console.log(e)
                _load(false)
            })

    }

    public validateCardPayment(payload:ExternalLinkModel,_callBack:(set:DefaultAction)=>void,_callBack2:(set:ExternalLinkModel)=>void){
        this.call.validateCharge(payload.key,payload.id)
            .then((res)=>{
                if(res.status === 200){
                    _callBack({type:"TRANSACTION_STATUS",payload:"success"})
                    _callBack2({id:"",url:"",key:""})
                }
            })
            .catch(err=>{
                _callBack({type:"TRANSACTION_STATUS",payload:"failed"})
                _callBack2({id:"",url:"",key:""})

                console.log("this is the error for the last part")
                console.log(err)
            })
    }



}
export default new CardService();
