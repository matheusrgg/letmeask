import { Link } from "react-router-dom"

import illustrationImg from "../assets/images/illustration.svg"
import logoImg from "../assets/images/logo.svg"
import googleIconImg from "../assets/images/google-icon.svg"

import '../styles/auth.scss'
import { Button } from "../components/Button"

export function NewRoom(){
  

        return(
            <div id="page-auth">
                <aside>
                    <img src={illustrationImg} alt="Illustração simbolizando perguntas" />
                    <strong>Crie sala de Q&amp; A ao-vivo</strong>
                    <p>Tire as dúvidas da sua audiência em tempo-real</p>
                </aside>
                <main>
                    <div className="main-content">
                        <img src={logoImg} alt="logoletmeask" />
                        <h2>Criar uma nova sala</h2>
                      
                        <form action="">
                            <input type="text" placeholder="Nome da Sala" />
                            <Button type="submit">Criar Sala</Button>
                        </form>
                        <p>Quer entrar uma sala existente? <Link to="/">Clique aqui</Link></p>
                    </div>
                </main>
            </div>
        )
}