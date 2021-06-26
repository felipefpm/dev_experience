import React from 'react';
import { useHistory } from 'react-router-dom';

import illustration from '../Assets/illustration.svg'
import logo from '../Assets/logo.svg'
import googleImgIcon from '../Assets/google-icon.svg'

import { Container, LeftScreen, RightScreen } from '../Styles/PageStyles';
import Button from '../Components/Button';

export function Home() {
  const history = useHistory();

  function navigateToNewRoom() {
    history.push("/rooms/new")
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
          <img src={logo} alt="Lemeask" />
          <button className="create-room" onClick={navigateToNewRoom}>
            <img src={googleImgIcon} alt="Logo do google" />
            Crie sua sala com o Google
          </button>
          <div className="separetor">ou entre em uma sala</div>
          <form action="">
            <input 
              type="text" 
              placeholder="Digite o código da sala"
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