import "./Listamaterias.css"
import { useState, useEffect } from "react"
import { NavLink} from 'react-router-dom'
import Header from "./Header"
import Sobre from "./Sobre"

const Listamaterias = () => {
    const [materias, setMaterias] = useState(null);
    useEffect(() => {
        fetch("http://localhost/lp2/api/materia/select-all")
        .then((response) => response.json())
        .then((data) => setMaterias(data))
    }, [])

    return (
        <>
        <Header />
        
        </>
    )
}