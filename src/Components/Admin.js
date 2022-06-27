import './Admin.css'
import { useState, useEffect } from "react"
import { useNavigate, NavLink} from 'react-router-dom';
import {Button, CardGroup} from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { BsFillPlusCircleFill, BsPencil, BsFillTrashFill } from "react-icons/bs";

const Admin = () => {

  const navigate = useNavigate();
  
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

  const handleTrashClick = (cardsId) => {
    const formData = new FormData()
    formData.append('id', cardsId)
    const cardDelete = "http://localhost/lp2/api/card/delete"
      fetch(cardDelete, {
        method: 'POST',
        body: formData
      })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message)
        
      })
  }

  const handleTrashMateria = (materiasId) => {
    const formData = new FormData()
    formData.append('id', materiasId)
    const materiaDelete = "http://localhost/lp2/api/materia/delete"
    fetch(materiaDelete, {
      method: 'POST',
      body: formData
    })
    .then((response) => response.json())
    .then((data) => {
      alert(data.message)
    })
  }

  const reloadPage = () => {
    window.location.reload(false)
  }

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
          <>
          <div className="edit">
            <BsPencil onClick={()=> navigate('/editcards/'+cards.id)} style={{cursor: 'pointer'}}/>
          </div>

          <Button 
          onClick={() => {handleTrashClick(cards.id);
          reloadPage()}
          }>
            <BsFillTrashFill style={{cursor: 'pointer'}} />
          </Button>
          
          <Card key={cards.id} className='card posts'> 
            <NavLink to={"/posts/"+cards.id} >
              <Card.Img className='imagem' variant="top" src={cards.photo} />
              <Card.Body className='body'>
                <Card.Title className='titulo'>{cards.title}</Card.Title>
              </Card.Body>
            </NavLink>
          </Card>
          </>
        )}
        )
      }
      </CardGroup>
      <h2 className="materiatitle">Matérias</h2>
      <div className='botao'>
      <NavLink to={"/CadastraMaterias/"}>
        <BsFillPlusCircleFill />
      </NavLink>
      </div>
      {materias &&
        materias.map((materias) => {
          return (
            <>
            <div className="materiashome" key={materias.id}>
            <Container>
            <Row>
            <Col>
            <div className="editmat">
              <BsPencil onClick={()=> navigate('/editmaterias/'+materias.id)} style={{cursor: 'pointer'}}/>
            </div>
            
            <Button 
            onClick={() => {handleTrashMateria(materias.id);
            reloadPage()}
            }>
              <BsFillTrashFill style={{cursor: 'pointer'}} />
            </Button>
              
              <NavLink to={"/Materias/"+materias.id}>
                <div className="cardone">
                <div className="title">
                  <h2>{materias.title}</h2>
                </div>
                <span className="teexto">{materias.descricao}</span> 
                <img src={materias.photo} alt="teste"/>
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
export default Admin