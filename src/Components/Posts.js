import "./Posts.css"
import { useState, useEffect } from "react"
import Card from 'react-bootstrap/Card'
import {CardGroup} from 'react-bootstrap'
import { NavLink} from 'react-router-dom'
import Header from "./Header"
import Sobre from "./Sobre"
// import arua from '../asset/img/arua.jpg'

const Posts = () => {
  const [cards, setCards] = useState(null);
  useEffect(() => {
    fetch("http://localhost/lp2/api/card/select-all")
    .then((response) => response.json())
    .then((data) => setCards(data))
  }, [])
    
  return (
    <>
    <Header />
    <h2 className="posts">Posts mais recentes</h2>
    {cards &&
      cards.map((cards) => {
        return (
        <div className="posts" key={cards.id}>
          <CardGroup className='p-3'>
          <Card className='card'>
          <NavLink to="Posts" >
          <Card.Img className='imagem' variant="top" src={cards.photo} />
          <Card.Body className='body'>
          <Card.Title className='titulo'>{cards.title}</Card.Title>
          </Card.Body>
          </NavLink>
          </Card>
          </CardGroup>
        </div>
       )
      } ) }
        
        <Sobre />
        </>
    )
}


export default Posts