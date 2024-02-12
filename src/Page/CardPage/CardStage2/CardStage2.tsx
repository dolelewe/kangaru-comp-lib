import style from "../CardPage.module.css";
import {useContext, useEffect, useState} from "react";
import CardService from "../CardService";
import {DefaultContext} from "../../../context/DefaultContext";
import {LoadingButton} from "../../../components/UI/LoadingComp/LoadingComp";


const CardStage2=(props:{otpMessage:string, loader:(status:boolean)=>void})=>{
    const [btnLoading, setBtnLoading] = useState(false);
    const{state, update} = useContext(DefaultContext)
    const cardService = CardService;
    const [otp, setOtp] = useState<string[]>(['','','','',''])
    const otpInputs = Array(5).fill(null);

    const [isValidOtp, setIsValidOtp]= useState(false);

    useEffect(()=>{
        setIsValidOtp( checkOtpValidity(otp))
    },[otp])
    const checkOtpValidity=(otpArr: string[])=>{
        const otps = otpArr.join("");
        if(otps.length == 5){
            return true
        }else{
            return false
        }
    }
    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>, index:number) => {
        const { value } = e.target;
        if (/^\d*$/.test(value) && value.length <= 1) {
            otp[index] = value;
            setOtp([...otp]);

            if (index < otpInputs.length - 1 && value) {
                otpInputs[index + 1].focus();
            }
        }
    };
    const getFullOtp=()=>{
        return otp.join('');
    }

    const handleOtp=()=>{
        console.log("final clicked")
        if(isValidOtp) {
            console.log("is valid reached")
            const fullOtp = getFullOtp();
            cardService.otpValidation(state.rawTransactionInfo.merchantPublicKey, state.paymentGatewayRequest.tx_ref, fullOtp, update, setBtnLoading);
        }
    }

    const handleInputBackspace = (e:React.KeyboardEvent<HTMLInputElement>, index:number) => {
        if (e.key === 'Backspace' && index > 0) {
            otp[index] = '';
            setOtp([...otp]);
            otpInputs[index - 1].focus();
        }
    };

    return (
        <div>
            <h4 className={style.otp_head}>OTP Verification</h4>
            <p className={style.otp_sub_text}>{props.otpMessage}</p>
            <div className={style.otp_div}>
                {otp.map((value, index) => (
                    <input
                        type="text"
                        key={index}
                        value={value}
                        ref={(input) => (otpInputs[index] = input)}
                        onChange={(e) => handleInputChange(e, index)}
                        onKeyDown={(e) => handleInputBackspace(e, index)}
                    />
                ))
                }
            </div>
            {
                !btnLoading &&
                <button className={style.card_button}
                        type={"button"}
                        onClick={handleOtp}
                >Done</button>
            }

            {btnLoading &&
                <LoadingButton/>
            }

        </div>
    )
}

export default CardStage2
