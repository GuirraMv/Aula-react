import "./Menu.css";
import { NavLink} from 'react-router-dom';
import { animateScroll as scroll } from "react-scroll";

const Menu = () => {
  
return(
  <div className="Nav">
    <NavLink to="/" className="Navlink">Início</NavLink>
    <NavLink to="/listaposts" className="Navlink">Posts</NavLink>
    <NavLink to="/materias" className="Navlink">Matérias</NavLink>
    <a className="Navlink" onClick={()=>scroll.scrollToBottom()}>Sobre</a>

  </div>
  )
}

export default Menu;
