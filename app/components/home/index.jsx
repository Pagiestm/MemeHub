import styles from "./styles.module.css";
import Image from "next/image";
import haroldImage from "app/assets/img/harold.png"; // Importez l'image "Harold"

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className={styles.popup_title}>Liste des Memes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <Image 
          src={haroldImage} 
          alt="Harold" 
          width={250} 
          height={250}
          className="max-w-full h-auto mb-2" 
          />
           <Image 
          src={haroldImage} 
          alt="Harold" 
          width={250} 
          height={250}
          className="max-w-full h-auto mb-2" 
          />
          <p className="text-center text-white">Harold</p>
       
      </div>
      <div className="mt-4 flex justify-center"></div>
    </div>
  );
}
