//arquivo criado só como exemplo, não faz parte do projeto

//importando com css
import "./addimagens.css";
//importar imagens jpeg, png, gif, svg, jpeg, webp
import mountain from "../asset/img/mountain.webp" ///exemplo imagem nao baixada nao ira aparecer nada
import logo from "../assets/img/react-logo.svg"  //exemplo imagem nao baixada
//importar svg como component
import { ReactComponents as Logo } from "../assets/img/react-logo.svg"

const AddImage = () => {
    return(
        <div className="bgimagens">
            {/*Usando imagens svg como components */}
            <Logo alt="Logo React" widht="400" height="400" /> {/*chamando component logo e definindo seu tamanho*/}
            {/*Usando imagens importadas com tag img */}
            <img src={logo} alt="Logo React" widht="300" height="200"/>  {/*medidas em px */}
            <img src={mountain} alt="mountain" widht="300" height="200" />
        </div>
    )
}

export default AddImage;