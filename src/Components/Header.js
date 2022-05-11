// import Menu from "./Menu";
// import Logo from "./Logo";

// const Header = () => {
//     return(
//     <>
//         <Logo />
//         <Menu />
//     </>
//     )
// }
import Logotipo from "../asset/img/LogotipoFinal.png";
import "./Header.css"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return(
        <div className="Header">
        <Navbar collapseOnSelect expand="lg">
        <Container>
            <Navbar.Brand href="#home">
             <img src={Logotipo} alt="Logo da Página" width="298px" height="117px" /> {/*logo */}
            </Navbar.Brand>
        
        <Nav className="me-auto">
            <Nav.Link id="link" to="/">Home</Nav.Link>
            <Nav.Link id="link" eventKey={2} to="#">Posts</Nav.Link>
            <Nav.Link id="link"  eventKey={3} to="#">Matérias</Nav.Link>
        </Nav>
        </Container>
        </Navbar>
        </div>
    )
}

export default Header;