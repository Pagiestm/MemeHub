import { useState } from "react";
import troll from "../../../assets/img/trololol.png";
import Image from "next/image";

export default function SearchBar() {
  const [showImage, setShowImage] = useState(false);

  const handleSearch = () => {
    setShowImage(true);
    setTimeout(() => {
      setShowImage(false);
    }, 5000); // L'image disparaît après 5 secondes (5000 millisecondes)
  };

  return (
    <div className="flex items-center justify-center w-1/2">
      <div className="max-w-xl w-full relative">
        <input
          type="search"
          id="search-dropdown"
          className="block p-2.5 w-full z-20 text-sm bg-gray-700 border-l-gray-700 rounded-l border-gray-600 placeholder-gray-400 text-white focus:border-[#fe9102] rounded-r-lg border-l-2 border focus:ring-[#fe9102]"
          placeholder="Rechercher son humour..."
          required
        />
        <button
          onClick={handleSearch}
          type="submit"
          className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-[#fe9102] rounded-r-lg border border-[#fe9102] hover:bg-[#c5924ffa] focus:ring-4 focus:outline-none focus:ring-[#fe9102]"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </div>
      {showImage && (
        <div className="fixed inset-0 flex items-center justify-center z-50 animate-spin">
          <Image
            src="https://www.francetvinfo.fr/pictures/si9iFOPV1UO8tFtNS10SPe3-MQM/1500x843/2016/08/23/internet-troll.jpg"
            alt="Image"
            width={500}
            height={350}
            className="w-1/2 h-auto"
          />
        </div>
      )}
    </div>
  );
}
