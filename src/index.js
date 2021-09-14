// const element = document.createElement('h1');
// element.innerText ="Hello React..";
// const container = document.getElementById("root");
// container.appendChild(element);

import React from "react" // agregar la libreria 
import ReactDOM from 'react-dom' //react dom
// import Exercise from "./components/pages/Exercise"
import Nav from "./components/Nav"
import 'bootstrap/dist/css/bootstrap.css'

import App from './components/App'
const container = document.getElementById("root");


ReactDOM.render(<App/>,container)
