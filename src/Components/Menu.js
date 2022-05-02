import "./Menu.css";


const Menu = () => {
  return(
  <div className="Nav">
      <ul>
          <li className="Selected"> <a href="#">Home</a> </li>
          <li> <a href="#">Posts</a> </li>
          <li> <a href="#"> Matérias</a></li>
          <li> <a href="#">Sobre</a></li>
      </ul>
  </div>
  )
}

export default Menu;
