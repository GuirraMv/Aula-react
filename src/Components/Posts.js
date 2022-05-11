import './Posts.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Posts = (props) => {
     const {id, name, lastname, avatar, status} = props;    
   return (
       <>
       <h1 className="Título">Posts</h1>
    <div className="Posts">
        <Container>
        <Row>
            <Col sm>
        <div data-id={id} className="cardavatar">
            <img src={avatar} alt={name+' '+lastname} width="76px" height="76px"/>
            <h1>{name} {lastname}</h1>
            <p>{status}</p>
        </div>
        </Col>

        <Col sm>
        <div data-id={id} className="cardavatar">
            <img src={avatar} alt={name+' '+lastname} width="76px" height="76px"/>
            <h1>{name} {lastname}</h1>
            <p>{status}</p>
        </div>
        </Col>

        <Col sm>
        <div data-id={id} className="cardavatar">
            <img src={avatar} alt={name+' '+lastname} width="76px" height="76px"/>
            <h1>{name} {lastname}</h1>
            <p>{status}</p>
        </div>
        </Col>


        <Col sm>
        <div data-id={id} className="cardavatar">
            <img src={avatar} alt={name+' '+lastname} width="76px" height="76px"/>
            <h1>{name} {lastname}</h1>
            <p>{status}</p>
        </div>
        </Col>

        <Col sm>
        <div data-id={id} className="cardavatar">
            <img src={avatar} alt={name+' '+lastname} width="76px" height="76px"/>
            <h1>{name} {lastname}</h1>
            <p>{status}</p>
        </div>
        </Col>

        <Col sm>
        <div data-id={id} className="cardavatar">
            <img src={avatar} alt={name+' '+lastname} width="76px" height="76px"/>
            <h1>{name} {lastname}</h1>
            <p>{status}</p>
        </div>
        </Col>
        </Row>
        </Container>
    </div>
    </>
   );
 }

export default Posts