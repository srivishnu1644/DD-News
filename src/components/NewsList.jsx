import NewsItem from './NewsItem';

function NewsList({ articles }) {
 
  if (!articles || articles.length === 0) {
    return <p className="text-center text-gray-500 dark:text-gray-400 " >No articles to display.</p>;
  }

  return (
    <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {articles.map((article) => (
    <NewsItem key={article.url || article.title} article={article} />
  ))}
</div>
  );
}

export default NewsList;