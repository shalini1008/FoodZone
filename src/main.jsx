import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
 }
  body{
    background-color: #323343;
    color:white;
    min-heigh:100vh;
  }
`;
 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle/>
    <App />
  </StrictMode>,
)
