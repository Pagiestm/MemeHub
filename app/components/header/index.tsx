"use client";
import SearchBar from "./search";
import Image from "next/image";
import logo from "../../assets/img/logo.png";
import styles from './styles.module.css'

export default function Header() {
  return (
    <header className="fixed w-full">
      <nav className={styles.nav}>
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" className="flex items-center">
            <Image src={logo} alt="logo" width={100} height={50} />
          </a>
          <SearchBar />
          <div
            className="hidden justify-center items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 justify-center">
              <li>
                <a
                  href="#"
                  className={styles.link}
                  aria-current="page"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={styles.link}
                >
                  Memes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={styles.link}
                >
                  Je sais pas
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={styles.link}
                >
                  Contact peut être ?
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
