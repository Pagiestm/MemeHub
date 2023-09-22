import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";

function Memes() {
  const [memes, setMemes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const [audioSrc, setAudioSrc] = useState(null);
  const maxPaginationButtons = 10;
  const [selectedMeme, setSelectedMeme] = useState(null);

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

  // Fonction pour ouvrir la modale avec l'image en grand
  const openModal = (meme) => {
    setSelectedMeme(meme);
  };

  // Fonction pour fermer la modale
  const closeModal = () => {
    setSelectedMeme(null);
  };

  // Fonction pour obtenir les éléments de la page courante
  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return memes.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(memes.length / itemsPerPage);

  // Fonction pour gérer le changement de page
  const handlePageChange = (newPage) => {
    if (newPage < 1) {
      setCurrentPage(1);
    } else if (newPage > totalPages) {
      setCurrentPage(totalPages);
    } else {
      setCurrentPage(newPage);
    }
  };

  // Fonction pour afficher la pagination
  const renderPagination = () => {
    const pageButtons = [];

    // Calcul de la première page à afficher
    let startPage = currentPage - Math.floor(maxPaginationButtons / 2);
    if (startPage < 1) {
      startPage = 1;
    }
    let endPage = startPage + maxPaginationButtons - 1;
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = endPage - maxPaginationButtons + 1;
    }

    if (startPage > 1) {
      // Ajout d'une flèche pour revenir en arrière si nécessaire
      pageButtons.push(
        <button
          key="previous"
          className="mx-2 px-2 bg-slate-900 text-lg hover:bg-slate-700 text-white"
          onClick={() => handlePageChange(startPage - 1)}
        >
          &laquo;
        </button>
      );
    }

    for (let i = startPage; i <= endPage; i++) {
      pageButtons.push(
        <button
          key={i}
          className={`mx-2 px-2 bg-slate-900 text-lg hover:bg-slate-700 text-white ${
            currentPage === i ? " border border-[#fe9102] text-[#fe9102]" : ""
          }`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      // Ajout d'une flèche pour avancer vers la suite des pages si nécessaire
      pageButtons.push(
        <button
          key="next"
          className="mx-2 px-2 bg-slate-900 text-lg hover:bg-slate-700 text-white"
          onClick={() => handlePageChange(endPage + 1)}
        >
          &raquo;
        </button>
      );
    }

    return pageButtons;
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className={styles.popup_title}>Liste des Memes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {getCurrentPageItems().map((meme) => (
          <div
            key={meme.id}
            className="rounded-lg overflow-hidden shadow-lg border border-primary"
          >
            <button
              onClick={() => openModal(meme)}
              className="w-full h-48 md:h-60 lg:h-72 xl:h-96"
            >
              <Image
                src={meme.url}
                alt={meme.name}
                width={250}
                height={250}
                className="object-cover w-full h-full border-b border-primary"
              />
            </button>
            <p className="text-center text-white mt-2 p-4">{meme.name}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center">{renderPagination()}</div>

      {selectedMeme && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-80"></div>
          <div className="relative z-10">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              &times;
            </button>
            <Image
              src={selectedMeme.url}
              alt={selectedMeme.name}
              width={500}
              height={500}
              className="max-w-full max-h-full"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Memes;
