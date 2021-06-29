import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background-color: #48cae4;
  color: #fff;
  padding: 0 32px;

  cursor: pointer;
  border: 0;

  transition: filter 0.2s;

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &.outlined {
    background-color: #FFF;
    border: 1px solid #48cae4;
    color: #48cae4;
  }
`;
