import {ReactNode} from "react";
import "./MainLayout.css"
const MainLayout=(props:{children:ReactNode})=>{
    return (
        <div className={"ml_container"}>
            {props.children}
        </div>
    )
}
export default MainLayout;
