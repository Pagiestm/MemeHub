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

  useEffect(() => {
    openPopup();
  }, []);

  return (
    <div>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className={styles.popup_container}>
            <Image className={styles.logo} src={logo} alt="Picture"/>
            <h2 className={styles.popup_title}>Avez-vous de l’humour ?</h2>
            <div className={styles.popup_content}>
                <label>MêmeHub est une communauté qui offre du contenu réservé aux étudiants.</label>
                <label>Vous devez avoir de l’humour ou plus pour entrer.</label>
            </div>
            <button
              className={styles.popup_close_button}
              onClick={handleEntrerClick} // Utilisez le gestionnaire d'événements pour afficher Harold
            >
              J’ai de l’humour ou plus - Entrer
            </button>

          </div>
          {showHarold && (
                <Image
                    onClick={closePopup}
                    className={`${styles.logo} ${styles.appear_from_bottom}`} // Ajoutez la classe d'animation
                    src={harold}
                    alt="Picture"
                />
            )}
        </div>
      )}
    </div>
  );
}
