import React from 'react';

import copyImg from '../../Assets/copy.svg'
import { Container } from './styles';

type RoomCodeProps = {
  code: string
}

function RoomCode(props: RoomCodeProps) {

  function copyRoomCodeToClipBoard() {
    navigator.clipboard.writeText(props.code)
  }

  return (
    <Container onClick={copyRoomCodeToClipBoard}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala {props.code}</span>
    </Container>
  );
};

export default RoomCode;
