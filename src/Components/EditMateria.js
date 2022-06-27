import { useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditMaterias = () => {
    
    const { materiasId } = useParams()
    const [materias, setMaterias] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        fetch("http://localhost/lp2/api/materia/select-by-id/?id="+materiasId)
        .then((response) => response.json())
        .then((data) => setMaterias(data))
    }, [materiasId])

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append('id', materiasId)
        formData.append('photo', event.target[0].value)
        formData.append('title', event.target[1].value)
        formData.append('descricao', event.target[2].value)
        formData.append('texto', event.target[3].value)
        fetch(
            "http://localhost/lp2/api/materia/update",
            {method: 'POST', body: formData}
        )
        .then((response) => response.json())
        .then((data) => {
            if (data?.materias?.id){
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
        {materias ? (
            <form onSubmit={(event) => handleSubmit(event)}>
                <label>photo:</label><input type="text" name="photo" defaultValue={materias.photo} />
                <label>title:</label><input type="text" name="title" defaultValue={materias.title} />
                <label>descrição</label><input type="text" name="descrição" defaultValue={materias.descrição} />
                <label>texto:</label><input type="text" name="texto" defaultValue={materias.texto} />
                <input type="submit" value="Editar" />
            </form>
        )
        :
            (<p>Matéria não encontrado!</p>)
        }
        </>
    )
}

export default EditMaterias