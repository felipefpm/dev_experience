import React, { FormEvent, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import logo from '../Assets/logo.svg'
import RoomCode from '../Components/RoomCode';
import Button from './../Components/Button/index';
import { Container, Header, Main, Title } from "../Styles/RoomStyles";
import { AuthContext } from './../Contexts/AuthContext';
import { database } from '../Services/firebase';

type Question = {
  id: string,
  author: {
    name: string,
    avatar: string
  },
  content: string,
  isAnswer: boolean,
  isHighligted:boolean
}

type FirebaseQuestions = Record<string, {
  author: {
    name: string,
    avatar: string
  },
  content: string,
  isAnswer: boolean,
  isHighligted:boolean
}>

type RoomParams = {
  id: string;
}

export function Room() {
  const [newQuestion, setNewQuestion] = useState("");
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState<Question[]>([]);

  const params = useParams<RoomParams>();
  const roomId = params.id
  const {user} = useContext(AuthContext);

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);
    
    roomRef.on("value", room => {
      const databaseRoom = room.val();
      const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {};

      const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
        return {
          id: key,
          content: value.content,
          author: value.author,
          isHighligted: value.isHighligted,
          isAnswer: value.isAnswer
        }
      })

      setTitle(databaseRoom.title)
      setQuestion(parsedQuestions);
    })
  }, [roomId])

  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault();

    if (newQuestion.trim() === "") {
      return;
    }
    
    if (!user) {
      throw new Error("You must be logged in")
    }

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar
      },
      isHighligted: false,
      isAnswer: false
    }

    await database.ref(`rooms/${roomId}/questions`).push(question)

    setNewQuestion("");
  }

  return(
    <Container>
      <Header>
        <div className="header-content">
          <img src={logo} alt="logo let me ask" />
          <RoomCode code={roomId} />
        </div>
      </Header>
      <Main>
        <Title>
          <h1>Sala {title}</h1>
          {question.length > 0 && <span>{question.length} pergunta(s)</span>}
        </Title>
        <form onSubmit={handleSendQuestion}>
          <textarea
            placeholder="O que você quer perguntar?"
            onChange={event => setNewQuestion(event.target.value)}
            value={newQuestion}
          />
          <div className="form-footer">
             {user ? (
            <div className="user-info">
              <img src={user.avatar} alt={user.name} />
              <span>{user.name}</span>
            </div>
            ) : (
              <span>Para enviar uma pergunta, <button>faça seu login</button>.</span>
            ) }
            <Button type="submit" disabled={!user}>
              Enviar pergunta
            </Button>
          </div>
        </form>

        {JSON.stringify(question)}
      </Main>
    </Container>
  );
}