const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Welcome to TV Show Tracker</h1>
      <p className="mb-4">
        Track your favorite shows, mark episodes as watched, and keep a diary of
        your watching history.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">Popular Shows</h2>
          <p className="text-gray-600">
            Discover what shows are trending right now.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">Your Watchlist</h2>
          <p className="text-gray-600">
            Login to see your tracked shows and progress.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
