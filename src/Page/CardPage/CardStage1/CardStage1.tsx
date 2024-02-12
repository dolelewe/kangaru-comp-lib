import style from "../CardPage.module.css";
import Icons from "../../../components/Icons";
import ActionButton from "../../../components/UI/ActionButton/ActionButton";
import CardService from "../CardService";
import {SyntheticEvent, useContext, useState} from "react";
import {CardDetail, CardPaymentModel} from "../../../Model/Models";
import {DefaultContext} from "../../../context/DefaultContext";
import {LoadingButton} from "../../../components/UI/LoadingComp/LoadingComp";
import {ExternalLinkContext} from "../../../context/ExternalLinkContex";


const CardStage1=(props:{
    updateMessage:(msg:string)=>void,
    loader: (status: boolean)=>void
})=>{
    const {state} = useContext(DefaultContext)
    const {setURL} = useContext(ExternalLinkContext)
    const cardService = CardService;
    const [cardDetail, setCardDetail] = useState<CardDetail>(cardService.getDefaultCardDetail)
    const [cardPaymentModel, setCardPaymentModel] = useState<CardPaymentModel>(cardService.setupCardPaymentModel(state.rawTransactionInfo,state.paymentGatewayRequest))
    const [btnLoading, setBtnLoading] = useState(false);

    const handleCardPaymentModel=(_cardPaymentModel:CardPaymentModel)=>{
        setCardPaymentModel(_cardPaymentModel)
    }
    const handleCardUpdate=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value} = e.target;
        cardService.handleCardUpdate(name,value,updateCard)
    }
    const updateCard=(name:string, value:string)=>{
        let valueToBeUsed = value;
        if(name == "exp"){
            const prevValue = cardDetail.exp;
            const currentValue = value;

            const isBigger = currentValue.length > prevValue.length;

            if(isBigger && currentValue.length == 2){
                valueToBeUsed = valueToBeUsed + "/"
            }

            if((!isBigger) && currentValue.length == 2){
                valueToBeUsed = valueToBeUsed.substring(0,1);
            }

        }

        setCardDetail(prevState => {
            return{
                ...prevState,
                [name]:valueToBeUsed
            }
        })
    }
    const handleSubmit=(e:SyntheticEvent)=>{
        e.preventDefault()
        cardService.chargeCardPay(cardPaymentModel,cardDetail,props.updateMessage, setBtnLoading)
    }


    return (

    <form onSubmit={handleSubmit}>
        <div>
            <label className={style.card_label}>Card Number</label>
            <div className={style.card_num}>
                <img src={Icons.masterCard}/>
                <input name={"cardNumber"}
                       onChange={handleCardUpdate}
                       type={"text"}
                       inputMode={"numeric"}
                       placeholder={"23456789900088"}
                       value={cardDetail.cardNumber}
                />
            </div>
        </div>

        <div className={style.flex}>
            <div className={style.inner_div}>
                <label className={style.card_label}>Expiry Date</label>
                <input name={"exp"}
                       type={"text"}
                       onChange={handleCardUpdate}
                       placeholder={"01/28"}
                       value={cardDetail.exp}
                />
            </div>
            <div className={style.inner_div}>
                <label className={style.card_label}>CVV</label>
                <input name={"cvv"}
                       type={"text"}
                       onChange={handleCardUpdate}
                       placeholder={"225"}
                       value={cardDetail.cvv}
                />
            </div>
        </div>

        {cardPaymentModel.suggested_auth === "PIN" && <div className={style.inner_div}>
            <label className={style.card_label}>Enter your Card PIN</label>
            <input name={"pin"}
                   type={"text"}
                   onChange={handleCardUpdate}
                   placeholder={"1234"}
                   value={cardDetail.pin}
            />
        </div>}

        {(!btnLoading && cardPaymentModel.suggested_auth === "") &&
            <ActionButton
                text={"Continue"}
                type={"button"}
                clickEvent={()=>{
                    cardService
                        .chargeCardContinue(cardPaymentModel,cardDetail,handleCardPaymentModel,setURL,setBtnLoading)
                }}
                validity={false}/>
        }

        {(btnLoading && cardPaymentModel.suggested_auth === "") &&
            <LoadingButton/>
        }
        {(btnLoading && cardPaymentModel.suggested_auth === "PIN") &&
            <LoadingButton/>
        }

        {(!btnLoading && cardPaymentModel.suggested_auth === "PIN") &&
            <ActionButton text={`Pay NGN ${state.paymentGatewayRequest.amount}`} type={"submit"} clickEvent={() => {
                console.log("submit button clicked")
            }} validity={cardDetail.pin.length !== 4}/>
        }

    </form>)

}

export default CardStage1
