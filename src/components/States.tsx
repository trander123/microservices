import React, { useEffect, useState } from "react";
import statesData from "../constants/states.json";
import { State } from "../interfaces/state";

export function States() {
  const [states, setStates] = useState<State[]>([]);

  useEffect(() => {
    setStates(statesData);
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    if (value.trim()) {
      setStates(
        statesData.filter(
          (state) =>
            state.name.toLowerCase().includes(value.toLowerCase()) ||
            state.abbreviation.toLowerCase().includes(value.toLowerCase())
        )
      );
      return;
    }

    setStates(statesData);
  }

  return (
    <div className="flex flex-col my-4 bg-red-50 p-5 rounded-md">
      <div className="text-center">
        <h1 className="mb-4 text-2xl font-bold">STATES</h1>
        <input
          placeholder="Search"
          type="text"
          className=" border rounded-sm px-2 outline-none w-full h-10"
          onChange={handleChange}
        />
      </div>
      <div className="my-5 space-y-2">
        {states.map((state) => (
          <div
            className="flex justify-between space-x-8 text-xl bg-red-100 px-2 py-1 rounded-sm"
            key={state.name + state.abbreviation}
          >
            <span>{state.name}</span>
            <span className="font-bold">{state.abbreviation}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
