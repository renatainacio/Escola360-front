import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #FCFBFA;
    font-family: 'Lexend Deca', sans-serif;
    margin: 0;
    padding: 0;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  input {
    width: 300px;
    height: 45px;
    border-radius: 20px;
    border: 1px solid #E0E0E0;
    margin: 8px 0;
    padding: 0 16px;
    font-size: 14px;
    outline: none;
  }

  ::placeholder {
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 550;
    color: #8F8F8F;
    font-size: 16px;
  }

  button {
    width: 300px;
    height: 45px;
    border-radius: 20px;
    background-color: #142B63;
    font-weight: 600;
    font-size: 18px;
    color: white;
    border: none;
    margin-top: 16px;
    margin-bottom: 16px;
    cursor: pointer;
  }

  button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  a {
    color: #142B63;
    font-size: 16px;
    margin-top: 16px;
    text-decoration: none;
  }
  p {
    font-size: 16px;
  }

  `;


export default GlobalStyle;