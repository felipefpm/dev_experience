import React, { FormEvent, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import illustration from '../Assets/illustration.svg'
import logo from '../Assets/logo.png'
import googleImgIcon from '../Assets/google-icon.svg'

import { Container, LeftScreen, RightScreen } from '../Styles/HomeNewRoomPageStyles';
import Button from '../Components/Button';

import { AuthContext } from '../Contexts/AuthContext'
import { database } from '../Services/firebase';

export function Home() {
  const history = useHistory();
  const [roomCode, setRoomCode] = useState('');
  const { user, signInWithGoogle } = useContext(AuthContext)

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }
    history.push("/rooms/new")
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === '') {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert('Room does not exist.');
      return;
    }

    if (roomRef.val().endedAt) {
      alert('Room already closed');
      return;
    }

    history.push(`/rooms/${roomCode}`)
  }

  return (
    <Container>
      <LeftScreen>
        <img src={illustration} alt="imagem ilustrativa" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire suas duvidas da sua audiência em tempo-real</p>
      </LeftScreen>
      <RightScreen>
        <div className="main-content">
          <img src={logo} alt="Letmeask" />
          <button className="create-room" onClick={handleCreateRoom}>
            <img src={googleImgIcon} alt="Logo do google" />
            Crie sua sala com o Google
          </button>
          <div className="separetor">ou entre em uma sala</div>
          <form onSubmit={handleJoinRoom} >
            <input 
              type="text" 
              placeholder="Digite o código da sala"
              onChange={event => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button type="submit">
              Entrar na sala
            </Button>
          </form>
        </div>
      </RightScreen>
    </Container>
  )
}