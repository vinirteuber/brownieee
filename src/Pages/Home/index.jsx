import Carousel from "../../components/Carrossel";
import Navbar from "../../components/Navbar";
import pascoa1 from "../../assets/Pascoa.png";
import pascoa2 from "../../assets/Pascoa2.png";
import pascoa3 from "../../assets/Pascoa3.png";

function Home() {
  const images = [pascoa1, pascoa2, pascoa3];

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
