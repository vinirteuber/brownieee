import Logo from "../assets/logo.png";
import RemoveBG from "../assets/perfil-removebg-preview.png";
import Carrinho from "../assets/carrinho-de-compras-removebg-preview.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <div className="navbar">
        <div className="logo-pesquisa">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="pesquisa">
            <label htmlFor="Pesquisa">
              <input type="search" placeholder="O que você deseja?" />
            </label>
          </div>
        </div>
        <div className="menu">
          <div className="options">
            <ul>
              <Link to="/">
                <li>home</li>
              </Link>
              <li>
                <Link to="/produtos">
                  <li>Produtos</li>
                </Link>
              </li>

              <Link to="/sobrenos">
                <li> Quem nós somos?</li>
              </Link>
            </ul>
          </div>
          <div className="car-conta">
            <div className="conta">
              <Link to="/login">
                {" "}
                <img src={RemoveBG} alt="" />
                <span>Minha Conta</span>
              </Link>
            </div>
            <div className="car">
              <img src={Carrinho} alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
