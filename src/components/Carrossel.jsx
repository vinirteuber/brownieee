import { useState, useEffect } from "react";
import { CarouselStyle } from "./stylescomp";

const Carousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const previousImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 2500); // Altere o intervalo para ajustar a velocidade de transição das imagens (3000 = 3 segundos)

    return () => clearInterval(interval);
  }, [currentImage, images.length]);

  return (
    <CarouselStyle>
      <div className="carousel">
        <button onClick={previousImage}>Anterior</button>
        <img src={images[currentImage]} alt="Imagem do Carrossel" />
        <button onClick={nextImage}>Próxima</button>
      </div>
    </CarouselStyle>
  );
};

export default Carousel;
