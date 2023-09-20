"use client";
import SearchBar from "./search";
import Image from "next/image";
import logo from "../../assets/img/logo.png";

export default function Header() {
  return (
    <header className="fixed w-full">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="https://flowbite.com" className="flex items-center">
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
                  className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-[#fe9102]"
                  aria-current="page"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-[#fe9102] dark:hover:bg-gray-700 dark:hover:text-[#fe9102] lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Memes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-[#fe9102] dark:hover:bg-gray-700 dark:hover:text-[#fe9102] lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Je sais pas
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-[#fe9102] dark:hover:bg-gray-700 dark:hover:text-[#fe9102] lg:dark:hover:bg-transparent dark:border-gray-700"
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
