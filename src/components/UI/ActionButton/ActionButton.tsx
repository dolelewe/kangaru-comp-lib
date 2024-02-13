import "./ActionButton.css"
import React from "react";
const ActionButton=(props:{
    text:string,
    type:"submit"|"button",
    clickEvent:()=>void,
    validity:boolean
})=>{
    return(
        <button
            type={props.type}
            onClick={props.clickEvent}
            className={"ab_action_button"}
            disabled={props.validity}
        >
            {props.text}
        </button>
    )
}

export default ActionButton;
