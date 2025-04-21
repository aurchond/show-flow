const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">welcome to showflow</h1>
      <p className="mb-4">
        track your favorite shows, mark episodes as watched, and keep a diary of
        your watching history.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">popular shows</h2>
          <p className="text-gray-600">
            discover what shows are trending right now.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">your watchlist</h2>
          <p className="text-gray-600">
            login to see your tracked shows and progress.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
