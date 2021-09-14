import React from "react"
import LaucherImg from '../images/button.png'
import './styles/Button.css'
import {Link} from 'react-router-dom'
function Launcher(props){
return(
    <div className="container launcher">
   <Link to="/exercise/new"> <img src={LaucherImg} /></Link>
    </div>
)
}
export default Launcher;