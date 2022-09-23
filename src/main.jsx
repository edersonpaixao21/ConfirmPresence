import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
//Home tem q ser maiúsculo pra funcionar no Import
import { Home } from './pages/Home'

//Renderizando o componente "app" dentro do id root na div html
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)
