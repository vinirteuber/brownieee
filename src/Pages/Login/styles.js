import styled from "styled-components";

export const LoginStyle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  body {
    width: 100%;
    height: 100vh;
    background-color: #e8e5e0;
    font-family: "Inter", sans-serif;
    margin: 60px;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  form {
    width: 400px;
  }

  .caixa {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    width: 100%;
    height: 100vh;
    background-color: #e8e5e0;
  }

  .formlogin {
    display: flex;
    flex-direction: column;
    background-color: #544541;
    border-radius: 7px;
    padding: 40px;
    box-shadow: 10px 10px 40px rgb(0, 0, 0, 0.4);
    gap: 5px;
  }

  .formlogin img {
    width: 100%;
    height: 20vh;
  }

  .formlogin p {
    display: inline-block;
    font-size: 14px;
    color: #e8e5e0;
    margin-bottom: 25px;
  }

  .formlogin input {
    padding: 15px;
    font-size: 14px;
    border: 1px solid #ccc;
    margin-bottom: 20px;
    margin-top: 5px;
    border-radius: 4px;
    transition: all linear 160ms;
    outline: none;
  }

  .formlogin input:focus {
    border: 1px solid #544541;
  }

  .formlogin label {
    font-size: 14px;
    font-weight: 600;
    color: #e8e5e0;
  }

  .formlogin a {
    display: inline-block;
    margin-bottom: 20px;
    font-size: 13px;
    color: #e8e5e0;
    transition: all linear 160ms;
  }

  .formlogin a:hover {
    color: #e8e5e0;
  }

  .acesso {
    background-color: #e8e5e0;
    color: #171017;
    font-size: 14px;
    font-weight: 600;
    border: none !important;
    transition: all linear 160ms;
    cursor: pointer;
    margin: 0 !important;
  }

  .acesso:hover {
    transform: scale(1.05);
    background-color: #544541;
  }
`;
