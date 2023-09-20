'use client'
import { useState, useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';
import harold from '../../assets/img/harold.png';
import logo from '../../assets/img/logo.png';
import poney from '../../assets/gifs/petitPoney.gif';
import minion from '../../assets/img/minion.png';

export default function Notation() {
  const [rating, setRating] = useState<number>(0);
  const [selectedImage, setSelectedImage] = useState<string | StaticImageData | null>(null);
  const [showLink, setShowLink] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
    const imageIndex = newRating - 1;
    setSelectedImage(imageSrcs[imageIndex]);

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    playAudio(newRating - 1);

    if (newRating === 5) {
      setShowLink(true);
    } else {
      setShowLink(false);
    }
  };

  const audioSrcs = [
    '/ressources/ahhhhhhh.mp3',
    '/ressources/petitPoney.mp3',
    '/ressources/uiiiiiiii.mp3',
    '/ressources/veryNice.mp3',
    '/ressources/dogOut.mp3',
  ];

  const imageSrcs = [
    harold,
    poney,
    minion,
    logo,
    logo,
  ];

  const imageClasses = [
    styles.image_harold,
    styles.image_poney,
    styles.image_minion,
    styles.image_logo,
    styles.image_default,
  ];

  const playAudio = (index: number) => {
    if (audioRef.current) {
      audioRef.current.src = audioSrcs[index];
      audioRef.current.play();
    }
  };

  return (
    <div className={styles.notation}>
      <div className={styles.notation_section}>
        <h2 className={styles.notation_title}>Note ton humour sur 5</h2>
        <div className={styles.notation_container}>
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              selected={star <= rating}
              onClick={() => handleRatingChange(star)}
            />
          ))}

          {selectedImage && (
            <Image
              className={`${styles.appear_from_bottom} ${imageClasses[rating - 1]}`}
              src={selectedImage}
              alt={`Image ${rating}`}
              width={60}
              height={60}
            />
          )}
        </div>
        <div className={styles.notatio_btn_container}>
            {showLink && (
                <Link className={styles.notation_button} href="/memes">Redirection</Link>
            )}
        </div>
        <audio ref={audioRef} style={{ display: 'none' }} />
      </div>
    </div>
  );
}

interface StarProps {
  selected: boolean;
  onClick: () => void;
}

function Star({ selected, onClick }: StarProps) {
  return (
    <span
      className={`${styles.star} ${selected ? styles.selected : ''}`}
      onClick={onClick}
    >
      ★
    </span>
  );
}
