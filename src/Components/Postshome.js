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
        {/* card1 */}
        <Card className='card'>
        <NavLink to="Posts" >
          <Card.Img className='imagem' variant="top" src={arua} />
          <Card.Body className='body'>
          <Card.Title className='titulo'>Prainha</Card.Title>
          </Card.Body>
        </NavLink>
        </Card>
        
        {/* card2 */}
        <Card className='card'>
        <NavLink to="/" >
          <Card.Img className='imagem' variant="top" src={arua} />
          <Card.Body className='body'>
          <Card.Title className='titulo'>Prainha</Card.Title>
          </Card.Body>
        </NavLink>
        </Card>
        {/* card3 */}
        <Card className='card'>
        <NavLink to="/" >
          <Card.Img className='imagem' variant="top" src={arua} />
          <Card.Body className='body'>
              <Card.Title className='titulo'>Prainha</Card.Title>
            </Card.Body>
            </NavLink>
        </Card>
      </CardGroup>
    </div>

    <div className="Posts">
      <CardGroup className='p-3'>
      {/* card4 */}
        <Card className='card'>
        <NavLink to="/" >
          <Card.Img className='imagem' variant="top" src={arua} />
          <Card.Body className='body'>
          <Card.Title className='titulo'>Prainha</Card.Title>
          </Card.Body>
        </NavLink>
        </Card>
          {/* card5 */}
        <Card className='card'>
        <NavLink to="/" >
          <Card.Img className='imagem' variant="top" src={arua} />
          <Card.Body className='body'>
          <Card.Title className='titulo'>Prainha</Card.Title>
          </Card.Body>
        </NavLink>
        </Card>
          {/* card6 */}
        <Card className='card'>
        <NavLink to="/" >
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