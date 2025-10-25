import logoImage from '../assets/logo.jpg';
function Navbar({ searchTerm, setSearchTerm, handleSearch, handleCategoryChange, selectedCategory }) {
    const categories = ['general', 'business', 'technology', 'sports', 'health', 'science'];
    return (
        <nav className="bg-black shadow-md p-4 sticky top-0 z-10">
            <div className="container mx-auto flex justify-between items-center flex-wrap gap-3">
                <img src={logoImage} alt="Daily Dispatch Logo" className="h-8 w-auto mr-px" />
                <h1 className="text-4xl font-bold text-indigo-700 ml-1 "> 
                    DD News
                </h1>
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => handleCategoryChange(category)}
                        className={`px-3 py-1 rounded text-sm capitalize
                            ${selectedCategory === category
                                ? 'bg-indigo-600 text-white'
                                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600'
                            }
                            transition-colors`}
                    >
                        {category}
                    </button>
                ))}

                <div className="flex order-3 sm:order-2 w-50 sm:w-auto mt-2 sm:mt-0">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search..."
                        className="px-3 py-1.5 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-gray-900 w-full " 
                    />
                    <button
                        onClick={handleSearch}
                        className="px-4 py-1.5 bg-indigo-600 text-white rounded-r-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 -ml-px"
                    >
                        Search
                    </button>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;