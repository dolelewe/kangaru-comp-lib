import React,{useContext} from "react";
import {ExternalLinkContext} from "../../../context/ExternalLinkContex";
import ActionButton from "../../../components/UI/ActionButton/ActionButton";
import  "./ExternalApiForCard.css"
import CardService from "../CardService";
import {DefaultContext} from "../../../context/DefaultContext";


const ExternalApiForCard=()=>{
    const {url,setURL} = useContext(ExternalLinkContext);
    const {update} = useContext(DefaultContext)
    const cardService = CardService;

    const processDone=()=>{
        cardService.validateCardPayment(url,update,setURL)
    }
    return (
        <div>
            <iframe src={url.url} width={"100%"} height={"400px"} className={"ea_modal"}></iframe>
            <ActionButton text={"Done"} type={"button"} clickEvent={processDone} validity={false}/>
        </div>
    )
}

export default ExternalApiForCard;
