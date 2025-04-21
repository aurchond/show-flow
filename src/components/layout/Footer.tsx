const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold text-white">showflow</h3>
            <p className="text-sm text-gray-300">
              track your favorite shows with ease
            </p>
          </div>

          <div className="flex space-x-8">
            <div>
              <h4 className="text-sm font-semibold mb-2 text-white">links</h4>
              <ul className="text-sm text-gray-300">
                <li className="mb-1">
                  <a href="#" className="hover:text-white">
                    home
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:text-white">
                    search
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:text-white">
                    about
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-2 text-white">legal</h4>
              <ul className="text-sm text-gray-300">
                <li className="mb-1">
                  <a href="#" className="hover:text-white">
                    privacy policy
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:text-white">
                    terms of service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Thee Sensational Showstopping Show
            Tracker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
