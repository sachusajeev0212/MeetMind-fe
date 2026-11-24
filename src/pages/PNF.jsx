import { Link } from "react-router-dom";

function PNF() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-28 text-center">
      <h1 className="font-serif text-8xl font-bold text-slate-900">404</h1>
      <p className="mt-4 font-serif text-2xl">Page not found</p>
      <p className="mt-2 text-slate-500">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-md bg-amber-500 px-6 py-3 font-semibold text-slate-900 hover:bg-amber-400"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default PNF;