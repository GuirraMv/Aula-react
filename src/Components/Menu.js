import "./Menu.css";
import { NavLink } from 'react-router-dom';
import { animateScroll as scroll } from "react-scroll";


const Menu = () => {
  
return(
  <div className="Nav">
    <NavLink to="/" className="Navlink">Home</NavLink>
    <NavLink to="Posts" className="Navlink">Posts</NavLink>
    <NavLink to="Matérias" className="Navlink">Matérias</NavLink>
    <NavLink to="/" className="Navlink" onClick={()=>scroll.scrollToBottom()}>Sobre</NavLink>

  </div>
  )
}

export default Menu;
