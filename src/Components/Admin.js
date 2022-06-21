import './Admin.css'
import { useState, useEffect } from "react"
import { NavLink} from 'react-router-dom';
import {CardGroup} from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { BsFillPlusCircleFill } from "react-icons/bs";

const Admin = () => {
  
  const [cards, setCards] = useState(null);
  useEffect(() => {
    fetch("http://localhost/lp2/api/card/select-all")
    .then((response) => response.json())
    .then((data) => setCards(data))
  }, [])

  const [materias, setMaterias] = useState(null);
  useEffect(() => {
    fetch("http://localhost/lp2/api/materia/select-all")
    .then((response) => response.json())
    .then((data) => setMaterias(data))
  }, [])

  

  return (
    <>
    <h1 className="Título">Posts</h1>
    <div className='botao'>
    <NavLink to={"/CadastraCards/"}>
      <BsFillPlusCircleFill />
    </NavLink>
    </div>
    <CardGroup className='p-3'>
    {cards &&
      cards.map((cards) => {
        return (
          <Card key={cards.id} className='card posts'> 
            <NavLink to={"/posts/"+cards.id} >
              <Card.Img className='imagem' variant="top" src={cards.photo} />
              <Card.Body className='body'>
                <Card.Title className='titulo'>{cards.title}</Card.Title>
              </Card.Body>
            </NavLink>
          </Card>
        )}
        )
      }
      </CardGroup>
      <h2 className="materiatitle">Matérias</h2>
      {materias &&
        materias.map((materias) => {
          return (

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
            )
        })
      }
    </>
  )
}
export default Admin