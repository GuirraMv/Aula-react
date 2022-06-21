import './Postshome.css'
import { useState, useEffect } from "react"
import { NavLink} from 'react-router-dom';
import {CardGroup} from 'react-bootstrap'
import Card from 'react-bootstrap/Card'

const Postshome = (props) => {
  const [cards, setCards] = useState(null);
  useEffect(() => {
    fetch("http://localhost/lp2/api/card/select-all")
    .then((response) => response.json())
    .then((data) => setCards(data))
  }, [])

  return (
    <>
    <NavLink to="posts"><h1 className="Título">Posts</h1></NavLink>  
    {cards &&
      cards.map((cards) => {
        return (
      
        <div className="post" key={cards.id}>
          <CardGroup className='p-3'>
          
          <Card className='card'> {cards.id}
            <NavLink to={"/Posts/"+cards.id} >
              <Card.Img className='imagem' variant="top" src={cards.photo} />
              <Card.Body className='body'>
                <Card.Title className='titulo'>{cards.title}</Card.Title>
              </Card.Body>
            </NavLink>
          </Card>

          <Card className='card'>
            <NavLink to={"/Posts/"+cards.id} >
              <Card.Img className='imagem' variant="top" src={cards.photo} />
              <Card.Body className='body'>
                <Card.Title className='titulo'>{cards.title}</Card.Title>
              </Card.Body>
            </NavLink>
          </Card>

          <Card className='card'>
            <NavLink to={"/Posts/"+cards.id} >
              <Card.Img className='imagem' variant="top" src={cards.photo} />
              <Card.Body className='body'>
                <Card.Title className='titulo'>{cards.title}</Card.Title>
              </Card.Body>
            </NavLink>
          </Card>
          </CardGroup>
        </div> 
        )}
       )
      }
    </>
  )
}
export default Postshome