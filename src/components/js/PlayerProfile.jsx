import React, { useState } from 'react';
import '../css/PlayerProfile.css';

function PlayerProfiles() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  const players = [
    {
      name: 'VIRAT KOHLI',
      team: 'India',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKnc5WzhI2eJPpbZEPp-3mcfpdlt_BM3eLJw&usqp=CAU',
      role: 'Batsman',
      battingStyle: 'Right-handed',
      bowlingStyle: 'Right-arm medium',
      stats: {
        matchesPlayed: 250,
        totalRuns: 12000,
        centuries: 43,
        fifties: 58,
        highestScore: 183,
        bowlingAverage: 38.64,
        economyRate: 4.98,
        wickets: 6,
        bestBowling: '3/22',
      },
    },
    {
      name: 'KANE WILLIAMSON',
      team: 'New Zealand',
      imageUrl: 'https://api.bdcrictime.com/Profile/kane-williamson-12_10_2023.jpg',
      role: 'Batsman',
      battingStyle: 'Right-handed',
      bowlingStyle: 'Right-arm off-spin',
      stats: {
        matchesPlayed: 150,
        totalRuns: 8000,
        centuries: 20,
        fifties: 40,
        highestScore: 176,
        bowlingAverage: 32.75,
        economyRate: 5.25,
        wickets: 10,
        bestBowling: '4/28',
      },
    },
    {
      name: 'MS DHONI',
      team: 'India',
      imageUrl: 'https://www.iwmbuzz.com/wp-content/uploads/2023/01/are-you-mahi-fan-answer-these-questions-to-prove.jpg',
      role: 'Wicketkeeper-Batsman',
      battingStyle: 'Right-handed',
      bowlingStyle: 'Right-arm medium',
      stats: {
        matchesPlayed: 350,
        totalRuns: 10000,
        centuries: 16,
        fifties: 72,
        highestScore: 183,
        battingAverage: 50.35,
        stumpings: 123,
        dismissals: 450,
      },
    },
    {
      name: 'BEN STOKES',
      team: 'England',
      imageUrl: 'https://crictoday.com/wp-content/uploads/2023/02/ben-stokes-3-1-1200x675.jpg',
      role: 'All-Rounder',
      battingStyle: 'Left-handed',
      bowlingStyle: 'Right-arm fast-medium',
      stats: {
        matchesPlayed: 120,
        totalRuns: 3500,
        centuries: 7,
        fifties: 23,
        highestScore: 258,
        battingAverage: 35.88,
        wickets: 130,
        bowlingAverage: 27.41,
        economyRate: 3.96,
        bestBowling: '6/22',
      },
    },
    {
      name: 'TRAVIS HEAD',
      team: 'Australia',
      imageUrl: 'https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/361100/361159.6.jpg',
      role: 'Batsman',
      battingStyle: 'Left-handed',
      bowlingStyle: 'Right-arm off-spin',
      stats: {
        matchesPlayed: 80,
        totalRuns: 2800,
        centuries: 5,
        fifties: 15,
        highestScore: 176,
        battingAverage: 38.24,
        wickets: 12,
        bowlingAverage: 35.67,
        economyRate: 4.87,
        bestBowling: '3/28',
      },
    },
    {
      "name": "PAT CUMMINS",
      "team": "Australia",
      "imageUrl": "https://api.bdcrictime.com/Profile/pat-cummins-10_10_2023.jpg",
      "role": "Bowler",
      "battingStyle": "Right-handed",
      "bowlingStyle": "Right-arm fast",
      "stats": {
        "matchesPlayed": 35,
        "inningsBowled": 67,
        "runsConceded": 2475,
        "wickets": 158,
        "bestBowling": "6/23",
        "bowlingAverage": 15.66,
        "economyRate": 2.98,
        "strikeRate": 29.6
      },
    },
    {
      "name": "SHIKHAR DHAWAN",
      "team": "India",
      "imageUrl": "https://www.hindustantimes.com/static-content/1y/cricket-logos/players/shikhar-dhawan.png",
      "role": "Batsman",
      "battingStyle": "Left-handed",
      "stats": {
        "matchesPlayed": 142,
        "innings": 139,
        "totalRuns": 5977,
        "centuries": 17,
        "fifties": 33,
        "highestScore": 143,
        "battingAverage": 45.28
      },
    },
    {
      "name": "SACHIN TENDULKAR",
      "team": "India",
      "imageUrl": "https://cricketaddictor.com/wp-content/uploads/2021/03/Sachin-Tendulkar-6.jpg",
      "role": "Batsman",
      "battingStyle": "Right-handed",
      "stats": {
        "matchesPlayed": 463,
        "innings": 452,
        "totalRuns": 18426,
        "centuries": 49,
        "fifties": 96,
        "highestScore": 200,
        "battingAverage": 44.83
      },
    },
    {
      "name": "SURESH RAINA",
      "team": "India",
      "imageUrl": "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/316500/316523.png",
      "role": "Batsman",
      "battingStyle": "Left-handed",
      "stats": {
        "matchesPlayed": 226,
        "innings": 194,
        "totalRuns": 5615,
        "centuries": 5,
        "fifties": 38,
        "highestScore": 116,
        "battingAverage": 35.31
      },
    },
    {
      "name": "DAVID WARNER",
      "team": "Australia",
      "imageUrl": "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/316500/316589.png",
      "role": "Batsman",
      "battingStyle": "Left-handed",
      "stats": {
        "matchesPlayed": 128,
        "innings": 126,
        "totalRuns": 5454,
        "centuries": 18,
        "fifties": 23,
        "highestScore": 179,
        "battingAverage": 45.43
      },
    },
    {
      "name": "RICKY PONTING",
      "team": "Australia",
      "imageUrl": "https://crictoday.com/wp-content/uploads/2022/12/1-9.jpg",
      "role": "Batsman",
      "battingStyle": "Right-handed",
      "stats": {
        "matchesPlayed": 375,
        "innings": 365,
        "totalRuns": 13704,
        "centuries": 30,
        "fifties": 82,
        "highestScore": 164,
        "battingAverage": 42.03
      },
    },
    {
      "name": "KUMAR SANGAKARA",
      "team": "Sri Lanka",
      "imageUrl": "https://cdn.wisden.com/wp-content/uploads/2017/11/GettyImages-462967890-e1525085996177.jpg",
      "role": "Wicketkeeper-Batsman",
      "battingStyle": "Left-handed",
      "stats": {
        "matchesPlayed": 594,
        "innings": 666,
        "totalRuns": 28016,
        "centuries": 63,
        "fifties": 153,
        "highestScore": 319,
        "battingAverage": 46.77
      },
    },
    {
      "name": "AB DE VILLIERS",
      "team": "South Africa",
      "imageUrl": "https://static-files.cricket-australia.pulselive.com/headshots/440/792-camedia.png",
      "role": "Batsman",
      "battingStyle": "Right-handed",
      "stats": {
        "matchesPlayed": 295,
        "innings": 280,
        "totalRuns": 8778,
        "centuries": 25,
        "fifties": 53,
        "highestScore": 176,
        "battingAverage": 53.50
      },
    },
    {
      "name": "JACQUES KALLIS",
      "team": "South Africa",
      "imageUrl": "https://images.news18.com/ibnlive/uploads/2022/09/kallis.jpg",
      "role": "All-rounder",
      "battingStyle": "Right-handed",
      "bowlingStyle": "Right-arm fast-medium",
      "stats": {
        "matchesPlayed": 519,
        "innings": 617,
        "totalRuns": 25534,
        "centuries": 62,
        "fifties": 162,
        "highestScore": 224,
        "battingAverage": 49.10,
        "wickets": 577,
        "bowlingAverage": 27.09,
        "economyRate": 3.53,
        "bestBowling": "6/54"
      },
    },
    {
      "name": "BRIAN LARA",
      "team": "West Indies",
      "imageUrl": "https://www.mykhel.com/thumb/247x100x233/cricket/players/nonopta/4/nonopta-player-2524.1689759307.jpg",
      "role": "Batsman",
      "battingStyle": "Left-handed",
      "stats": {
        "matchesPlayed": 430,
        "innings": 490,
        "totalRuns": 22358,
        "centuries": 53,
        "fifties": 111,
        "highestScore": 400,
        "battingAverage": 49.30
      },
    },
    {
      "name": "RAHUL DRAVID",
      "team": "India",
      "imageUrl": "https://img.mensxp.com/media/content/2021/Aug/Image-1-Reuters-14_611e2a1c17228.jpeg",
      "role": "Batsman",
      "battingStyle": "Right-handed",
      "stats": {
        "matchesPlayed": 509,
        "innings": 605,
        "totalRuns": 24177,
        "centuries": 48,
        "fifties": 146,
        "highestScore": 270,
        "battingAverage": 45.41
      },
    },
    {
      "name": "WASIM AKRAM",
      "team": "Pakistan",
      "imageUrl": "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/320400/320475.png",
      "role": "Bowler",
      "battingStyle": "Left-handed",
      "bowlingStyle": "Left-arm fast",
      "stats": {
        "matchesPlayed": 460,
        "wickets": 916,
        "bowlingAverage": 23.52,
        "economyRate": 3.89,
        "bestBowling": "5/15"
      },
    },
    {
      name: "Brandon Taylor",
      team: "Zimbabwe",
      "imageUrl": "https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/09/15/Pictures/india-cup-zimbabwe-2015-icc-cricket-world_42b86d0c-99d6-11e7-9cb6-5fa30af43469.jpg",
      "role": "Batsman",
      "battingStyle": "Right-handed",
      "stats": {
        "matchesPlayed": 193,
        "innings": 171,
        "totalRuns": 6059,
        "centuries": 11,
        "fifties": 36,
        "highestScore": 145,
        "battingAverage": 38.15
      },
    },
    
    
    // Add more players with their stats
  ];

  const handlePlayerClick = (player) => {
    setSelectedPlayer(player);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter players based on search term
  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="player-profiles" id="player-profiles">
      <div className="player-profiles-container">
        <h2 className="player-profiles-title">Player Profiles</h2>
        
        {/* Search input field */}
        <div className="search-container">

        <input
          type="text"
          className="search-input"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        </div>
        
        <div className="player-list">
          {/* Map through filtered players instead of original players array */}
          {filteredPlayers.map((player, index) => (
            <div className="player-item" key={index} onClick={() => handlePlayerClick(player)}>
              <img src={player.imageUrl} alt={player.name} className="player-image" />
              <h3>{player.name}</h3>
              <p>{player.team}</p>
            </div>
          ))}
        </div>
      </div>
      {selectedPlayer && (
        <div className="selected-player-details">
          <h3>{selectedPlayer.name}</h3>
          <div className="player-details">
            <img src={selectedPlayer.imageUrl} alt={selectedPlayer.name} className="player-image" />
            <p>Team: {selectedPlayer.team}</p>
            <p>Role: {selectedPlayer.role}</p>
            <p>Batting Style: {selectedPlayer.battingStyle}</p>
            <p>Bowling Style: {selectedPlayer.bowlingStyle}</p>
            <div className="player-stats">
              <h4>Statistics</h4>
              <p>Matches Played: {selectedPlayer.stats.matchesPlayed}</p>
              <p>Total Runs: {selectedPlayer.stats.totalRuns}</p>
              <p>Centuries: {selectedPlayer.stats.centuries}</p>
              <p>Fifties: {selectedPlayer.stats.fifties}</p>
              <p>Highest Score: {selectedPlayer.stats.highestScore}</p>
              <p>Bowling Average: {selectedPlayer.stats.bowlingAverage}</p>
              <p>Economy Rate: {selectedPlayer.stats.economyRate}</p>
              <p>Wickets: {selectedPlayer.stats.wickets}</p>
              <p>Best Bowling: {selectedPlayer.stats.bestBowling}</p>
            </div>
          </div>
          <button onClick={() => setSelectedPlayer(null)}>Close</button>
        </div>
      )}
    </section>
  );
}

export default PlayerProfiles;
