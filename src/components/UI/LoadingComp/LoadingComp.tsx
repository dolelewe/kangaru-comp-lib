import "./LoadingComp.css"
import ReactLoading from 'react-loading';


export const OrderSummaryLoading=()=>{
    return (<div className={"lc_order_uls"}>
        <ReactLoading type={"spin"} color={"#0E1437"} height={40} width={40} />
    </div>)
}

export const LoadingButton=()=>{
    return(
        <button
            type={"button"}
            className={"lc_action_button"}
        >
            <ReactLoading type={"spin"} color={"#fff"} height={25} width={25} />
        </button>
    )
}

export const LoadingPage=()=>{
    return(
        <div className={"lc_load_page"}>
            <ReactLoading type={"spin"} color={"#fff"} height={60} width={60} />
        </div>
    )
}
