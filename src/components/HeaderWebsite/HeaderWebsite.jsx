import "./HeaderWebsite.css";
import { NavLink } from "react-router-dom";
import { BsFillCaretRightFill } from "react-icons/bs";

export const HeaderWebsite = () => {
    return (
        <div className="header_website">
            <header>
                <div className="brand">
                    <span>MyEdu</span>
                </div>
                <nav >
                    <ul>
                        <li>
                            <NavLink to={"/"}>Ínicio</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/sobre"}>Sobre</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/cursos"}>Cursos</NavLink>
                        </li>
                        <li className="contato">
                            <NavLink to={"/contato"}>Contato <BsFillCaretRightFill/></NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}