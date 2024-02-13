
import "./App.css"
import "./index.css"
import {BrowserRouter} from "react-router-dom";
import React, {useContext} from "react";
import {DefaultContext, ExternalLinkContext} from "../context";
import OrderSummaryAndKangaruRoutes from "../components/OrderSummaryAndKangaruRoutes/OrderSummaryAndKangaruRoutes";
import OrderSummaryAndFinalStatus from "../components/OrderSummaryAndFinalStatus/OrderSummaryAndFinalStatus";
import ExternalApiForCard from "../Page/CardPage/ExternalApiForCard/ExternalApiForCard";
import MainLayout from "../components/MainLayout/MainLayout";
import Footer from "../components/Footer/Footer";


function App() {
    const {state} = useContext(DefaultContext)
    const {url} = useContext(ExternalLinkContext)

  return (
    <div className={"container"}>
        <MainLayout>
            {/*<ToastComp/>*/}
          <>
              <BrowserRouter>
                  {
                      (state.transactionStatus == "" && url.url == "") && <OrderSummaryAndKangaruRoutes/>
                  }
                  {
                      (state.transactionStatus != "" && url.url == "") && <OrderSummaryAndFinalStatus/>
                  }
                  {
                      url.url != "" && <ExternalApiForCard/>
                  }
              </BrowserRouter>


              <Footer/>
          </>
        </MainLayout>
    </div>
  )
}
export default App

