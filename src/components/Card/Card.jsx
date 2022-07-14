import "./Card.css";

import { Link } from "react-router-dom";
import { BsFillArrowRightCircleFill } from "react-icons/bs"
import { FaUserGraduate } from "react-icons/fa"

export const Card = (props) => {
    return (
        <div className="card">
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <div className="cardContent">
                <span><FaUserGraduate /> {props.educator}</span>
                <Link to={`/ead/disciplina/${props.id}`}> <BsFillArrowRightCircleFill /> </Link>
            </div>
        </div>
    )
}