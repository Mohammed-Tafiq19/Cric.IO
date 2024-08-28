import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/LiveScore.css'; // Import CSS file

function LiveScore() {
  const [liveScores, setLiveScores] = useState([]);

  useEffect(() => {
    const fetchLiveScores = async () => {
      try {
        const proxyUrl = 'https://api.allorigins.win/get?url=';
        const apiUrl = 'https://api.cricapi.com/v1/cricScore?apikey=e1532e8a-ebf9-4069-b6f4-04fc6b3c7b3a';
        const response = await axios.get(proxyUrl + encodeURIComponent(apiUrl));
        const responseData = JSON.parse(response.data.contents);
        setLiveScores(responseData);
      } catch (error) {
        console.error('Error fetching live scores:', error);
      }
    };

    fetchLiveScores();
  }, []);

  return (
    <div className="live-score">
      <h2>Live Cricket Scores</h2>
      <ul>
        {liveScores.data && liveScores.data.length > 0 ? (
          liveScores.data.map((match, index) => (
            <li key={index}>
              <p>{match.title}</p>
              <p>{match.description}</p>
              <p>{match.status}</p>
            </li>
          ))
        ) : (
          <li>No live matches currently</li>
        )}
      </ul>
    </div>
  );
}

export default LiveScore;
