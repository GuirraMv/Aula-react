import "./Logo.css";
import Logotipo from "../asset/img/LogotipoFinal.png";

const Logo = () => {
    return(
        <div className="Logo">
            <img src={Logotipo} alt="Logo da Página" />
        </div>
    )
}


export default Logo;