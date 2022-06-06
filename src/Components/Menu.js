import "./Menu.css";
import { NavLink} from 'react-router-dom';
import { animateScroll as scroll } from "react-scroll";

const Menu = () => {
  
return(
  <div className="Nav">
    {/* <Routes>
      <Route  path="*" element={<App />} />
      <Route path="Posts/" element={<Posts />} />
    </Routes> */}

    <NavLink to="/" className="Navlink">Home</NavLink>
    <NavLink to="posts" className="Navlink">Posts</NavLink>
    <NavLink to="materias" className="Navlink">Matérias</NavLink>
    <NavLink to="/" className="Navlink" onClick={()=>scroll.scrollToBottom()}>Sobre</NavLink>

  </div>
  )
}

export default Menu;
