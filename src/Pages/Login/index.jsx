import Logo from "../../assets/logo.png";
import { LoginStyle } from "./styles";

function Login() {
  return (
    <LoginStyle>
      <form role="form" className="formlogin">
        <img src={Logo} />

        <label htmlFor="Senha:"></label>
        <input
          className="emailusuario"
          id="loginusuario"
          type="email"
          aria-label="Digite seu email"
          placeholder="Digite seu email"
          required
        />
        <label htmlFor="Senha:"></label>
        <input
          className="senhausuario"
          id="login usuario"
          type="password"
          aria-label="senha"
          placeholder="Insira sua senha"
          required
        />
        <a href="action.php" className="Senha">
          Esqueci minha senha
        </a>
        <input type="submit" value="Entrar" className="acesso" />
        <p>
          <strong>Não possui cadastro?</strong>
          <a href="Paginacadastro.html">Cadastre-se agora</a>
        </p>
      </form>
    </LoginStyle>
  );
}

export default Login;
