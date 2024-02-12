import {createContext, ReactNode, useState} from "react";
import DefaultState from "../Model/DefaultState";
import DefaultAction from "../Model/DefaultAction";
import DefaultValueService from "../Service/DefaultValueService";

const defaultService = DefaultValueService;
export const initialValue:DefaultState = {
    rawTransactionInfo:defaultService.getDefaultRawTransactionInfo(),
    paymentGatewayRequest: defaultService.getDefaultPaymentGatewayRequest(),
    transactionStatus: ""
}
export const DefaultContext = createContext<{state:DefaultState,update:(set:DefaultAction)=>void}>({state:initialValue,update:()=>null});
const DefaultContextProvider=(props:{children:ReactNode})=>{
    const [state, setState] = useState<DefaultState>(initialValue);

    const update=(set:DefaultAction)=>{

        switch (set.type){
            case "UPDATE_PAYMENT_GATEWAY_REQUEST":{
                setState(prevState => {
                    return{
                        ...prevState,
                        paymentGatewayRequest: set.payload
                    }
                })
            }
            break;
            case "UPDATE_RAW_TRANSACTION_INFO":{
                setState(prevState => {
                    return {
                        ...prevState,
                        rawTransactionInfo: set.payload
                    }
                })
            }
            break;
            case "TRANSACTION_STATUS":{
                setState(prevState => {
                    return {
                        ...prevState,
                        transactionStatus: set.payload
                    }
                })
            }
            break;
            default:

        }

    }


    return (
        <DefaultContext.Provider value={{state,update}}>
            {props.children}
        </DefaultContext.Provider>
    )
}

export default DefaultContextProvider;
