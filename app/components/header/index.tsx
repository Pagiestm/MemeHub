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
<<<<<<< HEAD
                  href="/"
                  className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-[#fe9102]"
=======
                  href="#"
                  className={styles.link}
>>>>>>> 39a7c0fe711a740caacbefde4324a94ce7638bf4
                  aria-current="page"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
<<<<<<< HEAD
                  href="/memes"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-[#fe9102] dark:hover:bg-gray-700 dark:hover:text-[#fe9102] lg:dark:hover:bg-transparent dark:border-gray-700"
=======
                  href="#"
                  className={styles.link}
>>>>>>> 39a7c0fe711a740caacbefde4324a94ce7638bf4
                >
                  Memes
                </a>
              </li>
              <li>
                <a
<<<<<<< HEAD
                  href="/Draw"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-[#fe9102] dark:hover:bg-gray-700 dark:hover:text-[#fe9102] lg:dark:hover:bg-transparent dark:border-gray-700"
=======
                  href="#"
                  className={styles.link}
>>>>>>> 39a7c0fe711a740caacbefde4324a94ce7638bf4
                >
                  Crée ton Dessin !
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
