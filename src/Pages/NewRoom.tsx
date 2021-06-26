import React from 'react'
import { Link } from 'react-router-dom'

import illustration from '../Assets/illustration.svg'
import logo from '../Assets/logo.svg'
import Button from '../Components/Button'

import { Container, LeftScreen, RightScreen } from '../Styles/PageStyles'

export function NewRoom() {
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
          <h2>Criar uma nova sala </h2>
          <form action="">
            <input 
              type="text" 
              placeholder="Nome da sala"
            />
            <Button type="submit">
              Criar Sala
            </Button>
          </form>
          <p>Quer entrar em uma sala existente? <Link to="/">click aqui</Link></p>
        </div>
      </RightScreen>
    </Container>
  )
}