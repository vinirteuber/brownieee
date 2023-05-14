import Navbar from "../../components/Navbar";

function Sobrenos() {
  const vini = [
    "altura : 1,80",
    "peso : 80kg",
    "idade : 19 anos",
    "curso : Engenharia de Software",
  ];

  return (
    <div>
      <Navbar />
      <h1>Sobrenos</h1>
      <>
        {vini.map((item) => (
          <li>{item}</li>
        ))}
      </>
    </div>
  );
}

export default Sobrenos;
