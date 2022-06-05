import "./Menu.css";
import { NavLink, Route, Routes, Link} from 'react-router-dom';
import { animateScroll as scroll } from "react-scroll";
import App from "../App";
import Posts from "./Posts";

const Menu = () => {
  
return(
  <div className="Nav">
    {/* <Routes>
      <Route  path="*" element={<App />} />
      <Route path="Posts/" element={<Posts />} />
    </Routes> */}

    <Link to="/" className="Navlink">Home</Link>
    <Link to="Posts" className="Navlink">Posts</Link>
    <Link to="Matérias" className="Navlink">Matérias</Link>
    <Link to="/" className="Navlink" onClick={()=>scroll.scrollToBottom()}>Sobre</Link>

  </div>
  )
}

export default Menu;
