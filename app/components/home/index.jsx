"use client";
import { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import haroldImage from "app/assets/img/harold.png"; // Importez l'image "Harold"
import ahImage from "app/assets/img/ah.jpeg"; // Importez l'image "Ah"
import niceImage from "app/assets/img/nice.gif"; // Importez l'image "Nice"
import wiiImage from "app/assets/img/wii.gif"; // Importez l'image "Wii"
import amongusImage from "app/assets/img/amongus.jpeg"; // Importez l'image "Among Us"
import jsuisBoiengImage from "app/assets/img/jsuisBieng.jpeg"; // Importez l'image "jsuisBoieng"
import coffinImage from "app/assets/img/coffin.gif"; // Importez l'image "coffin"
import zemmourImage from "app/assets/img/zemmour.jpeg"; // Importez l'image "zemmour"
import catImage from "app/assets/img/cat.gif"; // Importez l'image "cat"
import thunesImage from "app/assets/img/thunes.jpeg"; // Importez l'image "thunes"

export default function Home() {
  const images = [
    { alt: "AH", src: ahImage },
    { alt: "Hide the Pain Harold", src:  haroldImage},
    { alt: "Meme3", src: niceImage },
    { alt: "Meme4", src: wiiImage },
    { alt: "Meme5", src: amongusImage },
    { alt: "Meme6", src: jsuisBoiengImage },
    { alt: "Meme7", src: coffinImage },
    { alt: "Meme8", src: zemmourImage },
    { alt: "Meme9", src: catImage },
    { alt: "Meme10", src: thunesImage },
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
