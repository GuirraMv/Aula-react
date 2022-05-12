import './Posts.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

const Posts = (props) => {
    //  const {id, name, lastname, avatar, status} = props;
    return(
        <>
        <h1 className="Título">Posts</h1>
     
     <div className="Posts">
         
         <CardGroup>
   <Card>
     <Card.Img variant="top" src="holder.js/100px160" />
     <Card.Body>
       <Card.Title>Card title</Card.Title>
       <Card.Text>
         This is a wider card with supporting text below as a natural lead-in to
         additional content. This content is a little bit longer.
       </Card.Text>
     </Card.Body>
     
     
     <Card.Footer>
       <small className="text-muted">Last updated 3 mins ago</small>
     </Card.Footer>
   </Card>
   <Card>
     <Card.Img variant="top" src="holder.js/100px160" />
     <Card.Body>
       <Card.Title>Card title</Card.Title>
       <Card.Text>
         This card has supporting text below as a natural lead-in to additional
         content.{' '}
       </Card.Text>
     </Card.Body>
     <Card.Footer>
       <small className="text-muted">Last updated 3 mins ago</small>
     </Card.Footer>
   </Card>
   <Card>
     
     <Card.Img variant="top" src="holder.js/100px160" />
     <Card.Body>
       <Card.Title>Card title</Card.Title>
       <Card.Text>
         This is a wider card with supporting text below as a natural lead-in to
         additional content. This card has even longer content than the first to
         show that equal height action.
       </Card.Text>
     </Card.Body>
     <Card.Footer>
       <small className="text-muted">Last updated 3 mins ago</small>
     </Card.Footer>
   </Card>
 </CardGroup>

 </div>
 </>     
    )
}

export default Posts