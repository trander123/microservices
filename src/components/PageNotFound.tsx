import { Link } from "react-router-dom";

export function PageNotFound() {
  return (
    <div className="text-center">
      <p className="text-red-700 mb-5">Page Not Found!</p>
      <Link
        to={"/"}
        className="text-xs bg-red-300 px-5 py-2 rounded-sm hover:opacity-80 text-white  "
      >
        {" "}
        Are you lost?
      </Link>
    </div>
  );
}
