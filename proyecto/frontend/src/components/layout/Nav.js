
import {Link  } from "react-router-dom";
import "../../styles/HomePage.css"
// import "../../../src/prueba.css"

const Nav = (props) =>{
    return(
        <nav>
            <div>
                <ul>
                    <li><Link to="/">Home</Link> </li>
                    <li><Link to="/contacto">Contacto</Link> </li>
                    <li><Link to="/galeria">Galeria</Link> </li>
                </ul>
            </div>
        </nav>
    );
}
export default Nav;