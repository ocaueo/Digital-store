import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import 'boxicons';
import './index.css';
import logo from "./assets/logo.png";

const Header = () => {
    const { isLogged, setIsLogged } = useContext(AuthContext);
    const navigate = useNavigate();
    return (
        <header>
            <div className="logo">
            <Link to={'/'}>
            <img src={logo} alt="Digital Store" />
            </Link>
            </div>
            <div className="busca">
                <input type="text" placeholder="Pesquisar produto..." />
                <box-icon name="search"></box-icon>
            </div>
            <div className="acoes">
                <Link to={'/cadastro'}>Cadastre-se</Link>
                <Link to={'/login'}>Entrar</Link>
                <box-icon name= "cart"></box-icon>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/produtos'}>Produtos</Link>
                    </li>
                    <li>
                        <Link to={'/categorias'}>Categorias</Link>
                    </li>
                    {
                        isLogged && (
                            <li>
                                <Link to={'/meus-pedidos'}>Meus Pedidos</Link>
                            </li>
                        )
                    }
                </ul>
            </nav>
        </header>
    );
}

export default Header;