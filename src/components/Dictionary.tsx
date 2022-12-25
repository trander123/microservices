import React, { useEffect, useState } from "react";
import axios from "axios";
import { WordInfo } from "../interfaces/dictionary";

const initialWord = "hello";
const initialWordInfo = {
  word: initialWord,
  definitions: [],
};

export function Dictionary() {
  const [search, setSearch] = useState(initialWord);
  const [isValidWord, setIsValidWord] = useState<boolean>();
  const [word, setWord] = useState(initialWord);
  const [wordInfo, setWordInfo] = useState<WordInfo>(initialWordInfo);

  useEffect(() => {
    async function getWord() {
      try {
        const res = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );

        const data = res.data;

        setIsValidWord(true);
        setWordInfo({
          word: word,
          definitions: data[0].meanings[0].definitions.map(
            (e: any) => e.definition
          ),
        });
      } catch (error) {
        setIsValidWord(false);
      }
    }

    getWord();
  }, [word]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setWord(search);
  }

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setSearch(value);
  }

  return (
    <div className="flex flex-col my-4 bg-red-50 p-5 rounded-md">
      <div className="flex justify-center items-center mb-4">
        <form onSubmit={handleSubmit}>
          <div className="flex space-x-2">
            <div className="">
              <input
                type="text"
                value={search}
                onChange={handleOnChange}
                className="h-full rounded-sm outline-none px-2"
              />
              <p className=" text-xs text-red-500">
                {!isValidWord && "Word doesn't exist!"}
              </p>
            </div>

            <button
              type="submit"
              className=" bg-green-400 px-8 py-2 font-bold text-gray-100 rounded-sm"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="">
        <div className="text-center">
          <p className="text-2xl font-bold tracking-widest mb-4">
            {wordInfo.word.toUpperCase()}
          </p>
        </div>

        {wordInfo.definitions.map((definition) => (
          <p key={definition}>{definition}</p>
        ))}
      </div>
    </div>
  );
}
