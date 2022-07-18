import "./ContentCard.css";
import { FaChalkboardTeacher, FaGlobe, FaHouseUser, FaBookOpen } from "react-icons/fa"

export const ContentCard = () => {
    return (

        <div className="list_content_card">
            <div className="content_card_item">
                <FaChalkboardTeacher className="icon_content_card" />
                <h2>Os melhores professores</h2>
                <p>Os melhores experts do mercado. Para você ter o melhor aprendizado.</p>
            </div>
            <div className="content_card_item">
                <FaGlobe className="icon_content_card" />
                <h2>Aulas Online</h2>
                <p>Estude de onde quiser e tenha mais produtividade.</p>
            </div>
            <div className="content_card_item">
                <FaHouseUser className="icon_content_card" />
                <h2>Projetos Reais</h2>
                <p>Desenvolva projetos reais e soluções de mercado.</p>
            </div>
            <div className="content_card_item">
                <FaBookOpen className="icon_content_card" />
                <h2>Materiais</h2>
                <p>Mais de 500h de contéudos para dar um up na sua jornada.</p>
            </div>
        </div>

    )
}