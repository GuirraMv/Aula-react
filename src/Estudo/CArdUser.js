import './CArdUser.css';

const CardUser = (props) => {
    
    const {id, name, lastname, avatar, status} = props;
        return (
            <div data-id={id} className="cardavatar">
                <img src={avatar} alt={name + ' ' +lastname} widht="76px" height="76px" />
                    <div>
                        <h1>{name} {lastname}</h1>
                        <p>{status}</p>  
                    </div>
            </div>
        )
    }

export default CardUser;