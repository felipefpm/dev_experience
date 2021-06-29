import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  height: 40px;

  border: 1px solid #48cae4;
  border-radius: 8px;

  overflow: hidden;
  background-color: #fff;
  cursor: pointer;

  div {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: 0 12px;
    background-color: #48cae4;
  }

  span {
    display: block;
    align-self: center;
    flex: 1;
    width: 230px;
    padding: 0 16px 0 12px;
    font-size: 14px;
    font-weight: 500;
  }
`;
