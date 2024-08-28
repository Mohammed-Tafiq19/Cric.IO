import React, { useState } from 'react';
import '../css/News.css'; 

function CricketNews({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedArticle, setExpandedArticle] = useState(null); // State to track expanded article

  const articlesPerPage = 6; // Change this value to adjust the number of articles per page

  const newsArticles = [
    {
      title: "India Wins T20 World Cup",
      summary: "India secures victory in a thrilling final against Australia.",
      link: "https://example.com/article1"
    },
    {
      title: "New Record Set by Virat Kohli",
      summary: "Virat Kohli breaks the record for the most centuries in ODI cricket.",
      link: "https://example.com/article2"
    },
    {
      title: "New Cricket League Announced",
      summary: "A new cricket league is set to launch next year, promising to revolutionize the sport.",
      link: "https://example.com/article3"
    },
    {
      title: "Legendary Cricketer Retires",
      summary: "After a long and illustrious career, a legendary cricketer announces retirement from international cricket.",
      link: "https://example.com/article4"
    },
    {
      title: "Team India Clinches Test Series",
      summary: "Team India secures a historic victory against arch-rivals in a thrilling test series.",
      link: "https://example.com/article5"
    },
    {
      title: "New Stadium to Host International Matches",
      summary: "A state-of-the-art cricket stadium is inaugurated, set to host international matches in the upcoming season.",
      link: "https://example.com/article6"
    },
    {
      title: "Cricket World Cup Postponed",
      summary: "Due to unforeseen circumstances, the Cricket World Cup scheduled for next year has been postponed.",
      link: "https://example.com/article7"
    },
    {
      title: "New ICC Rankings Released",
      summary: "The latest ICC rankings for batsmen, bowlers, and teams are now available.",
      category: "Rankings",
      link: "https://example.com/article9"
    },
    {
      title: "Cricket Board Announces Rule Changes",
      summary: "The cricket board introduces new rules to enhance the game's competitiveness and fairness.",
      category: "League News",
      link: "https://example.com/article10"
    },
    {
      title: "Young Talent Shines in Under-19 World Cup",
      summary: "Exciting performances from young cricketers leave a mark in the Under-19 World Cup.",
      category: "Tournaments",
      link: "https://example.com/article11"
    },
    {
      title: "India to Host IPL Finals",
      summary: "The Indian Premier League finals will be held in Mumbai this year, marking the end of a thrilling season.",
      category: "Tournaments",
      link: "https://example.com/article12"
    },
    {
      title: "Top Players to Watch Out For in the Next Season",
      summary: "A list of top cricketers expected to dominate the upcoming season with their exceptional skills.",
      category: "Player Updates",
      link: "https://example.com/article13"
    },
    {
      title: "Cricket Fans Gear Up for World Cup Ticket Sales",
      summary: "Enthusiastic cricket fans eagerly await the commencement of ticket sales for the upcoming World Cup matches.",
      category: "Tournaments",
      link: "https://example.com/article14"
    },
    {
      title: "Historic Test Match Ends in a Draw",
      summary: "A thrilling test match between two rivals concludes with a draw after five days of intense cricketing action.",
      category: "Matches",
      link: "https://example.com/article15"
    },
    // Add more news articles as needed
  ];

  const filteredArticles = newsArticles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedCategory === 'All' || article.category === selectedCategory)
  );

  // Pagination logic
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
    setCurrentPage(1); // Reset current page when search query changes
    onSearch(value);
  };

  const handleCategoryChange = (event) => {
    const { value } = event.target;
    setSelectedCategory(value);
    setCurrentPage(1); // Reset current page when category changes
  };

  const goToNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const goToPrevPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const handleReadMore = (index) => {
    setExpandedArticle(index);
  };

  const handleReadLess = () => {
    setExpandedArticle(null);
  };

  return (
    <div className="cricket-news-container" id='cricket-news-container'>
      <h2 className="news-heading">Cricket News</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search news..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="category-filter">
        <label htmlFor="category">Filter by Category:</label>
        <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="All">All</option>
          <option value="Matches">Matches</option>
          <option value="Player Updates">Player Updates</option>
          <option value="League News">League News</option>
          {/* Add more categories as needed */}
        </select>
      </div>
      <ul className="news-list">
        {currentArticles.map((article, index) => (
          <li key={index} className="news-item">
            <a href={article.link} target="_blank" rel="noopener noreferrer" className="news-title">{article.title}</a>
            {expandedArticle === index ? (
              <>
                <p className="news-summary">{article.summary}</p>
                <button onClick={handleReadLess}>Read Less</button>
              </>
            ) : (
              <button onClick={() => handleReadMore(index)}>Read More</button>
            )}
          </li>
        ))}
      </ul>
      <div className="pagination">
        <button onClick={goToPrevPage} disabled={currentPage === 1}>Prev</button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i} onClick={() => goToPage(i + 1)} className={currentPage === i + 1 ? 'active' : ''}>
            {i + 1}
          </button>
        ))}
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
}

export default CricketNews;
