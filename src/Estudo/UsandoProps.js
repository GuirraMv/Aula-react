import BemVindo from "./CardUser.js";
import './UsandoProps.css';

const user = () => {

    const users = [{
        id: 123,
        name: "Matheus",
        lastname: "Guirra",
        avatar: "https://avatars.githubusercontent.com/u/102247460?v=4",
        status: "testando"
    },{
        id: 124,
        name: "Guirra",
        lastname: "Matheus",
        avatar: "https://avatars.githubusercontent.com/u/102247460?v=4",
        status: "testando de novo"
    }]

    return(
        <div className="listausers">
            {users && users.map((user) => {
                return <BemVindo {...user} />    
            })}
        </div>
    )

}

export default UsandoProps;