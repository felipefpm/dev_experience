import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fefefe;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 24px;
  margin-top: 8px;

  &.highligted {
    background-color: #f4f0ff;
    border: 1px solid #48cae4;
  }

  &.answered {
    background-color: #dbdcdd;
  }

  p{
    color: #29292e;
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;

  > div {
    display: flex;
    gap: 16px;
  }

  .user-info {
    display: flex;
    align-items: center;

    img {
      height: 32px;
      width: 32px;
      border-radius: 50%;

    }

    span {
      margin-left: 8px;
      color: #737380;
      font-size: 14px;
    }
  }

  button {
    background-color: transparent;
    border: 0;
    cursor: pointer;
    transition: filter 0.2s;


    &.like-button {
      display: flex;
      align-items: flex-end;
      color: #737380;
      gap: 8px;

      &.liked {
        color: #48cae4;

        svg path {
          stroke: #48cae4;
        }
      }
    }

    &:hover {
      filter: brightness(0.7);
    }
  }
`;
