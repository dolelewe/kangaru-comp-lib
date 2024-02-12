import {ReactNode} from "react";
import style from "./MainLayout.module.css"
const MainLayout=(props:{children:ReactNode})=>{
    return (
        <div className={style.container}>
            {props.children}
        </div>
    )
}
export default MainLayout;
