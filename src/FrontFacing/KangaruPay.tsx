import React, {useState} from "react";
export interface paymentInfo{
    secretKey: string;
    txRef: string;
    amount: string;
    currency: string;
    customerEmail: string;
    customerPhone: string;
    customerName: string;
    merchantName: string;
    paymentDescription: string;
    logoLink: string | null;
    callBack: (e:any)=>void;
}

export const KangaruPay = (props: paymentInfo)=>{

    const[show, setShow] = useState(false)

    return (<div>
        this is the show
    </div>);
}

const CheckOutPage=()=>{

}

export default KangaruPay
