import Carousel from "../../components/Carrossel";
import Navbar from "../../components/Navbar";

function Home() {
  const images = [
    "https://acd157832557f8c960da-d094371d43d33265178d3ba876698c19.ssl.cf1.rackcdn.com/PostImagem/34019/por-que-eacute-tatildeo-importante-editar-fotos-nos-dias-de-hoje_o1e5fvus1orf3len19flsah1t1og.jpg",
    "https://www.escolhaviajar.com/wp-content/uploads/2021/01/fotos-da-franca-torre-eiffel-8.jpg",
    "https://acd157832557f8c960da-d094371d43d33265178d3ba876698c19.ssl.cf1.rackcdn.com/PostImagem/34019/por-que-eacute-tatildeo-importante-editar-fotos-nos-dias-de-hoje_o1e5fvus1orf3len19flsah1t1og.jpg",
    "https://www.escolhaviajar.com/wp-content/uploads/2021/01/fotos-da-franca-torre-eiffel-8.jpg",
  ];

  return (
    <>
      <div>
        <Navbar />
        <h1>Home</h1>
        <Carousel images={images} />
      </div>
    </>
  );
}

export default Home;
