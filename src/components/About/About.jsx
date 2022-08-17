import "./About.css";
import { Cta } from "../Cta/Cta";
import { FaArrowRight } from "react-icons/fa"

export const About = () => {
    return (
        <div className="about">
            <div className="about_image"></div>

            <div className="about_content">
                <h2>Porque você deve escolher a MyEdu como sua Universidade</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam reiciendis odit, illo, facilis beatae consectetur, pariatur repellat ea facere perferendis vel. Voluptate reiciendis voluptatibus accusantium impedit deleniti.</p>
                <div className="check_about_content">
                    <span><FaArrowRight/> Orientação de carreira</span>
                    <span><FaArrowRight/> Orientação de acadêmica</span>
                    <span><FaArrowRight/> Facilidade na segunda graduação</span>
                </div>
                <Cta text="Saiba Mais" link="/" background="#1e90ff" color="#ffffff"/>
            </div>
        </div>
    )
}