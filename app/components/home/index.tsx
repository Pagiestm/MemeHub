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
import amongUsWalkImage from "app/assets/img/amongus_walk.gif";
import zemmour2Image from "app/assets/img/zemmour2.png";
import twobuttons from "app/assets/img/twobuttons.jpg";
import moneyRain from "app/assets/gifs/moneyRain.gif";
import nice2Image from "app/assets/gifs/nice2.gif";

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHaroldScreamer, setIsHaroldScreamer] = useState(false);
  const [isAmongUsWalk, setIsAmongUsWalk] = useState(false);
  const [isZemmourScreamer, setIsZemmourScreamer] = useState(false);
  const [ismoneyRain, setIsmoneyRain] = useState(false);
  const [iscoffin, setIscoffin] = useState(false);
  const [isNiceMeme, setIsNiceMeme] = useState(false);

  const audioAh = "/ressources/ah.mp3"
  const audioWii = "/ressources/wii.mp3"
  const zemmouHIIIN = "/ressources/zemmourHIIIN.mp3"
  const audioAmongUs = "/ressources/among_us.mp3"
  const audioMoney = "/ressources/money.mp3"
  const coffinAudio = "/ressources/coffinDance.mp3"
  const audiojsuisbien = "/ressources/jsuisbien.mp3";
  const audioNice = "/ressources/nice.mp3";

  const haroldScreamer = () => {
    setIsHaroldScreamer(true);
    setTimeout(() => setIsHaroldScreamer(false), 2000);
  };

  const niceScreamer = () => {
    setIsNiceMeme(true);
    setTimeout(() => setIsNiceMeme(false), 3000);

    const audio = new Audio(audioNice);
    audio.play();
  };

  const amongusWalking = () => {
    setIsAmongUsWalk(true);
    setTimeout(() => setIsAmongUsWalk(false), 15000);

    const audio = new Audio(audioAmongUs);
    audio.play();
  }

  const zemmourScreamer = () => {
    setIsZemmourScreamer(true);
    setTimeout(() => setIsZemmourScreamer(false), 2000);

    const audio = new Audio(zemmouHIIIN);
    audio.play();
  }

  const money = () => {
    setIsmoneyRain(true);
    setTimeout(() => setIsmoneyRain(false), 15000);

    const audio = new Audio(audioMoney);
    audio.play();
  }

  const coffinDance = () => {
    setIscoffin(true);
    setTimeout(() => setIscoffin(false), 23000);

    const audio = new Audio(coffinAudio);
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
    { 
      alt: "Nice", 
      src: niceImage, 
      className: styles.imageNice,
      onclick: niceScreamer,
      srcSecond: nice2Image,
    },
    {
      alt: "Among Us",
      src: amongusImage,
      className: styles.imageAmongUs,
      onClick: amongusWalking,
      srcSecond: amongUsWalkImage,
    },
    { 
      alt: "Wii Sport", 
      src: wiiImage, 
      className: styles.imageWii,
      onClick: playAudioWii
    },
    { 
      alt: "J'suis bieng", 
      src: jsuisBiengImage, 
      className: styles.imageBieng 
    },
    { 
      alt: "Coffin Dance", 
      src: coffinImage, 
      className: styles.imageCoffin,
      onClick: coffinDance,
      srcSecond: coffinImage,
    },
    { 
      alt: "Zemmour", 
      src: zemmourImage, 
      className: styles.imageZemmour ,

      onClick: zemmourScreamer,
      srcSecond: zemmour2Image,
    },
    { alt: "Nyan Cat", src: catImage, className: styles.imageCat },
    { 
      alt: "Thunes", 
      src: thunesImage, 
      className: styles.imageThunes,

      onClick: money,
      srcSecond: moneyRain,
    },
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

  /* Show the easter egg*/
  const [content, setContent] = useState<React.ReactNode | null>(
    <Image src={twobuttons} alt="Meme" />
  );

  const [showButtonClick, setShowButtonClick] = useState(false);

  const handleButtonClick = () => {
    setShowButtonClick(!showButtonClick);
    if (!showButtonClick) {
      setContent(
        <Image src={twobuttons} alt="Meme" />
      );
    } else {
      setContent(<Image src={twobuttons} alt="Meme" />);
    }
  };

  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const img = e.target as HTMLDivElement;
    const rect = img.getBoundingClientRect();
    const cx = e.clientX - rect.left;
    const cy = e.clientY - rect.top;

    if (cx > 130 && cx < 250 && cy > 160 && cy < 220) {
      setShowButtonClick(true);
      setContent(null);
    }

    if (cx > 350 && cx < 440 && cy > 120 && cy < 230) {
      setShowButtonClick(true);
      setContent(null);
    }
  };

  return (
    <div className={`container ${styles.carouselContainer}`}>
      {isHaroldScreamer && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-9999">
          <Image
            className=""
            src={images[currentImageIndex].srcSecond || ''}
            width={1000}
            height={1000}
            alt="Screamer harold"
          />
        </div>
      )}
      {isAmongUsWalk && (
        <Image
          className={styles.animationAmongUs}
          src={images[currentImageIndex].srcSecond ||''}
          width={250}
          height={250}
          alt="Among us walking"
        />
      )}
      {isNiceMeme && (
        <Image
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-9999"
          src={images[currentImageIndex].srcSecond  || ''}
          width={250}
          height={250}
          alt="Screamer nice meme"
        />
      )}
      {isZemmourScreamer && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-9999">
          <Image
            className={styles.zemmour2}
            src={images[currentImageIndex].srcSecond  || ''}
            width={1000}
            height={1000}
            alt="Scremaer harold"
          />
        </div>
      )}
      {ismoneyRain && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-9999">
          <Image
            className=""
            src={images[currentImageIndex].srcSecond || ''}
            width={1000}
            height={1000}
            alt="Scremaer harold"
          />
        </div>
      )}
      {iscoffin && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-9999">
          <Image
            className={styles.coffinDance}
            src={images[currentImageIndex].srcSecond || ''}
            width={1000}
            height={1000}
            alt="Scremaer harold"
          />
        </div>
      )}
      <h1 className={styles.popup_title}>Liste de notre Sélection</h1>
      <div className="flex justify-center items-center flex-col">
        <Image
          src={images[currentImageIndex].src  || ''}
          alt={images[currentImageIndex].alt  || ''}
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
      {/* ClickableImage component code */}
      <div
          id="content"
          style={{ marginLeft: '20px' }}
          onClick={handleImageClick}
        >
          {content}
        </div>
        {showButtonClick && (
          <img
            src="https://cherry.img.pmdstatic.net/fit/https.3A.2F.2Fimg.2Eohmymag.2Ecom.2Fs3.2Ffromm.2Finsolite.2Fdefault_2019-10-08_cfb50d5a-bb57-4cbc-be5c-bd159070d3a7.2Ejpeg/1200x675/quality/80/saviez-vous-que-le-jeu-du-rond-provient-d-une-celebre-serie.jpg" // Replace with the image URL for your button
            alt="Button Image"
            style={{
              height: '300px',
              cursor: 'pointer',
            }}
            onClick={handleButtonClick}
          />
        )}
    </div>
  );
}
