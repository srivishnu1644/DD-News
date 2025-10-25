import { useEffect, useState } from 'react';
import NewsList from './components/NewsList';
import Navbar from './components/Navbar'; 

function App() {

    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true); 
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('general');
    
    const API_KEY = import.meta.env.VITE_NEWS_API_KEY; 

    useEffect(() => {
        fetchNews('', selectedCategory); 
    }, []); 

    async function fetchNews(query = '', category = selectedCategory) {
        setIsLoading(true);
        setError(null);
       
        let url = '';
        const encodedQuery = encodeURIComponent(query.trim());

        if (encodedQuery) {
            url = `https://gnews.io/api/v4/search?q=${encodedQuery}&lang=en&country=us&token=${API_KEY}`;
        } else {
           
            url =`https://gnews.io/api/v4/top-headlines?topic=${category}&lang=en&country=us&token=${API_KEY}`;
        }

       try {
            
             const response = await fetch(url);
             if (!response.ok) {
                 const errorData = await response.json().catch(() => ({}));
                 throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
             }
             const data = await response.json();
             setArticles(data.articles || []);
        } catch (err) {
            setError(err.message || 'Failed to fetch news.');
            setArticles([]);
        } finally {
            setIsLoading(false);
        }
    }
  
    function handleSearch() {
        fetchNews(searchTerm);
    }

    function handleCategoryChange(category){
        setSelectedCategory(category);
        setSearchTerm('');
        fetchNews('', category);
    }

    return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen">
            <Navbar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                handleSearch={handleSearch}
                handleCategoryChange={handleCategoryChange}
                selectedCategory={selectedCategory}

            />

            <main className="container mx-auto p-4 sm:p-6 lg:p-5 max-w-7xl">
                {isLoading ? (
                    <p className='text-center py-10 text-xl'>Loading news...</p>
                ) : error ? (
                    <p className='text-center text-red-500 py-10 text-x1'>Error: {error}</p>
                ) : articles.length > 0 ? (
                    <NewsList articles={articles} />
                ) : (
                   <p className='text-center text-gray-500  py-10 text-xl'>No articles found.</p>

                )}
            </main>
        </div>

    );
}

export default App;
