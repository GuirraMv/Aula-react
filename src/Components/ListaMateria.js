import "./Listamateria.css"
import { useState, useEffect } from "react"
import { NavLink} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Header from "./Header"

const Listamaterias = () => {
    const [materias, setMaterias] = useState(null);
    useEffect(() => {
        fetch("http://localhost/lp2/api/materia/select-all")
        .then((response) => response.json())
        .then((data) => setMaterias(data))
    }, [])

    return (
        <>
        <Header />
        <h2 className="materiatitle">Materias</h2>
        {materias &&
         materias.map((materias) => {
            return (
                <>
                <div className="materiashome" key={materias.id}>
                <Container>
                <Row>
                <Col>
                <NavLink to={"/Materias/"+materias.id}>
                    <div className="cardone">
                    <div className="title">
                    <h2>{materias.title}</h2>
                    </div>
                    <span className="teexto">{materias.descricao}</span> 
                    <img src={materias.photo} alt="surf" />
                    </div>                    
                </NavLink>
                </Col>
                </Row>
                </Container>
                </div>
                </>
            )
        })
    }
        </>
    )
}

export default Listamaterias