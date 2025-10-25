function SearchBar({ searchTerm, setSearchTerm, handleSearch }) {
    return (
        <div className="my-4 flex justify-center">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for news..."
               
                className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500
                           dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:placeholder-gray-400 dark:focus:ring-blue-400" 
            />
            <button
                onClick={handleSearch}
               
                className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500
                           dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-400"
            >
                Search
            </button>
        </div>
    );
}

export default SearchBar;
