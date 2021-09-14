import React from "react"
import './styles/Nav.css'
class Nav extends React.Component{
    render(){
        return(
            <nav>
                <div>
                    <h1>Logotipo</h1>
                </div>
                <a href="">Item 1</a>
                <a href="">Item 2</a>
                <a href="">Item 3</a>
                <a href="">Item 4</a>
            </nav>
        )
    }
}

export default Nav;