// Dans votre composant React
import Link from 'next/link';
import styles from './styles.module.css'; // Importez votre fichier CSS ou module CSS

function Games() {
  return (
    <div>
      <h1>Accéder à nos différents jeux !</h1>
      <Link className={styles.button} href="/morpion">Morpion</Link>
    </div>
  );
}

export default Games;
