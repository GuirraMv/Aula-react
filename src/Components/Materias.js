import "./Materias.css";
import Header from "./Header";
import Sobre from "./Sobre";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Surf from "../asset/img/surf.jpg"
import {NavLink} from 'react-router-dom';

const Materias = () => {
    return (
    <>
    <Header />
    <div className="Materias">
        <h2>Matérias mais recentes</h2>
        <Container>
        <Row>
        <Col>
            <div className="cardone">
            <NavLink to="/" >
            <div className="title">
                <h2>Atividades Radicais</h2>
            </div>
            <span className="teexto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span> 
            <img src={Surf} alt="surf" />
            </NavLink>
            </div>  
        </Col>
        </Row>
    </Container>
    </div>
    <Sobre />
    </>
    )
}

export default Materias