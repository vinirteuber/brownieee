import { useState } from "react";

const Carousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const previousImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  return (
    <div className="carousel">
      <button onClick={previousImage}>Anterior</button>
      <img src={images[currentImage]} alt="Imagem do Carrossel" />
      <button onClick={nextImage}>Próxima</button>
    </div>
  );
};

export default Carousel;
