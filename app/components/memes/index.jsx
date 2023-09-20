"use client";
import { useEffect, useState } from "react";
import styles from './styles.module.css'
import Image from "next/image";

function Memes() {
  const [memes, setMemes] = useState([]);
  const [audioSrc, setAudioSrc] = useState(null);

  useEffect(() => {
    // Fonction pour effectuer l'appel à l'API
    async function fetchMemes() {
      try {
        const response = await fetch("https://api.imgflip.com/get_memes");
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des mèmes");
        }
        const data = await response.json();
        setMemes(data.data.memes);
      } catch (error) {
        console.error(error);
      }
    }

    fetchMemes();
  // Ajout du bruit de fond toutes les 10 secondes
  const interval = setInterval(() => {
    const noise = Math.floor(Math.random() * 100);
    const blurredAudioSrc = `/ressources/discord.mp3?blur=${noise}`;
    setAudioSrc(blurredAudioSrc);
  
  // Lecture audio
    const audio = new Audio(blurredAudioSrc);
    audio.play();
  }, 10000);

return () => {
  clearInterval(interval);
};
}, []);
    
  return (
    <div className="container mx-auto p-4">
      <h1 className={styles.popup_title}>Liste des Memes</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {memes.map((meme) => (
          <div key={meme.id} className="rounded shadow p-4">
            <img
              src={meme.url}
              alt={meme.name}
              className="max-w-full h-auto mb-2"
            />
            <p className="text-center">{meme.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Memes;
