import React from 'react';

const HealthNews = () => {
  // Mock news articles
  const newsArticles = [
    {
      id: 1,
      title: "New Study Shows Benefits of Mediterranean Diet",
      summary: "Research confirms significant health benefits for heart health and longevity.",
      date: "2 hours ago",
      source: "Health Journal",
      imageUrl: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 2,
      title: "Breakthrough in Alzheimer's Research",
      summary: "Scientists identify new potential treatment pathway for Alzheimer's disease.",
      date: "1 day ago",
      source: "Medical News Today",
      imageUrl: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      title: "CDC Updates Vaccination Guidelines",
      summary: "New recommendations for seasonal vaccines have been released.",
      date: "2 days ago",
      source: "CDC Health Updates",
      imageUrl: "https://images.pexels.com/photos/5863389/pexels-photo-5863389.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <div className="dashboard-card health-news">
      <h2>Latest Health News</h2>
      <div className="news-articles">
        {newsArticles.map(article => (
          <div key={article.id} className="news-article">
            <div className="article-image">
              <img src={article.imageUrl} alt={article.title} />
            </div>
            <div className="article-content">
              <h3>{article.title}</h3>
              <p>{article.summary}</p>
              <div className="article-meta">
                <span className="article-source">{article.source}</span>
                <span className="article-date">{article.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="view-more">
        <a href="#">View more health news →</a>
      </div>
    </div>
  );
};

export default HealthNews;