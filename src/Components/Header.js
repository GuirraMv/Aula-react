import Menu from "./Menu";
import Logo from "./Logo";
import "./Header.css"

const Header = () => {
    return(
        <header className="Header">
            <Logo />
            <Menu />
        </header>
    )
}

export default Header;