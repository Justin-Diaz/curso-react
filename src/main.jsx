//aca se importa la biblioteca de react, que proporciona las herramientas de la misma
import React from 'react'
//esta biblioteca se utiliza para renderizar componentes de react en el DOM del navegador
import ReactDOM from 'react-dom/client'
//importar el componente (App)
import { App } from './App';
//importar estilos a nivel de pagina
import './index.css'

//crea un contenedor de raiz, toma un elemento del DOM y se renderiza dentro de este
const root = ReactDOM.createRoot(document.getElementById('root'));

//renderiza el siguiente contenido dentro de la (constante root)
root.render(
  <App/>
)
