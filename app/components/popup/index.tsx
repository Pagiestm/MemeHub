'use client'
import { useEffect, useState } from "react";
import Image from 'next/image'
import styles from './styles.module.css'
import logo from '../../assets/img/logo.png'
import harold from '../../assets/img/harold.png'

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);
  const [showHarold, setShowHarold] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const handleEntrerClick = () => {
    setShowHarold(true);
  };

  const audioSrc = '/ressources/heinnnnnn.mp3'; 
  const handleAudioPlay = () => {
    const audio = new Audio(audioSrc);
    audio.play();
  };

  useEffect(() => {
    openPopup();
  }, []);


  return (
    <div>
      {isOpen && (
        <div className={styles.popup_section}>
          <div className={styles.popup_container}>
            <Image className={styles.popup_logo} src={logo} alt="Picture"/>
            <h2 className={styles.popup_title}>Avez-vous de l’humour ?</h2>
            <div className={styles.popup_content}>
                <label>MêmeHub est une communauté qui offre du contenu réservé aux étudiants.</label>
                <label>Vous devez avoir de l’humour ou plus pour entrer.</label>
                <label>Un Easter Egg est caché, cliquez un peu partout pour le trouver.</label>
            </div>
            <button
              className={styles.popup_close_button}
              onClick={() => {
                handleEntrerClick();
                handleAudioPlay(); // Lance la lecture de l'audio
              }}
            >
              J’ai de l’humour ou plus - Entrer
            </button>

          </div>
          {showHarold && (
                <Image
                    onClick={closePopup}
                    className={styles.appear_from_bottom}
                    src={harold}
                    alt="Picture"
                />
            )}
        </div>
      )}
    </div>
  );
}
