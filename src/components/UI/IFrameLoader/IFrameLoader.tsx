
import "./IframeLoader.css"
const IFrameLoader =(props:{url:string, toggle:()=>void})=>{

    return(
        <div className={"ifl_modal"}>
            <div onClick={props.toggle} className={"ifl_overlay"}> </div>
            <div className={"ifl_modal_content"}>
                <iframe src={props.url} width={"100%"} height={"100%"}/>
            </div>
        </div>
    )
}

export default IFrameLoader;
