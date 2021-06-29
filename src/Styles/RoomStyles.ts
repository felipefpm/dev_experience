import styled from 'styled-components'

export const Container = styled.div`
  
`;


export const Header = styled.header`
  padding: 24px;
  border-bottom: 1px solid #e2e2e2;

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1128px;
    margin: 0 auto;

    > img {
      max-height: 45px;
    }

    > div {
      display: flex;
      gap: 16px;

      button {
        height: 40px;
      }
    }
  }
`;

export const Main = styled.main`
  max-width: 800px;
  margin: 0 auto;

  form {
    textarea {
      width: 100%;
      border: 0;
      padding: 16px;
      border-radius: 8px;
      background-color: #fefefe;
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
      resize: vertical;
      min-height: 130px;
    }
  }

  .form-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;

    .user-info {
      display: flex;
      align-items: center;
      margin-left: 10px;

      img {
        height: 32px;
        width: 32px;
        border-radius: 50%;

      }

      span {
        margin-left: 8px;
        color: #29292e;
        font-weight: 500;
        font-size: 14px;
      }
    }

    > span {
      font-size: 14px;
      color: #737388;
      font-weight: 500;

      button {
        background-color: transparent;
        border: 0;
        color: #48cae4;
        text-decoration: underline;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
      }
    }
  }
`;

export const Title = styled.div`
  display: flex;
  margin: 32px;
  align-items: center;

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    color: #29292e;
  }

  span {
    margin-left: 16px;
    background-color: #0096c7;
    border-radius: 9999px;
    padding: 8px 16px;
    color: #fff;
    font-weight: 500;
    font-size: 14px;
  }
`;