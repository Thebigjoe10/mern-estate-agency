import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gradient-to-l from-green-200 to-green-400 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-green-300">Ctop</span>
            <span className="text-green-700">Market</span>
          </h1>
        </Link>
        <form className="bg-white p-3 rounded-lg flex items-center ">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-green-500" />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline">Home</li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline">About</li>
          </Link>
          <Link to="/sign-in">
            <li>SignIn</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
