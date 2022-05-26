import "./Materias.css"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Surf from "../asset/img/surf.jpg"

const Materias = () => {
    return(
    <>
    <div className="materias">

        <Container >
            <Row>
                <Col>
                    <h2 className="materiatitle">Matérias</h2>
                    
                    <div className="cardone">
                        <div className="title">
                            <h2>Atividades Radicais</h2>
                        </div>
                    <span className="teexto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span> 
                    <img src={Surf} alt="surf" />
                    </div>

                    <div className="cardone">
                        <div className="title">
                            <h2>Atividades Radicais</h2>
                        </div>
                    <span className="teexto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span> 
                    <img src={Surf} alt="surf" />
                    </div>

                    <div className="cardone">
                        <div className="title">
                            <h2>Atividades Radicais</h2>
                        </div>
                    <span className="teexto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span> 
                    <img src={Surf} alt="surf" />
                    </div>
                    
                </Col>
            </Row>
        </Container>
      
    </div>
    </>
    )
}

export default Materias