import style from "./LoadingComp.module.css"
import ReactLoading from 'react-loading';


export const OrderSummaryLoading=()=>{
    return (<div className={style.order_uls}>
        <ReactLoading type={"spin"} color={"#0E1437"} height={40} width={40} />
    </div>)
}

export const LoadingButton=()=>{
    return(
        <button
            type={"button"}
            className={style.action_button}
        >
            <ReactLoading type={"spin"} color={"#fff"} height={25} width={25} />
        </button>
    )
}

export const LoadingPage=()=>{
    return(
        <div className={style.load_page}>
            <ReactLoading type={"spin"} color={"#fff"} height={60} width={60} />
        </div>
    )
}
