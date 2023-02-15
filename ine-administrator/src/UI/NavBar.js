import logo from '../img/logo.png';

const NavBar = () => {
    return(
        <nav className="navbar-ine">
            <img className="logo" src={logo} alt="Logo Votaciones" />
        </nav>
    );
}

export default NavBar;