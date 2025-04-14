// src/pages/Home.jsx

import React from 'react';
import mockArticles from '../data/mockArticles';
import ArticleCard from '../components/ArticleCard';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';

const Home = () => {
  // Filter articles for top stories (displayed in the grid)
  const topStories = mockArticles.filter((art) => art.top);

  // Filter articles NOT in top stories for the latest sidebar
  const latest = mockArticles.filter((art) => !art.top);

  // Find a specific article to highlight in the empty middle area.
  // For instance, let's highlight the first "featured" article, or fall back to something else if not found.
  const mainFeatured = mockArticles.find((art) => art.featured) || topStories[0];

  // Optionally pick additional articles to show beneath the main featured content
  const additionalContent = latest.slice(0, 2); // 2 more articles

  return (
    <div className="max-w-7xl mx-auto px-4 mt-6">
      {/* Top Stories Section */}
      <h1 className="text-2xl font-bold mb-4 border-b pb-2 border-green-200">Top Stories</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {topStories.map((article) => (
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

      {/* Main Content with Sidebar */}
      <div className="mt-6 flex flex-col-reverse md:flex-row md:space-x-6">
        {/* Left Column (used to be empty) */}
        <div className="flex-1">
          {/* Main Featured Article */}
          <h2 className="text-xl font-bold mb-4 border-b pb-2 border-green-200">
            Featured: {mainFeatured.title}
          </h2>
          {/* Highlighting a single article in a bigger style */}
          <div className="border border-gray-200 rounded mb-6">
            <Link to={`/article/${mainFeatured.id}`}>
              <img
                src={mainFeatured.image}
                alt={mainFeatured.title}
                className="w-full h-56 object-cover"
              />
            </Link>
            <div className="p-4">
              <Link
                to={`/article/${mainFeatured.id}`}
                className="font-bold text-lg hover:text-green-500"
              >
                {mainFeatured.title}
              </Link>
              <p className="text-sm text-gray-600 mt-2">{mainFeatured.excerpt}</p>
              <p className="text-xs text-gray-400 mt-2">
                {mainFeatured.author} – {mainFeatured.date}
              </p>
            </div>
          </div>

          {/* Additional Articles/Content */}
          <h2 className="text-xl font-bold mb-2 border-b pb-2 border-green-200">More to Explore</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {additionalContent.map((article) => (
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
        </div>

        {/* Right Column: Sidebar */}
        <div className="w-full md:w-1/3">
          <Sidebar articles={latest.slice(0, 5)} />
        </div>
      </div>
    </div>
  );
};

export default Home;
