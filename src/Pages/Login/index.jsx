import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { LoginStyle } from "./styles";
import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/login", {
        username,
        password,
      });

      if (response.data && response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("username", username);
        setUsername(username);
        alert("Login realizado com sucesso!");
        navigate("/");
      } else {
        alert("Erro ao realizar login!");
        console.error("Resposta inválida do servidor:", response);
      }
    } catch (error) {
      alert("Erro ao realizar login!");
      console.error("Erro na solicitação:", error);
    }
  };

  return (
    <LoginStyle>
      <form role="form" className="formlogin" onSubmit={handleSubmit}>
        <img src={Logo} alt="Logo" />

        <label htmlFor="email">Username:</label>
        <input
          className="emailusuario"
          id="loginusuario"
          type="text"
          aria-label="Digite seu username"
          placeholder="Digite seu username"
          required
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

        <a href="action.php" className="Senha">
          Esqueci minha senha
        </a>

        <input type="submit" value="Entrar" className="acesso" />

        <p>
          <strong>Não possui cadastro?</strong>
          <Link to="/cadastro">Cadastre-se agora</Link>
        </p>
      </form>
    </LoginStyle>
  );
}

export default Login;
