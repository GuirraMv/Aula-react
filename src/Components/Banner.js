import Imagem from "../asset/img/Praia_vista_da_mata.jpg"
import "./Banner.css"
const Banner = () => {
    return(
        <div className="Banner">
            <img src={Imagem} alt="Banner"/>
        </div>
    )
}

export default Banner