"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

function Cloud() {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    // Fonction pour effectuer l'appel à l'API
    async function fetchMemes() {
      try {
        const cloudName = "dt9iz6zyd"; // Remplacez par votre nom de cloud
        const apiKey = "176226943343166";
        const apiSecret = "x31u90GtZMxkSl-u9PFhJGPRIy4"; // Remplacez par votre API Key

        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${cloudName}/resources/search`,
          {
            headers: {
              Authorization: `Basic ${btoa(apiKey + ":" + apiSecret)}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des mèmes");
        }

        const data = await response.json();
        setMemes(data.resources);
        console.log(data.resources);
      } catch (error) {
        console.error(error);
      }
    }

    fetchMemes();
  }, []);

  // ... Le reste de votre composant pour afficher les images

  return (
    <div className="container mx-auto p-4">
      <h1>Liste des Memes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {memes.map((meme) => (
          <div key={meme.asset_id} className="rounded shadow p-4">
            <Image
              src={meme.url}
              alt={meme.filename}
              width={250}
              height={250}
              className="max-w-full h-auto mb-2"
            />
            <p className="text-center text-white">{meme.filename}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cloud;
