import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-red-400 text-white w-full py-4">
      <div className="text-center flex justify-between mx-4">
        <Link to={"/"} className=" font-bold tracking-widest">
          STATES
        </Link>
        <Link to={"/dictionary"} className=" font-bold tracking-widest">
          DICTIONARY
        </Link>
      </div>
    </header>
  );
}
