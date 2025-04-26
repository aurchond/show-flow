import { useState } from "react";

const Search = () => {
  const [query, setQuery] = useState(""); // Stores the user's search input
  const [results, setResults] = useState<any>(null); // Stores the fetched search results

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", query);

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTZkNTkwYzViYmEyNGE3ZTNiZjliMTBjMDIxNTY3MiIsIm5iZiI6MTc0NTcwNTYzMS40NTIsInN1YiI6IjY4MGQ1YTlmNzFkZWRjYjhhY2VhYmYyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lqpZehkmNnrxtWTXcii6tDgZGJ0RsD1yQFcwpv4F01w",
      },
    };

    try {
      // Fetch movies based on the user's query
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
          query
        )}&include_adult=false&language=en-US&page=1`,
        options
      );
      const data = await res.json();
      setResults(data.results); // Only store the 'results' array instead of the whole response
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">search for shows</h1>

      {/* Search form */}
      <form onSubmit={handleSubmit} className="flex items-center gap-4 mb-8">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter show name..."
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Search
        </button>
      </form>

      {/* Display search results */}
      {results && results.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((movie: any) => (
            <div key={movie.id} className="bg-gray-900 p-4 rounded-lg">
              <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="rounded mb-2"
                />
              ) : (
                <div className="h-64 bg-gray-700 rounded flex items-center justify-center">
                  <span className="text-gray-400">No Image</span>
                </div>
              )}
              <p className="text-gray-400 text-sm">{movie.release_date}</p>
              <p className="mt-2 text-gray-300 text-sm">
                {movie.overview.length > 100
                  ? movie.overview.slice(0, 100) + "..."
                  : movie.overview || "No description available."}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Show a message if no results found */}
      {results && results.length === 0 && (
        <p className="text-center text-gray-400">No results found.</p>
      )}
    </div>
  );
};

export default Search;
