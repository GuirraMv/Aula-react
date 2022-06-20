import "./Listaposts.css"
import { useState, useEffect } from "react"
import Card from 'react-bootstrap/Card'
import {CardGroup} from 'react-bootstrap'
import { NavLink} from 'react-router-dom'
import Header from "./Header"
import Sobre from "./Sobre"

const ListaPosts = () => {
  const [cards, setCards] = useState(null);
  useEffect(() => {
    fetch("http://localhost/lp2/api/card/select-all")
    .then((response) => response.json())
    .then((data) => setCards(data))
  }, [])
    
  return (
    <>
    <Header />
    <h2 className="titlepost">Posts mais recentes</h2>
    <CardGroup className='p-3'>
    {cards &&
      cards.map((cards) => {
        return (
        
        
          <Card key={cards.id} className='card posts'>
          <NavLink to={"/Posts/"+cards.id}>
          <Card.Img className='imagem' variant="top" src={cards.photo} />
          <Card.Body className='body'>
          <Card.Title className='titulo'>{cards.title}</Card.Title>
          </Card.Body>
          </NavLink>
          </Card>
       )
      }) 
    }  
    </CardGroup>
    <Sobre />
    </>
  )
}


export default ListaPosts