// ------ React
import { FormEvent, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"

// ------ Images
import illustrationImg from "../assets/images/illustration.svg"
import logoImg from "../assets/images/logo.svg"
import googleIconImg from "../assets/images/google-icon.svg"

// ------ Components
import { Button } from "../components/Button"


// ------ Hoooks
import { useAuth } from "../hooks/useAuth"

// ------ Database
import { database } from "../services/firebase"

// ------ Css
import '../styles/auth.scss'

export function Home() {

    const navigate = useNavigate();
    const { user, signInWithGoogle } = useAuth();
    //pq aqui ele usou array e não objeto?
    const [roomCode, setRoomCode] = useState('');

    async function handleCreateRoom() {
        if (!user) {
            await signInWithGoogle()
        }
        navigate('/rooms/new')
    }


    async function handleJoinRoom(event: FormEvent) {
        event.preventDefault();

        if (roomCode.trim() == '') {
            return;
        }

        const roomRef = await database.ref(`/rooms/${roomCode}`).get();

        if (!roomRef.exists()) {
            alert('Room does not exists');
            return;
        }

        if (roomRef.val().endedAt) {
            alert('Room already closed.');
            return;
        }

        navigate(`/rooms/${roomCode}`);

    }

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Illustração simbolizando perguntas" />
                <strong>Crie sala de Q&amp; A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="logoletmeask" />
                    {/* <button onClick={()=>navigate('/rooms/new')} className="create-room"> */}
                    <button onClick={() => handleCreateRoom()} className="create-room">
                        <img src={googleIconImg} alt="logo do google" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">ou entre em uma sala</div>
                    <form action="" onSubmit={handleJoinRoom}>
                        <input
                            type="text"
                            placeholder="Digite o código da sala"
                            onChange={event => setRoomCode(event.target.value)}
                            value={roomCode}
                        />
                        <Button type="submit">Entrar na sala</Button>
                    </form>
                </div>
            </main>
        </div>
    )
}