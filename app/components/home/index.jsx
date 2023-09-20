"use client";
import { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import haroldImage from "app/assets/img/harold.png"; // Importez l'image "Harold"

export default function Home() {
  const images = [
    { alt: "Meme1", src: haroldImage },
    { alt: "Meme2", src: haroldImage },
    { alt: "Meme3", src: haroldImage },
    { alt: "Meme4", src: haroldImage },
    { alt: "Meme5", src: haroldImage },
    { alt: "Meme6", src: haroldImage },
    { alt: "Meme7", src: haroldImage },
    { alt: "Meme8", src: haroldImage },
    { alt: "Meme9", src: haroldImage },
    { alt: "Meme10", src: haroldImage },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={`container ${styles.carouselContainer}`}>
      <h1 className={styles.popup_title}>Liste des Memes</h1>
        <div className="flex justify-center items-center flex-col">
          <Image
            src={images[currentImageIndex].src}
            alt={images[currentImageIndex].alt}
            width={500}
            height={500}
            className="max-w-full h-auto mb-2"
          />

          <p className={`text-center ${styles.imageText}`}>
            {images[currentImageIndex].alt}
          </p>

        </div>
      <div className={`mt-4 flex justify-center ${styles.buttonsContainer}`}>
        <button onClick={handlePrevClick} className={styles.carouselButton}>
          Précédent
        </button>
        <button onClick={handleNextClick} className={styles.carouselButton}>
          Suivant
        </button>
      </div>
    </div>
  );
}
