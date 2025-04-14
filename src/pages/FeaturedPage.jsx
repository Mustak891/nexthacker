import React from 'react';
import { Link } from 'react-router-dom';
import mockArticles from '../data/mockArticles';
import ArticleCard from '../components/ArticleCard';

const FeaturedPage = () => {
  // Assume the first featured article is used
  const featuredArticle = mockArticles.find(article => article.featured);

  if (!featuredArticle) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-6">
        <p>No featured article available.</p>
        <Link to="/" className="text-green-600 hover:text-green-500 transition-colors">
          ← Back Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-4">Featured</h1>
      <ArticleCard
        id={featuredArticle.id}
        title={featuredArticle.title}
        excerpt={featuredArticle.excerpt}
        image={featuredArticle.image}
        author={featuredArticle.author}
        date={featuredArticle.date}
      />
    </div>
  );
};

export default FeaturedPage;
