import React, { ReactNode } from 'react';

import { Container, Footer } from './styles';

type QuestionProps = {
  content: string,
  author: {
    name: string,
    avatar: string
  }
  children?: ReactNode
  isAnswer?: boolean,
  isHighligted?: boolean
}

function Question({
  content,
  author,
  isAnswer = false,
  isHighligted = false,
  children
}: QuestionProps) {
  return (
    <Container className={`${isAnswer ? 'answered' : ''} ${isHighligted ? 'highligted' : ''}`}>
      <p>{content}</p>
      <Footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>
          {children}
        </div>
      </Footer>
    </Container>
  );
};

export default Question;
