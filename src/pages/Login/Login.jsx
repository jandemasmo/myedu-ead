import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import ImageLogin from "../../assets/images/imageLogin.png";
import { AuthEadContext } from "../../contexts/authEad";


export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] =  useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate()

    const  { login } =  useContext(AuthEadContext)

    async function HandleSubmit(event){
        event.preventDefault();

        try {
            await login(email, password)
        } catch (error) {
            setMessage("E-mail ou Senha inválidos.");
        }
        
    }

    function returnWebsite(event){
        event.preventDefault()
        return navigate("/");
    }


    return (
        <section className="containerLogin">
            <div className="left">
                <div className="headline">
                    <button type="button" className="btn-back">
                        <a href="/" onClick={returnWebsite}>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                width="35" height="35" fill="currentColor" className="bi bi-arrow-left-square-fill"
                                viewBox="0 0 16 16">
                                <path
                                    d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z" />
                            </svg>
                        </a>
                    </button>
                    <h1>Bem-Vindo Estudante!</h1>
                    <p>Venha brilhar conosco e construa um futuro de sucesso.</p>
                    <p>Fique ligado no calendário de provas e não perca os prazos!</p>
                </div>
                <form onSubmit={HandleSubmit}>

                    <input 
                    type="text" 
                    placeholder="E-mail" 
                    name="email" 
                    value={email} 
                    onChange={(event) => setEmail(event.target.value)} 
                    required>
                    </input>

                    <input 
                    type="password" 
                    placeholder="Senha" 
                    name="password" 
                    value={password} 
                    onChange={(event) => setPassword(event.target.value)}
                    required>
                    </input>

                    <input type="submit" value="Entrar" required></input>
                    <a href="#/recover">Não sei ou esqueci minha senha.</a>
                </form>
                { message && <p className="message">{message}</p> }
            </div>
            <div className="right">
                <img src={ImageLogin} alt="Imagem de estudante sorrindo"></img>
            </div>
        </section>
    )
}