
import modal from "./IframeLoader.module.css"
const IFrameLoader =(props:{url:string, toggle:()=>void})=>{

    return(
        <div className={modal.modal}>
            <div onClick={props.toggle} className={modal.overlay}> </div>
            <div className={modal.modal_content}>
                <iframe src={props.url} width={"100%"} height={"100%"}/>
            </div>
        </div>
    )
}

export default IFrameLoader;
