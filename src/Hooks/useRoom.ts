import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { database } from "../Services/firebase";

type QuestionType = {
  id: string,
  author: {
    name: string,
    avatar: string
  },
  content: string,
  isAnswer: boolean,
  isHighligted:boolean,
  likeCount: number,
  likeId: string | undefined
}

type FirebaseQuestions = Record<string, {
  author: {
    name: string,
    avatar: string
  },
  content: string,
  isAnswer: boolean,
  isHighligted:boolean
  likes: Record<string, {
    authorId: string
  }>
}>

export function useRoom(roomId: string) {
  const { user } = useContext(AuthContext)
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState<QuestionType[]>([]);

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
          isAnswer: value.isAnswer,
          likeCount: Object.values(value.likes ?? {}).length,
          likeId: Object.entries(value.likes ?? {}).find(([key, likes]) => likes.authorId === user?.id)?.[0]
        }
      })

      setTitle(databaseRoom.title)
      setQuestion(parsedQuestions)
    })

    return () => {
      roomRef.off('value');
    }
  }, [roomId, user?.id])

  return {
    question, title
  }
}