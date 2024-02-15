import {ActionButton} from "../components";
import React from "react";


export interface checkoutInterface{
    toggleShow: ()=>void;
}

export const CheckOutPage=({toggleShow}:checkoutInterface)=>{


    return (
        <div>

            <div>
                <p>Payment Method</p>
                <ActionButton text={"Checkout with KangarU"} type={"button"} clickEvent={()=> toggleShow} validity={false}/>
            </div>



        </div>
    )

}

export default CheckOutPage;
