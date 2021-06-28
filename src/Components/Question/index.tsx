import React, { ReactNode } from 'react';

import { Container, Footer } from './styles';

type QuestionProps = {
  content: string,
  author: {
    name: string,
    avatar: string
  }
  children?: ReactNode
}

function Question({
  content,
  author,
  children
}: QuestionProps) {
  return (
    <Container>
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
