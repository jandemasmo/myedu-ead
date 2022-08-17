import { useContext, useState, useEffect } from "react";
import { AuthEadContext } from "../../contexts/authEad";
import { FaLocationArrow, FaMailBulk, FaPhoneAlt } from "react-icons/fa";
import "./Contato.css";

export const Contato = () => {
  const {sendMessageContext} = useContext(AuthEadContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");


  async function handleMessage(event){
    try {
      event.preventDefault();
      const returnMessage = await sendMessageContext(name, email, message);
      setSuccessMessage(returnMessage.data.success);
      setEmail("")
      setName("")
      setMessage("")
    } catch (error) {
      setSuccessMessage("Ops. Tente mais tarde.");
    }
  }

  useEffect( () => {
    
  },[message])

  return (
    <div>
      <div className="contato_website">
        <h2>Contato</h2>
        <form onSubmit={handleMessage}>
          <input
            type="text"
            placeholder="Nome"
            aria-label="informe seu nome"
            value={name}
            onChange={(event) => setName(event.target.value)}
            
          ></input>
          <input
            type="email"
            placeholder="E-mail"
            aria-label="informe seu e-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          
          ></input>
          <textarea
            name="mensagem"
            id=""
            cols="30"
            rows="10"
            placeholder="Mensagem"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          
          ></textarea>
          <input
            type="submit"
            value="Enviar"
            aria-label="Enviar Formulário"
          ></input>
          <p className="success_message">{successMessage && successMessage}</p>
        </form>
        <div className="address">
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
            deserunt! Beatae, amet labore molestias eos voluptates minus ex
            unde, magni, asperiores maiores necessitatibus culpa. Autem facere
            reprehenderit ipsam quisquam, beatae facilis eveniet excepturi?
          </p>
          <div>
            <div className="contato_icon">
              <span>
                <FaLocationArrow />
              </span>
              <div>
                <h3>Escritório</h3>
                <p>Avenida Paulista Nº 800 São Paulo, SP.</p>
              </div>
            </div>
            <div className="contato_icon">
              <span>
                <FaPhoneAlt />
              </span>

              <div>
                <h3>Telefone</h3>
                <p>0800 000 800</p>
              </div>
            </div>
            <div className="contato_icon">
              <span>
                <FaMailBulk />
              </span>
              <div>
                <h3>E-mail</h3>
                <p>info@myedu.com.br</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.4045296073123!2d-46.69927288520432!3d-23.553910484686604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57990187b23f%3A0x2df7aaad5c4c8814!2sTera%20-%20Unidade%20Pinheiros!5e0!3m2!1spt-BR!2sbr!4v1658181061252!5m2!1spt-BR!2sbr"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};
