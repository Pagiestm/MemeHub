"use client";
import { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import haroldImage from "app/assets/img/harold.png";
import ahImage from "app/assets/img/ah.jpeg";
import niceImage from "app/assets/img/nice.gif";
import wiiImage from "app/assets/img/wii.gif";
import amongusImage from "app/assets/img/amongus.jpeg";
import jsuisBiengImage from "app/assets/img/jsuisbieng.jpeg";
import coffinImage from "app/assets/img/coffin.gif";
import zemmourImage from "app/assets/img/zemmour.jpeg";
import catImage from "app/assets/img/cat.gif";
import thunesImage from "app/assets/img/thunes.jpeg";

import harold2Image from "app/assets/img/harold2.jpeg";
import zemmour2Image from "app/assets/img/zemmour2.png";
import twobuttons from "app/assets/img/twobuttons.jpg";

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHaroldScreamer, setIsHaroldScreamer] = useState(false);
  const [isZemmourScreamer, setIsZemmourScreamer] = useState(false);
  const audioAh = "/ressources/ah.mp3"
  const audioWii = "/ressources/wii.mp3"
  const zemmouHIIIN = "/ressources/zemmourHIIIN.mp3"

  const haroldScreamer = () => {
    setIsHaroldScreamer(true);
    setTimeout(() => setIsHaroldScreamer(false), 2000);
  };

  const zemmourScreamer = () => {
    setIsZemmourScreamer(true);
    setTimeout(() => setIsZemmourScreamer(false), 2000);

    const audio = new Audio(zemmouHIIIN);
    audio.play();
  }
  
  const playAudioAh = () => {
    const audio = new Audio(audioAh);
    audio.play();
  };

  const playAudioWii = () => {
    const audio = new Audio(audioWii);
    audio.play();
  };

  const images = [
    {
      alt: "AH",
      src: ahImage,
      className: styles.imageHarold,
      onClick: playAudioAh,
    },
    {
      alt: "Hide the Pain Harold",
      src: haroldImage,
      className: styles.imageHarold,

      onClick: haroldScreamer,
      srcSecond: harold2Image,
    },
    { alt: "Nice", src: niceImage, className: styles.imageNice },
    { 
      alt: "Wii Sport", 
      src: wiiImage, 
      className: styles.imageWii,
      onClick: playAudioWii
    },
    { alt: "Among Us", src: amongusImage, className: styles.imageAmongUs },
    { alt: "J'suis bieng", src: jsuisBiengImage, className: styles.imageBieng },
    { alt: "Coffin Dance", src: coffinImage, className: styles.imageCoffin },
    { 
      alt: "Zemmour", 
      src: zemmourImage, 
      className: styles.imageZemmour ,

      onClick: zemmourScreamer,
      srcSecond: zemmour2Image,
    },
    { alt: "Nyan Cat", src: catImage, className: styles.imageCat },
    { alt: "Thunes", src: thunesImage, className: styles.imageThunes },
    { alt: "Two-Buttons", src: twobuttons, className: styles.twobuttons },
  ];

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 2000);
  };

  return (
    <div className={`container ${styles.carouselContainer}`}>
      {isHaroldScreamer && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-9999">
          <Image
            className=""
            src={images[currentImageIndex].srcSecond}
            width={1000}
            height={1000}
            alt="Scremaer harold"
          />
        </div>
      )}

      {isZemmourScreamer && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-9999">
          <Image
            className={styles.zemmour2}
            src={images[currentImageIndex].srcSecond}
            width={1000}
            height={1000}
            alt="Scremaer harold"
          />
        </div>
      )}
      <h1 className={styles.popup_title}>Liste de notre Sélection</h1>
      <div className="flex justify-center items-center flex-col">
        <Image
          src={images[currentImageIndex].src}
          alt={images[currentImageIndex].alt}
          width={500}
          height={500}
          className={`${
            isAnimating ? images[currentImageIndex].className : ""
          }`}
          onClick={images[currentImageIndex].onClick}
        />
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
