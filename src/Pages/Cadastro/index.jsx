import { LoginStyle } from "../Login/styles";
import Logo from "../../assets/logo.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Cadastro() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfPass] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:3000/signup", {
        email,
        username,
        password,
        confirmPassword,
      });

      alert("Usuário criado com sucesso!");
      navigate("/login");
    } catch (error) {
      alert("Erro ao realizar login!");
      console.error("Erro na solicitação:", error);
    }
  };
  return (
    <LoginStyle>
      <form role="form" className="formlogin" onSubmit={handleSubmit}>
        <img src={Logo} alt="Logo" />

        <label htmlFor="email">E-mail:</label>
        <input
          className="emailusuario"
          id="loginusuario"
          type="email"
          aria-label="Digite seu email"
          placeholder="Digite seu email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="email">Username:</label>
        <input
          className="emailusuario"
          id="loginusuario"
          type="text"
          aria-label="Digite seu username"
          placeholder="Digite o username que quer utilizar"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="senha">Senha:</label>
        <input
          className="senhausuario"
          id="loginusuario"
          type="password"
          aria-label="senha"
          placeholder="Insira sua senha"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <label htmlFor="senha">Confirme a sua senha:</label>
        <input
          className="senhausuario"
          id="loginusuario"
          type="password"
          aria-label="senha"
          placeholder="confirme a sua senha"
          required
          onChange={(e) => setConfPass(e.target.value)}
        />

        <a href="action.php" className="Senha">
          Esqueci minha senha
        </a>

        <input type="submit" value="Entrar" className="acesso" />

        <p>
          <strong>Ja possui um cadastro?</strong>
          <Link to="/login">Entre agora</Link>
        </p>
      </form>
    </LoginStyle>
  );
}

export default Cadastro;
