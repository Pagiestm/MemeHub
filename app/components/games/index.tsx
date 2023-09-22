// Dans votre composant React
import Link from 'next/link';
import styles from './styles.module.css'; // Importez votre fichier CSS ou module CSS

function Games() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Accéder à nos différents jeux !</h1>
      <div className={styles.buttonContainer}>
        <Link className={styles.button} href="/morpion">
          Morpion
        </Link>
      </div>
    </div>
  );
}

export default Games;

