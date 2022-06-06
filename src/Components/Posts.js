import "./Posts.css"
import Header from "./Header"
import Sobre from "./Sobre"
import Card from 'react-bootstrap/Card'
import {CardGroup} from 'react-bootstrap'
import arua from '../asset/img/arua.jpg'
import { NavLink} from 'react-router-dom';

const Posts = () => {
    return (
        <>
        <Header />
        <div className="posts">
        <h2>Posts mais recentes</h2>

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
        <Sobre />
        </>
    )
}

export default Posts