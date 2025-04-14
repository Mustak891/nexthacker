// src/components/Sidebar.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ articles }) => {
  return (
    <aside className="space-y-4">
      <h2 className="font-bold text-lg border-b border-gray-300 pb-2">Latest</h2>
      {articles.map((article) => (
        <div key={article.id} className="border-b border-gray-200 pb-2 mb-2">
          <Link to={`/article/${article.id}`} className="font-semibold hover:text-green-500 transition-colors">
            {article.title}
          </Link>
          <p className="text-sm text-gray-600">{article.author}</p>
        </div>
      ))}
      <Link to="#" className="text-green-600 hover:text-green-500 transition-colors">See More →</Link>
    </aside>
  );
};

export default Sidebar;
