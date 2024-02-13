import "./PaymentOptions.css"
import {useState} from "react";
import Icons from "../Icons";
import {OptionTypes, Options} from "../Options";
import {useNavigate} from "react-router-dom";
import React from "react";

const PaymentOptions=()=>{
    const navigate = useNavigate();
    const [openClose, setOpenClose] = useState<boolean>(false)
    const [choiceMode, setChoiceMode] = useState<OptionTypes>('card')
    const options = Options;
    const handleChoiceMade=(newChoice: OptionTypes)=>{
        setChoiceMode(newChoice)
        navigate("/"+newChoice)
        setOpenClose(false);
    }

    const handeNegateOpenClose=(route: string)=>{
        navigate("/"+route)
        setOpenClose(prevState => !prevState)
    }

    const choiceMade:any = (
        <div onClick={()=>handeNegateOpenClose(choiceMode)} className={"po_choice"}>
            <div className={"po_flex"}>
                <img src={Icons[choiceMode]} alt={"this is your choice icon "+choiceMode}/> {options[choiceMode]}
            </div>
            <img src={Icons['arrowDown']} alt={"this is your choice icon"}/>
        </div>);
    const allChoice = (
        <ul className={"po_option_ul"}>
            {(choiceMode !== "card") && <li onClick={()=>handleChoiceMade('card')}> <div className={"po_choice"}><img src={Icons['card']} alt={"this is your choice icon card"}/> {"Debit or Credit Card"}</div></li>}
            {(choiceMode !== "transfer") && <li onClick={()=>handleChoiceMade('transfer')}> <div className={"po_choice"}><img src={Icons['transfer']} alt={"this is your choice icon bank transfer"}/> {"Bank Transfer"}</div></li>}
            {(choiceMode !== "bank") && <li onClick={()=>handleChoiceMade('bank')}> <div className={"po_choice"}><img src={Icons['bank']} alt={"this is your choice icon internet banking"}/> {"Internet Banking"}</div></li>}
            {(choiceMode !== "ussd") && <li onClick={()=>handleChoiceMade('ussd')}> <div className={"po_choice"}><img src={Icons['ussd']} alt={"this is your choice icon ussd"}/> {"USSD"}</div></li>}
        </ul>

    )
    return (<div>
        <h4 className={"po_option_title"}>Select your preferred payment option</h4>
        <div className={"po_all_option"}>
            {choiceMade}
            {openClose && allChoice}
        </div>

    </div>)
}
export default PaymentOptions;
