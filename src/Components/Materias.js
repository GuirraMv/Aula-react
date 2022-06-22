import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./Materias.css";
import Header from "./Header";
import Sobre from "./Sobre";


const Materias = () => {

    const { id } = useParams();
    const [materias, setMaterias] = useState();

    useEffect(() => {
        fetch("http://localhost:/lp2/api/materia/select-by-id/?id="+id)
        .then((response) => response.json())
        .then((data) => {
            setMaterias(data)
        })
    }, [id] )
    
    return (
        <>
        <div>
            {materias &&
            (
            <>
            <Header />
            <div key={materias.id} className="materias">
                <img src={materias.photo} alt="foto"/>
                <h2>{materias.title}</h2>
                <div className="texto">{materias.texto}</div>        
            </div>
            <Sobre />
        </>
        )
    }
    </div>
    </>
    )
}

export default Materias