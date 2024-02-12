import ToastInterface from "../../../Model/ToastInterface";
import "./ToastComp.css"
const ToastComp=()=>{
    const toast: ToastInterface = {text: "this is the default Toast", colour: "green", time: 5000}

    return (
        <div className={`toast toast-${toast.colour}`}>
            {toast.text}
        </div>)
}
export default ToastComp;

