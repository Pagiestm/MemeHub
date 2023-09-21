"use client";
import Header from "../components/header";
import { useState } from "react";
import Image from "next/image";
import cloudinary from "../cloudinaryConfig"; // Importez votre configuration

export default function Meme() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Récupérer les images du dossier spécifié
    cloudinary.v2.api.resources(
      { type: "upload", prefix: "my-uploads/" },
      (error, result) => {
        if (error) {
          console.error("Erreur lors de la récupération des images :", error);
        } else {
          // Mettre à jour le state avec les données des images
          setImages(result.resources);
        }
      }
    );
  }, []);
  return (
    <main>
      <div>
        <Header></Header>
        <h1>Liste des images</h1>
        <ul>
          {images.map((image) => (
            <li key={image.public_id}>
              <Image
                src={image.url}
                alt={image.public_id}
                width={250}
                height={250}
              />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
