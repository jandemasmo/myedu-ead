import "./Cta.css"
import { Link } from "react-router-dom"


export const Cta = (props) => {
    return (
        <div className="cta" style={{backgroundColor: props.background}}>
            <Link style={{color: props.color}}  to={props.link}>{props.text}</Link>
        </div>

    )
}