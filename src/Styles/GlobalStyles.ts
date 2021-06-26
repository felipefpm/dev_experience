import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: #f8f8f8;
    color: #292929;
  }

  border-style, input, button, textarea {
    font: 400 16px 'Roboto', sans-serif;

  }
`;