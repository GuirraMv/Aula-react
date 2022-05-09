import './Posts.css'

const Posts = (props) => {
     const {id, name, lastname, avatar, status} = props;    
   return (
       <>
       <h1 className="Título">Posts</h1>
    <div className="Posts">

        <div data-id={id} className="cardavatar">
            <img src={avatar} alt={name+' '+lastname} width="76px" height="76px"/>
            <h1>{name} {lastname}</h1>
            <p>{status}</p>
        </div>

        <div data-id={id} className="cardavatar">
            <img src={avatar} alt={name+' '+lastname} width="76px" height="76px"/>
            <h1>{name} {lastname}</h1>
            <p>{status}</p>
        </div>

        <div data-id={id} className="cardavatar">
            <img src={avatar} alt={name+' '+lastname} width="76px" height="76px"/>
            <h1>{name} {lastname}</h1>
            <p>{status}</p>
        </div>
    </div>
    </>
   );
 }

export default Posts