import "./Logo.css";
import logo from "../asset/img/LogotipoFinal.png";

const Logo = () => {
    return(
        <div className="Logo">
            <img src={logo} alt="Logo da Página" width="298px" height="117px" />
        </div>
    )
}


export default Logo;