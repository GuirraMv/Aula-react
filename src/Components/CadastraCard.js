import { useRef } from "react"
import { useNavigate } from "react-router-dom"


const CadastraCards = ({cards, setCards}) => {
    const photoRef = useRef()
    const titleRef = useRef()
    const descricaoRef = useRef()
    const textoRef = useRef()
    const navigate = useNavigate()
    

    const handleSubmit = (event) => {
      event.preventDefault()
      const formData = new FormData()
      formData.append('photo', event.target[0].value)
      formData.append('title', event.target[1].value)
      formData.append('descricao', event.target[2].value)
      formData.append('texto', event.target[3].value)

      fetch("http://localhost/lp2/api/card/create", {
        method: 'POST',
        body: formData,
      })
      .then((response) => response.json())
      .then((data) => {
        photoRef.current.value = ''
        titleRef.current.value =''
        descricaoRef.current.value = ''
        textoRef.current.value = ''
        alert(data.message)
        navigate('/admin')
      })
    }

    return (
        <>
        <h1>Cadastrar Posts</h1>
        <form onSubmit={(event) => handleSubmit(event)}>
            <label>Photo:</label><input ref={photoRef} type="text" name="photo" />
            <label>Title:</label><input ref={titleRef} type="text" name="title" />
            <label>Descrição:</label><input ref={descricaoRef} type="text" name="descrição" />
            <label>Texto:</label><input ref={textoRef} type="text" name="texto" />
            <input type="submit" value="Cadastrar" />
        </form>
        </>
    )
  }

export default CadastraCards