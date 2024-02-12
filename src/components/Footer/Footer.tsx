import "./Footer.css"
import Icons from "../Icons";
const Footer=()=>{
    const {union} = Icons;
    return (<footer className={"f_footer"}>
        <h3 className={"f_footer_title"}>KangarU</h3>
        <div className={"f_style.footer_div"}><img src={union} alt={"powered by union bank"}/> Powered by Unionbank</div>

    </footer>)
}

export default Footer;
