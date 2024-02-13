import React, {createContext, ReactNode, useState} from "react";
import ExternalLinkModel from "../Model/ExternalLinkModel";

export const initial: ExternalLinkModel = {url:"",key:"",id:""};

export const ExternalLinkContext = createContext<{url:ExternalLinkModel, setURL:(set:ExternalLinkModel)=>void}>({url:initial,setURL:()=>null});

const ExternalLinkContextProvider=(props:{children:ReactNode})=>{
    const[url, setUrl] = useState<{url:string,key:string,id:string}>(initial);

    const setURL=(set:ExternalLinkModel)=>{
        setUrl(set);
    }

    return (
        <ExternalLinkContext.Provider value={{url,setURL}}>
            {props.children}
        </ExternalLinkContext.Provider>
    )
}

export default ExternalLinkContextProvider;
