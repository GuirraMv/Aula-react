import './Postshome.css'
import Card from 'react-bootstrap/Card'
import {CardGroup} from 'react-bootstrap'
import arua from '../asset/img/arua.jpg'
import { NavLink} from 'react-router-dom';

const Postshome = (props) => {
    //  const {id, name, lastname, avatar, status} = props;
    return(
    <>
    <NavLink to="posts" ><h1 className="Título">Posts</h1></NavLink>
    <div className="Posts">   
      <CardGroup className='p-3'>
        <Card className='card'>
        <NavLink to="Posts" >
          <Card.Img className='imagem' variant="top" src={arua} />
          <Card.Body className='body'>
          <Card.Title className='titulo'>Prainha</Card.Title>
          </Card.Body>
        </NavLink>
        </Card>
      </CardGroup>
    </div>

      
    </>     
  )
}

export default Postshome