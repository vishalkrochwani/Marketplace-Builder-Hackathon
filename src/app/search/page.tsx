'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<{ id: number; name: string; description: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Debounce the search input to avoid excessive function calls
  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim()) {
        handleSearch();
      } else {
        setResults([]);
      }
    }, 500); // Wait for 500ms after the user stops typing

    return () => clearTimeout(timer); // Cleanup on query change
  }, [query]);

  const handleSearch = async () => {
    setIsLoading(true);

    // Simulate fetching search results from an API or a static list
    const mockData = [
      { id: 1, name: 'Asgaard Sofa', description: 'A luxurious sofa for your home' },
      { id: 2, name: 'Velvet Sofa', description: 'A soft velvet fabric sofa' },
      { id: 3, name: 'Modern Chair', description: 'A stylish and comfortable chair' },
      // Add more mock data as needed
    ];

    const filteredResults = mockData.filter(
      (item) =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filteredResults);
    setIsLoading(false);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for products..."
          className="border w-full px-4 py-2 rounded-md"
        />
      </div>

      {isLoading && (
        <div className="text-center py-4">
          <p>Loading...</p>
        </div>
      )}

      {results.length > 0 ? (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Search Results:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {results.map((result) => (
              <div key={result.id} className="border p-4 rounded-md">
                <h3 className="text-xl font-bold">{result.name}</h3>
                <p className="text-sm text-gray-500">{result.description}</p>
                <button
                  onClick={() => router.push(`/product/${result.id}`)}
                  className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md"
                >
                  View Product
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : query.trim() && !isLoading ? (
        <p className="text-gray-500">No results found for "{query}"</p>
      ) : (
        <p className="text-gray-500">Please enter a search term to begin.</p>
      )}
    </div>
  );
};

export default SearchPage;
