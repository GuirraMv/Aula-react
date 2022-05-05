import Imagem from "../asset/img/santoantonio2.jpg"
import "./Banner.css"
const Banner = () => {
    return(
        <div className="Banner">
            <img src={Imagem} alt="Banner"/>
        </div>
    )
}

export default Banner