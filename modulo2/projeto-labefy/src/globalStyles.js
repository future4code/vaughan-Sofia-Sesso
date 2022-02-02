import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
    background-image: linear-gradient(#1c024d, rgb(24,24,24));
    background-repeat: no-repeat;
    background-color: rgb(24,24,24);
    font-family: 'Roboto', sans-serif;
  }
`
 
export default GlobalStyle