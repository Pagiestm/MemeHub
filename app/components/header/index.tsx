"use client";

import { usePathname } from "next/navigation";

import SearchBar from "./search";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/img/logo.png";
import styles from "./styles.module.css";

export default function Header() {
  const currentRoute = usePathname();
  return (
    <header className="sticky w-full">
      <nav className={styles.nav}>
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href="/" className="flex items-center">
            <Image src={logo} alt="logo" width={100} height={50} />
          </Link>
          <SearchBar />
          <div
            className="hidden justify-center items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 justify-center">
              <li>
                <Link
                  href="/home"
                  className={
                    currentRoute === "/home" ? styles.activeLink : styles.link
                  }
                >
                  Notre sélection
                </Link>
              </li>
              <li>
                <Link
                  href="/memes"
                  className={
                    currentRoute === "/memes" ? styles.activeLink : styles.link
                  }
                >
                  Memes
                </Link>
              </li>
              <li>
                <Link
                  href="/Draw"
                  className={
                    currentRoute === "/Draw" ? styles.activeLink : styles.link
                  }
                >
                  Crée ton dessin !
                </Link>
              </li>
              <li>
                <Link
                  href="/upload"
                  className={
                    currentRoute === "/upload" ? styles.activeLink : styles.link
                  }
                >
                  Upload ton meme
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
