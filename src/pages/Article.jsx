// src/pages/Article.jsx

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import mockArticles from '../data/mockArticles';

const Article = () => {
  const { id } = useParams();
  const article = mockArticles.find((a) => a.id === parseInt(id, 10));

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
        <Link to="/" className="text-green-600 hover:text-green-500 transition-colors">
          ← Go Back Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
      <p className="text-gray-500 text-sm mb-4">
        {article.author} – {article.date}
      </p>
      <img src={article.image} alt={article.title} className="w-full h-64 object-cover mb-4" />
      <div className="text-gray-800 leading-relaxed">
        <p>{article.content}</p>
      </div>
      <div className="mt-4">
        <Link to="/" className="text-green-600 hover:text-green-500 transition-colors">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Article;
