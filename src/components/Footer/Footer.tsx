import style from "./Footer.module.css"
import Icons from "../Icons";
const Footer=()=>{
    const {union} = Icons;
    return (<footer className={style.footer}>
        <h3 className={style.footer_title}>KangarU</h3>
        <div className={style.footer_div}><img src={union} alt={"powered by union bank"}/> Powered by Unionbank</div>

    </footer>)
}

export default Footer;
