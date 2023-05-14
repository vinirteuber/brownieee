import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Minhaconta() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  function cleanStorage() {
    setUsername("");
    localStorage.clear();
    alert("Logout realizado com sucesso!");
    navigate("/");
  }

  return (
    <>
      <h1>oioi, {username} </h1>
      <button onClick={cleanStorage}>SAIR</button>
    </>
  );
}

export default Minhaconta;
