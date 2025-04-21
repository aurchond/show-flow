import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-white">
            showflow
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-300 hover:text-white">
              home
            </Link>
            <Link to="/search" className="text-gray-300 hover:text-white">
              search
            </Link>
            <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
              login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
