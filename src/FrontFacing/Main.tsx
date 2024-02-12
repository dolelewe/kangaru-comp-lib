// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
// import './index.css'
// import DefaultContextProvider from "./context/DefaultContext";
// import ExternalLinkContextProvider from "./context/ExternalLinkContex";
//
// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//       <DefaultContextProvider>
//           <ExternalLinkContextProvider>
//               <App />
//           </ExternalLinkContextProvider>
//       </DefaultContextProvider>
//   </React.StrictMode>,
// )


import App from "./App";
import ExternalLinkContextProvider from "../context/ExternalLinkContex";
import DefaultContextProvider from "../context/DefaultContext";

export const KangarUSDK = ()=>{

    return (
       <DefaultContextProvider>
           <ExternalLinkContextProvider>
               <App />
           </ExternalLinkContextProvider>
       </DefaultContextProvider>
    )

}

export default KangarUSDK;
