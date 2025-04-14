import React from 'react';
import { useParams } from 'react-router-dom';
import mockArticles from '../data/mockArticles';
import ArticleCard from '../components/ArticleCard';

const CategoryPage = () => {
  const { category } = useParams();

  // Filter articles that include the category (exact case-sensitive match)
  const filteredArticles = mockArticles.filter((article) =>
    article.categories && article.categories.includes(category)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-4">{category}</h1>
      {filteredArticles.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((article) => (
            <ArticleCard
              key={article.id}
              id={article.id}
              title={article.title}
              excerpt={article.excerpt}
              image={article.image}
              author={article.author}
              date={article.date}
            />
          ))}
        </div>
      ) : (
        <p>No articles found for this category.</p>
      )}
    </div>
  );
};

export default CategoryPage;
