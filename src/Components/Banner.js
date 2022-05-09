import Imagem from "../asset/img/arua.jpg"
import "./Banner.css"
const Banner = () => {
    return(
        <div className="Banner">
            <img src={Imagem} alt="Banner"/>
        </div>
    )
}

export default Banner