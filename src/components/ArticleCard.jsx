// src/components/ArticleCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = ({ id, title, excerpt, image, author, date }) => {
  return (
    <div className="border border-gray-200 rounded overflow-hidden">
      <Link to={`/article/${id}`}>
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      </Link>
      <div className="p-4">
        <Link to={`/article/${id}`} className="font-bold text-xl hover:text-green-500 transition-colors">
          {title}
        </Link>
        <p className="text-sm text-gray-600 mt-2">{excerpt}</p>
        <p className="text-xs text-gray-400 mt-2">{author} – {date}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
