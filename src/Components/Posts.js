import "./Posts.css"
import { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'
import Header from "./Header"
import Sobre from "./Sobre"

const Posts = () => {

    const { id } = useParams();
    const [cards, setCards] = useState();

    useEffect(() => {
        fetch ("http://localhost/lp2/api/card/select-by-id/?id="+id)
        .then((response) => response.json())
        .then((data) =>{
            setCards(data)
        } )
    }, [id])

    return(
        <>
        <div>
            {cards &&
            (
                <>
                <div key={cards.id} className="a">
                    <Header />
                    <h2>{cards.title}</h2>
                    <img src={cards.photo} alt="foto" />
                    <div className="texto">{cards.texto}</div>
                    <Sobre />
                </div>
                </>
            ) 
            }
        </div>
        </>
    )
}

export default Posts