import "./Sobre.css"
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
const Sobre = () => {
    return (
        <>
        <div className="Sobre">
        <Navbar>
        <Container fluid id="container">
            <div className="textsobre">
                <h3>Sobre</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </Container>
        </Navbar>
        </div>
        </>
    )
}

export default Sobre