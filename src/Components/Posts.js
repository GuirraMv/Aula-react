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
                <div key={cards.id} className="postsbk">
                    <Header />
                    <h2 className="titlecard">{cards.title}</h2>
                    <div className="foto">
                        <img src={cards.photo} alt="foto" />
                    </div>
                    <div className="textocard">{cards.texto}</div>
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