"use client";
import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import haroldImage from "app/assets/img/harold.png"; // Importez l'image "Harold"
import ahImage from "app/assets/img/ah.jpeg"; // Importez l'image "Ah"
import niceImage from "app/assets/img/nice.gif"; // Importez l'image "Nice"
import wiiImage from "app/assets/img/wii.gif"; // Importez l'image "Wii"
import amongusImage from "app/assets/img/amongus.jpeg"; // Importez l'image "Among Us"
import jsuisBiengImage from "app/assets/img/jsuisBieng.jpeg"; // Importez l'image "jsuisBoieng"
import coffinImage from "app/assets/img/coffin.gif"; // Importez l'image "coffin"
import zemmourImage from "app/assets/img/zemmour.jpeg"; // Importez l'image "zemmour"
import catImage from "app/assets/img/cat.gif"; // Importez l'image "cat"
import thunesImage from "app/assets/img/thunes.jpeg"; // Importez l'image "thunes"

export default function Home() {
  const images = [
    { alt: "AH", src: ahImage },
    { alt: "Hide the Pain Harold", src: haroldImage },
    { alt: "Nice", src: niceImage },
    { alt: "Wii Sport", src: wiiImage },
    { alt: "Among Us", src: amongusImage },
    { alt: "J'suis bieng", src: jsuisBiengImage },
    { alt: "Coffin Dance", src: coffinImage },
    { alt: "Zemmour", src: zemmourImage },
    { alt: "Nyan Cat", src: catImage },
    { alt: "Thunes", src: thunesImage },
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

  useEffect(() => {
    const image = document.querySelector(`.${styles.slide_animation}`);
    image.classList.remove("slide-animation"); // Supprimez la classe d'animation actuelle
    setTimeout(() => {
      image.classList.add("slide-animation"); // Ajoutez la classe d'animation pour déclencher l'animation
    }, 100);
  }, [currentImageIndex]);
  
  return (
    <div className={`container ${styles.carouselContainer}`}>
      <h1 className={styles.popup_title}>Liste des Memes</h1>
      <div className="flex justify-center items-center flex-col">
        <Image
          src={images[currentImageIndex].src}
          alt={images[currentImageIndex].alt}
          width={500}
          height={500}
          className={`max-w-full h-auto mb-2 relative ${styles.slide_animation}`} />
      </div>
      <p className={`text-center ${styles.imageText}`}>
        {images[currentImageIndex].alt}
      </p>
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
