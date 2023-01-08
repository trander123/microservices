import React, { ChangeEvent, FormEvent, useState } from "react";
import { numberFormatter } from "../helpers/numberFormatter";

export const Calculator = () => {
  const [value, setValue] = useState<string>("");
  const [result, setResult] = useState<number>(0);
  const [error, setError] = useState<string>("");

  function handleOnSubmit(e: FormEvent) {
    e.preventDefault();
    try {
      setResult(eval(value));
      setError("");
    } catch (error) {
      setError("Invalid input");
    }
  }
  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
    try {
      setResult(eval(e.target.value));
    } catch (error) {}
  }
  return (
    <>
      <div className="flex flex-col my-4 bg-red-50 p-5 rounded-md">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold">CALCULATOR</h1>
        </div>
        <form onSubmit={handleOnSubmit} className="mb-4">
          <input
            placeholder="Input # to calculate here..."
            type="text"
            className=" border rounded-sm px-2 outline-none w-full h-10"
            onChange={handleOnChange}
          />

          <p className="text-xs text-red-500">{error && error}</p>
        </form>
        <div className="text-center flex items-center justify-center space-x-4 ">
          <p className="">Result:</p>
          <p className="text-3xl text-red-400">
            {numberFormatter(result) || "0"}
          </p>
        </div>
      </div>
    </>
  );
};
