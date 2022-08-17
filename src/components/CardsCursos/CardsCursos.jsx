import "./CardsCursos.css";
import { Link } from "react-router-dom"

export const CardsCursos = (props) => {
    return (
        <div className="card_curso" >
            <div className="card_curso_img">
                <img src={props.backgroundImage} alt="Imagem do curso" />
                <div className="card_curso_img_cta">
                    <div>
                        <Link to={props.saibamais}>Saiba Mais</Link>
                    </div>
                    <div>
                        <Link to={props.inscrevase}>Inscreva-se</Link>
                    </div>
                </div>
            </div>
            <div className="card_curso_content">
                <h2>{props.curso_title}</h2>
                <p>{props.curso_description}</p>
            </div>
        </div>
    )
}