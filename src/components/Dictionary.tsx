import React, { useEffect, useState } from "react";
import axios from "axios";
import { WordInfo } from "../interfaces/dictionary";

const initialWord = "hello";
const initalWordInfo = {
  word: initialWord,
  definitions: [],
};

export function Dictionary() {
  const [search, setSearch] = useState("");
  const [word, setWord] = useState(initialWord);
  const [wordInfo, setWordInfo] = useState<WordInfo>(initalWordInfo);

  useEffect(() => {
    async function getWord() {
      const res = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      const data = res.data;
      console.log(data);
      console.log(
        data[0].meanings[0].definitions.map((e: any) => e.definition)
      );

      setWordInfo({
        word: word,
        definitions: data[0].meanings[0].definitions.map(
          (e: any) => e.definition
        ),
      });
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
    <div className="flex flex-col justify-center items-center">
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={search} onChange={handleOnChange} />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p>{wordInfo.word.toUpperCase()}</p>
        {wordInfo.definitions.map((definition) => (
          <div key={definition}>{definition}</div>
        ))}
      </div>
    </div>
  );
}
