function NewsItem({ article }) {
    if (!article) {
        return null;
    }
    const {title, description, url, urlToImage}  = article;

    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg dark:shadow-gray-700 dark:hover:shadow-gray-600 transition-shadow duration-300 flex flex-col h-full border border-gray-200 dark:border-gray-700">
            {urlToImage ? (
                <img
                    src={urlToImage}
                    alt={title || 'News image'}
                    className="w-full h-48 object-cover rounded-t-lg mb-4 bg-gray-100"
                    onError={(e) => { e.target.style.display = 'none';}}
                />
            ) : (
                <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 rounded-t-lg mb-4 flex items-center justify-center text-gray-500 dark:text-gray-400 italic">No Image</div>
            )}

            <h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100 grow leading-tight">
                {title || "No Title Available"}
            </h2>
            {description && (
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                {description || "No description available."}
            </p>
        )}
            {url && (
           
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 hover:underline text-sm mt-auto self-start transition-colors duration-200 ease-in-out font-medium">
                    Read More
                </a>
            )}
        </div>
    );
}
export default NewsItem;