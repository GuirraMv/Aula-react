import "./Menu.css";
import { NavLink} from 'react-router-dom';

const Menu = () => {
  return(
  <div className="Nav">
    <NavLink to="/" className="Navlink">Início</NavLink>
    <NavLink to="/listaposts" className="Navlink">Posts</NavLink>
    <NavLink to="/listamaterias" className="Navlink">Matérias</NavLink>
    <NavLink to="/sobre" className="Navlink">Sobre</NavLink>
  </div>
  )
}

export default Menu;