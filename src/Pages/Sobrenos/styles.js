import styled from "styled-components";

export const SobreStyle = styled.div`
  body {
    background-color: #e8e5e0;
  }

  .navbar {
    background-color: #3d2f2b;
    height: 150px;
  }

  .logo-pesquisa {
    width: 100%;
    height: 70%;
    display: flex;
  }

  .logo {
    width: 180px;
    height: 105px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 25px;
  }

  .logo img {
    width: 180px;
    height: 105px;
  }

  .logo-pesquisa .pesquisa {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
  }

  .logo-pesquisa .pesquisa input {
    height: 30px;
    width: 200px;
    padding: 15px;
    background-color: #3d2f2b;
  }

  .logo-pesquisa .pesquisa label {
    margin-right: 20px;
    padding-bottom: 9px;
    width: 200px;
    border-bottom: 2px solid #fff;
    background-color: #3d2f2b;
  }

  .logo-pesquisa .pesquisa input::placeholder {
    color: #fff;
    background-color: #3d2f2b;
  }

  .menu {
    display: flex;
    align-items: center;
    width: 100%;
    height: 30%;
    background-color: #fff;
  }

  .options {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 45px;
    width: 750px;
  }

  .car-conta {
    height: 45px;
    width: 750px;
    display: flex;
    justify-content: flex-end;
  }

  .conta {
    height: 45px;
    margin-right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .conta a {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    color: #000;
  }

  .conta img {
    margin-right: 10px;
    height: 25px;
    overflow: cover;
  }

  .car {
    height: 45px;
    width: 50px;
    display: flex;
    align-items: center;
  }

  .car img {
    height: 30px;
    overflow: cover;
  }

  .menu .options ul,
  .menu .options li {
    display: flex;
    list-style: none;
    margin-left: 50px;
  }

  .menu .options li a {
    display: block;
    color: #000;
    text-decoration: none;
    padding-left: 10px;
    text-transform: uppercase;
    font-weight: 500;
  }

  section {
    margin: 8px;
  }

  .texto {
    display: flex;
    flex-direction: column;
    margin-left: 70px;
  }

  .texto h1 {
    margin-left: 30px;
    font-size: 45px;
    text-shadow: 0px 1px 1px #3d2f2b;
  }

  .texto p {
    width: 700px;
    font-size: 18px;
    margin-left: 5px;
    font-style: italic;
    color: #3d2f2c;
  }

  .conteudo {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .banner {
    justify-content: center;
    align-items: center;
  }

  .banner img {
    width: 700px;
    padding: 30px;
    object-fit: contain;
  }

  .bannerimg {
    display: flex;
    width: 50%;
    justify-content: center;
    align-items: center;
  }
`;
