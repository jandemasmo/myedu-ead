import "./FooterWebsite.css";
import { Link } from "react-router-dom";
import { BsFillCaretRightFill } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const FooterWebsite = () => {
  return (
    <footer className="footer_webite">
      <div className="footer_content">
        <div className="footer_content_int">
          <div className="footer_links">
            <h2>Links</h2>
            <div>
              <Link to={"#"}>
                <BsFillCaretRightFill /> Sobre
              </Link>
              <Link to={"#"}>
                <BsFillCaretRightFill /> Contato
              </Link>
              <Link to={"#"}>
                <BsFillCaretRightFill /> Políticas
              </Link>
              <Link to={"#"}>
                <BsFillCaretRightFill /> Termos e Condições
              </Link>
              <Link to={"#"}>
                <BsFillCaretRightFill /> FAQ & Ajuda
              </Link>
            </div>
          </div>
          <div className="footer_contato">
            <h2>Contato</h2>
            <div>
              <p>
                <FaLocationArrow /> Avenida Paulista Nº 800 São Paulo, SP.
              </p>
              <p>
                <FaPhoneAlt /> 0800 000 800
              </p>
              <p>
                <FaMailBulk /> info@myedu.com.br
              </p>
              <div className="social_icons">
                <Link to={"#"}>
                  <FaTwitter />
                </Link>
                <Link to={"#"}>
                  <FaFacebookF />
                </Link>
                <Link to={"#"}>
                  <FaYoutube />
                </Link>
                <Link to={"#"}>
                  <FaLinkedin />
                </Link>
              </div>
            </div>
          </div>
          <div className="footer_newsletter">
            <h2>Novidades</h2>
            <div>
              <p>Fique por dentro das novidades sobre cursos e promoções</p>
              <form>
                <input type="email" placeholder="Seu E-mail" required></input>
                <input type="submit" value={"Assinar"}></input>
              </form>
            </div>
          </div>
        </div>
        <div className="direitos_reservados">
          <p className="acesso_admin">
            <a href="https://dash-app-eight.vercel.app/">
              Você é Admin? Acesse Aqui
            </a>
          </p>
          <p>© MyEdu, Desenvolvido por Jande e Bruno.</p>
        </div>
      </div>
    </footer>
  );
};
