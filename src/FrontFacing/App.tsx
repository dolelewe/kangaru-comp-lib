
import "./App.css"
import {BrowserRouter} from "react-router-dom";
import {useContext} from "react";
import {DefaultContext, ExternalLinkContext} from "../context";
import OrderSummaryAndKangaruRoutes from "../components/OrderSummaryAndKangaruRoutes/OrderSummaryAndKangaruRoutes";
import OrderSummaryAndFinalStatus from "../components/OrderSummaryAndFinalStatus/OrderSummaryAndFinalStatus";
import ExternalApiForCard from "../Page/CardPage/ExternalApiForCard/ExternalApiForCard";


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

