import "./Menu.css";
import { NavLink, Route, Routes } from 'react-router-dom';
import { animateScroll as scroll } from "react-scroll";

const Menu = () => {
  
return(
  <div className="Nav">
    {/* <Routes>
      {/* <Route  path="/" element={<App />} />
      <Route path="Posts" element={<Posts />}></Route>
    </Routes> */}

    <NavLink to="/" className="Navlink" activeClassName="is-active">Home</NavLink>
    <NavLink to="/Posts" className="Navlink">Posts</NavLink>
    <NavLink to="Matérias" className="Navlink">Matérias</NavLink>
    <NavLink to="/" className="Navlink" onClick={()=>scroll.scrollToBottom()}>Sobre</NavLink>

  </div>
  )
}

export default Menu;
