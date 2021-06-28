import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

import logo from '../Assets/logo.svg'
import deleteImg from '../Assets/delete.svg'
import RoomCode from '../Components/RoomCode';
import Button from './../Components/Button/index';
import Question from '../Components/Question';
import { Container, Header, Main, Title } from "../Styles/RoomStyles";
import { useRoom } from '../Hooks/useRoom'
import { database } from '../Services/firebase';

type RoomParams = {
  id: string;
}

export function RoomAdmin() {
  const params = useParams<RoomParams>();
  const roomId = params.id
  const history = useHistory()
  const { title, question } = useRoom(roomId);

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm("Tem certeza que deseja excluir está pergunta?")) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()
    }
  
  }

  async function handleLogoutRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date()
    })

    history.push('/')
  }

  return(
    <Container>
      <Header>
        <div className="header-content">
          <img src={logo} alt="logo let me ask" />
          <div>
            <RoomCode code={roomId} />
            <Button 
              isOutlined
              onClick={handleLogoutRoom}
            >
              Encerrar sala
            </Button>
          </div>
        </div>
      </Header>
      <Main>
        <Title>
          <h1>Sala {title}</h1>
          {question.length > 0 && <span>{question.length} pergunta(s)</span>}
        </Title>

        {question.map(questions => {
          return (
            <Question
              key={questions.id}
              content={questions.content}
              author={questions.author}
            >
              <button
                type="button"
                onClick={() => handleDeleteQuestion(questions.id)}
              >
                <img src={deleteImg} alt="remover pergunta" />
              </button>
            </Question>
          );
        })}
      </Main>
    </Container>
  );
}