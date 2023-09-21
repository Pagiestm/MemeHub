"use client";
import Header from "../components/header";
import { useState } from "react";
import Image from "next/image";

export default function Meme() {
  const [imageSrc, setImageSrc] = useState();
  const [uploadData, setUploadData] = useState();

  /**
   * handleOnChange
   * @description Triggers when the file input changes (ex: when a file is selected)
   */

  function handleOnChange(changeEvent) {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
      setUploadData(undefined);
    };

    reader.readAsDataURL(changeEvent.target.files[0]);
  }

  /**
   * handleOnSubmit
   * @description Triggers when the main form is submitted
   */

  async function handleOnSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const fileInput = form.querySelector("#dropzone-file");
    const nameInput = form.querySelector("#first_name").value;

    const formData = new FormData();

    for (const file of fileInput.files) {
      formData.append("file", file);
    }

    formData.append("upload_preset", "my-uploads");
    formData.append("tags", nameInput);

    const data = await fetch(
      "https://api.cloudinary.com/v1_1/dt9iz6zyd/image/upload",
      {
        method: "POST",
        body: formData,
      }
    ).then((r) => r.json());

    setImageSrc(data.secure_url);
    setUploadData(data);
  }

  return (
    <main>
      <Header />
      <form
        method="post"
        onChange={handleOnChange}
        onSubmit={handleOnSubmit}
        className="mt-10"
      >
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
          <div className="flex items-center justify-center w-1/2 mt-10">
            <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Cliquer pour upload</span> ou
                  glisser déposer
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG ou GIF (MAX. 800x400px)
                </p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
          {imageSrc && (
            <Image src={imageSrc} alt="Preview" width={300} height={300} />
          )}
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

        {uploadData && (
          <code className="text-white">
            <pre>{JSON.stringify(uploadData, null, 2)}</pre>
          </code>
        )}
      </form>
    </main>
  );
}
