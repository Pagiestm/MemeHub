"use client";
import Header from "../components/header";
import UploadMeme from "../components/upload";
import Link from "next/link";

export default function Meme() {
  return (
    <main>
      <Header />
      <form action="" className="mt-10">
        <div className="flex flex-col gap-3 items-center">
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center"
            >
              Votre nom de meme
            </label>
            <input
              type="text"
              id="first_name"
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="never gonna give you up..."
              required
            />
          </div>
          <UploadMeme />
          <p className="text-white">ou</p>
          <a
            href="https://imgflip.com/memegenerator"
            target="_blank"
            className="text-blue-500 hover:underline font-medium text-sm mr-2 mb-2"
          >
            Crée ton meme ici
          </a>

          <button
            type="submit"
            className="text-white bg-primary hover:bg-secondary focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          >
            Upload ton meme !
          </button>
        </div>
      </form>
    </main>
  );
}
