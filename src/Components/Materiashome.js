import "./Materiashome.css"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {NavLink} from 'react-router-dom';
import { useEffect, useState } from "react"

const Materiashome = () => {
    const [materias, setMaterias] = useState(null);
    useEffect(()=> {
        fetch("http://localhost/lp2/api/materia/select-all")
        .then((response) => response.json())
        .then((data) => setMaterias(data))
    }, [])

    return(
    <>
    <NavLink to="materias" ><h2 className="materiatitle">Matérias</h2></NavLink>
    {materias &&
    materias.map((materia) => {
        return(
        <div className="materiashome" key={materia.id}>
        <Container>
        <Row>
        <Col>
            <NavLink to={"/Materias/"+materia.id}>
            <div className="cardone">
                <div className="title">
                    <h2>{materia.title}</h2>
                </div>
                <span className="teexto">{materia.descricao}</span> 
                <img src={materia.photo} alt="surf" />
            </div>                    
            </NavLink>
        </Col>
        </Row>
    </Container>
    </div>
        )
        })
    }
    
    
    </>
    )
}

export default Materiashome