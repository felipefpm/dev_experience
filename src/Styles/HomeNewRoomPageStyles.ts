import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;

export const LeftScreen = styled.aside`
  flex: 6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #48cae4;
  color: #fff;
  padding: 120px 80px;

  img{
    max-height: 320px;
  }

  strong {
    font: 700 36px 'Poppins', sans-serif;
    line-height: 42px;
    margin-top: 16px;
  }

  p {
    font-size: 24px;
    line-height: 32px;
    margin-top: 16px;
    color: #f8f8f8;
  }

`;

export const RightScreen = styled.main`
  flex: 8;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 32px;

  .main-content {
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 320px;
    align-items: stretch;
    text-align: center;

    > img {
      align-self: center;
      height: 70px;
    }

    h2 {
      font-size: 24px;
      margin: 64px 0 24px;
      font-family: 'Poppins' sans-serif;
    }

    form {
      button, input {
        width: 100%;
      }

      input {
        height: 50px;
        border-radius: 8px;
        border: 1px solid #a8a8b3;
        padding: 0 16px;
        background-color: #ffff;
      }

      button {
        margin-top: 16px;

      }
    }

    p {
      font-size: 14px;
      color: #737380;
      margin-top: 16px;

      a {
        color: #48cae4;
      }
    }

    .create-room {
      display: flex;
      justify-content: center;
      align-items: center;

      margin-top: 64px;
      height: 50px;
      border-radius: 8px;
      font-weight: 500;
      background-color: #ea4355;
      color: #fff;

      cursor: pointer;
      border: 0;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }

      img {
        margin-right: 8px;
      }
    }

    .separetor{
      display: flex;
      align-items: center;
      margin: 32px 0;
      font-size: 14px;
      color: #a8a8b3;

      &::before {
        content: '';
        flex: 1;
        height: 1px;
        background-color: #a8a8a8b3;
        margin-right: 16px;
      }

      &::after {
        content: '';
        flex: 1;
        height: 1px;
        background-color: #a8a8a8b3;
        margin-left: 16px;
      }
    }
  }
`;