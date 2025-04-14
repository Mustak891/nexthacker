import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Article from './pages/Article';
import CategoryPage from './pages/CategoryPage';
import FeaturedPage from './pages/FeaturedPage';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/featured" element={<FeaturedPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
