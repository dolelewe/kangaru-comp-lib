import style from "./PaymentOptions.module.css"
import {useState} from "react";
import Icons from "../Icons";
import {OptionTypes, Options} from "../Options";
import {useNavigate} from "react-router-dom"

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
        <div onClick={()=>handeNegateOpenClose(choiceMode)} className={style.choice}>
            <div className={style.flex}>
                <img src={Icons[choiceMode]} alt={"this is your choice icon "+choiceMode}/> {options[choiceMode]}
            </div>
            <img src={Icons['arrowDown']} alt={"this is your choice icon"}/>
        </div>);
    const allChoice = (
        <ul className={style.option_ul}>
            {(choiceMode !== "card") && <li onClick={()=>handleChoiceMade('card')}> <div className={style.flex}><img src={Icons['card']} alt={"this is your choice icon card"}/> {"Debit or Credit Card"}</div></li>}
            {(choiceMode !== "transfer") && <li onClick={()=>handleChoiceMade('transfer')}> <div className={style.flex}><img src={Icons['transfer']} alt={"this is your choice icon bank transfer"}/> {"Bank Transfer"}</div></li>}
            {(choiceMode !== "bank") && <li onClick={()=>handleChoiceMade('bank')}> <div className={style.flex}><img src={Icons['bank']} alt={"this is your choice icon internet banking"}/> {"Internet Banking"}</div></li>}
            {(choiceMode !== "ussd") && <li onClick={()=>handleChoiceMade('ussd')}> <div className={style.flex}><img src={Icons['ussd']} alt={"this is your choice icon ussd"}/> {"USSD"}</div></li>}
        </ul>

    )
    return (<div>
        <h4 className={style.option_title}>Select your preferred payment option</h4>
        <div className={style.all_option}>
            {choiceMade}
            {openClose && allChoice}
        </div>

    </div>)
}
export default PaymentOptions;
