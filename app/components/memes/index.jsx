import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";

function Memes() {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    // Fonction pour effectuer l'appel à l'API
    async function fetchMemes() {
      try {
        const response = await fetch("https://api.imgflip.com/get_memes");
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des memes");
        }
        const data = await response.json();
        setMemes(data.data.memes);
      } catch (error) {
        console.error(error);
      }
    }

    fetchMemes();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className={styles.popup_title}>Liste des Memes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {memes.map((meme) => (
          <div key={meme.id} className="rounded shadow p-4">
            <Image
              src={meme.url}
              alt={meme.name}
              width={250} // Largeur maximale pour chaque image
              height={250} // Hauteur maximale pour chaque image
              className="max-w-full h-auto mb-2"
            />
            <p className="text-center text-white">{meme.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Memes;
