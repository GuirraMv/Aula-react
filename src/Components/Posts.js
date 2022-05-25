import './Posts.css'
import Card from 'react-bootstrap/Card'
import {CardGroup, Container} from 'react-bootstrap'
import arua from '../asset/img/arua.jpg'

const Posts = (props) => {
    //  const {id, name, lastname, avatar, status} = props;
    return(
    <>
    <h1 className="Título">Posts</h1>
    
    <div className="Posts">   
      <CardGroup className='p-3'>
        {/* card1 */}
        <Card className='card'>
          <Card.Img className='imagem' variant="top" src={arua} />
          <Card.Body className='body'>
          <Card.Title className='titulo'><a href="#">Prainha</a></Card.Title>
          </Card.Body>
        </Card>
        {/* card2 */}
        <Card className='card'>
          <Card.Img className='imagem' variant="top" src={arua} />
          <Card.Body className='body'>
          <Card.Title className='titulo'><a href="#">Prainha</a></Card.Title>
          </Card.Body>
        </Card>
        {/* card3 */}
        <Card className='card'>
          <Card.Img className='imagem' variant="top" src={arua} />
          <Card.Body className='body'>
              <Card.Title className='titulo'><a href="#">Prainha</a></Card.Title>
            </Card.Body>
          </Card>
          </CardGroup>
        </div>

      <div className="Posts">
        <CardGroup className='p-3'>
           {/* card4 */}
          <Card className='card'>
            <Card.Img className='imagem' variant="top" src={arua} />
            <Card.Body className='body'>
            <Card.Title className='titulo'><a href="#">Prainha</a></Card.Title>
            </Card.Body>
          </Card>
          {/* card5 */}
          <Card className='card'>
            <Card.Img className='imagem' variant="top" src={arua} />
            <Card.Body className='body'>
            <Card.Title className='titulo'><a href="#">Prainha</a></Card.Title>
            </Card.Body>
          </Card>
          {/* card6 */}
          <Card className='card'>
            <Card.Img className='imagem' variant="top" src={arua} />
            <Card.Body className='body'>
            <Card.Title className='titulo'><a href="#">Prainha</a></Card.Title>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>

      
    </>     
  )
}

export default Posts