import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-primary-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold">
            TV Show Tracker
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/" className="hover:text-primary-200">
              Home
            </Link>
            <Link to="/search" className="hover:text-primary-200">
              Search
            </Link>
            <button className="bg-primary-500 px-3 py-1 rounded hover:bg-primary-600">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
