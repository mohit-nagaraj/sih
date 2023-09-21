import React, { useState } from "react";
import articlesData from './articles.json';
//provide basic inline styling for the page

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter articles based on the selected category
  const filteredArticles =
    selectedCategory === "All"
      ? articlesData
      : articlesData.filter(
          (article) => article.content.tone === selectedCategory
        );

  // Calculate pagination
  const articlesPerPage = 10;
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticles = filteredArticles.slice(startIndex, endIndex);

  // Handle category selection
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to the first page when changing the category
  };

  // Handle pagination
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <h1>Article Dashboard</h1>

      {/* Category filter */}
      <div>
        <label>Filter by Category:</label>
        <select onChange={(e) => handleCategoryChange(e.target.value)}>
          <option value="All">All</option>
          <option value="Positive">Positive</option>
          <option value="Neutral">Neutral</option>
          <option value="Negative">Negative</option>
          {/* Add more categories here */}
        </select>
      </div>

      {/* Article table */}
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Category</th>
            <th>Government Body</th>
            <th>Text</th>
            <th>Source</th>
          </tr>
        </thead>
        <tbody>
          {currentArticles.map((article) => (
            <tr key={article.id}>
              <td>{article.id}</td>
              <td>{article.title.length>=20? article.title.substring(0, 20)+"...":article.title}</td>
              <td>
                <span className="category-label">{article.content.tone}</span>
              </td>
              <td>
                {article.content.government_body.length >= 30
                  ? article.content.government_body.substring(0, 30)+"..."
                  : article.content.government_body}
              </td>
              <td>{article.content.text.length>=50? article.content.text.substring(0, 50)+"...":article.content.text}</td>
              <td><a href={article.link}>Link</a></td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button
          onClick={handleNextPage}
          disabled={endIndex >= filteredArticles.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Dashboard;