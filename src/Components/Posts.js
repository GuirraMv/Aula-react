import "./Posts.css"
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const Posts = (props) => {

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
                
            ) 
            }
        </div>
        </>
    )
}

export default Posts