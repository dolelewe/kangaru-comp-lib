import SubLayout from "../SubLayout/SubLayout";
import PayPage from "../../Page/PayPage/PayPage";
import CardPage from "../../Page/CardPage/CardPage";
import BankTransferPage from "../../Page/BankTransferPage/BankTransferPage";
import {Routes,Route} from "react-router-dom";
import PaymentOptions from "../PaymentOptions/PaymentOptions";
const Router=()=>{
    return (
        <Routes>
            <Route path={"/"} element={<SubLayout children={<div></div>}/>}/>
            <Route path={"/pay/:id"} element={<SubLayout children={<PayPage/>}/>}/>
            <Route path={"/card"} element={<SubLayout children={<CardPage/>}/>}/>
            <Route path={"/bank"} element={<SubLayout children={<div>Internet banking {"transaction?.transactionId"}</div>}/>}/>
            <Route path={"/transfer"} element={
                <SubLayout children={<BankTransferPage/>}/>
            }/>
            <Route path={"/ussd"} element={
                <SubLayout children={<div>ussd {'transaction id'}</div>}/>
            }/>
        </Routes>
    );
}
export default Router;

const KangaruRoutes=()=>{
   return (
        <>
            <PaymentOptions/>
            <Router/>
        </>
    )
}

export {KangaruRoutes};

