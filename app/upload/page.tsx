"use client";
import Header from "../components/header";
import UploadMeme from "../components/upload";

export default function Meme() {
  return (
    <main>
      <Header />
      <form action="">
        <div className="flex flex-col gap-8 items-center">
          <UploadMeme />
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
        </div>
      </form>
    </main>
  );
}
