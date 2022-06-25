import { useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditCards = () => {
    
    const { cardsId } = useParams()
    const [cards, setCards] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        fetch("http://localhost/lp2/api/card/select-by-id/?id="+cardsId)
        .then((response) => response.json())
        .then((data) => setCards(data))
    }, [cardsId])

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append('id', cardsId)
        formData.append('photo', event.target[0].value)
        formData.append('title', event.target[1].value)
        formData.append('descricao', event.target[2].value)
        formData.append('texto', event.target[3].value)
        fetch(
            "http://localhost/lp2/api/card/update",
            {method: 'POST', body: formData}
        )
        .then((response) => response.json())
        .then((data) => {
            if (data?.cards?.id){
                navigate('../')
            } else if(data?.message){
                alert(data.message)
                navigate('/admin')
            } else {
                console.log(data)
            }
        })
    }

    return(
        <>
        {cards ? (
            <form onSubmit={(event) => handleSubmit(event)}>
                <label>photo:</label><input type="text" name="photo" defaultValue={cards.photo} />
                <label>title:</label><input type="text" name="title" defaultValue={cards.title} />
                <label>descrição</label><input type="text" name="descricao" defaultValue={cards.descricao} />
                <label>texto:</label><input type="text" name="texto" defaultValue={cards.texto} />
                <input type="submit" value="Editar" />
            </form>
        )
        :
            (<p>Card não encontrado!</p>)
        }
        </>
    )
}

export default EditCards