import "./ThemeCard.css";
import { FaCheckCircle } from "react-icons/fa";
import { useState, useEffect } from "react";

export const ThemeCard = ({ name, description, video, id_theme, clickLink, statusTheme, clickUpdateStatus}) => {


    const [link, setLink] = useState("");
    const [status, setStatus] = useState(!statusTheme)

    function handleLink() {
        setLink(video);
        clickLink(link)
    }

    function updateStatus(){
        setStatus(!status)
        clickUpdateStatus(status, id_theme)
    }

    
    useEffect(() => {
        handleLink()
    }, [link])

    return (

        <div className="theme_card">
            <div className="theme_card_title" >
                <h2 onClick={handleLink}>{name}</h2>
                <p className="tooltip" data-tooltip={status ?"Marcar como concluído."  : "Desmarcar aula" }><FaCheckCircle className={status ? "icon_false" : "icon_true"}
                   onClick={updateStatus} /></p>
            </div>
            <p>{description}</p>
        </div>
    )
}