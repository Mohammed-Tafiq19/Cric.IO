import React, { useState } from 'react';
import '../css/Awards.css';

function Awards() {
  const [selectedAward, setSelectedAward] = useState(null);

  const awards = [
    {
      name: 'Sir Garfield Sobers Trophy',
      description: 'ICC Player of the Year',
      imageUrl: 'sir_garfield_sobers_trophy.jpg',
      winners: [
        {
          name: 'Virat Kohli',
          team: 'India',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKnc5WzhI2eJPpbZEPp-3mcfpdlt_BM3eLJw&usqp=CAU',
          achievements: 'Multiple centuries scored in the year.'
        },
        {
          name: 'Steve Smith',
          team: 'Australia',
          imageUrl: 'https://assets.telegraphindia.com/telegraph/2023/Jul/1688173858_smith.gif',
          achievements: 'Consistent batting performance across formats.'
        }
      ]
    },
    {
      name: 'ICC Test Player of the Year',
      description: 'Best Test player by ICC',
      imageUrl: 'icc_test_player.jpg',
      winners: [
        {
          name: 'Kane Williamson',
          team: 'New Zealand',
          imageUrl: 'https://api.bdcrictime.com/Profile/kane-williamson-12_10_2023.jpg',
          achievements: 'Highest run scorer in Test matches.'
        }
      ]
    },
    {
      name: 'ICC ODI Player of the Year',
      description: 'Best ODI player by ICC',
      imageUrl: 'icc_odi_player.jpg',
      winners: [
        {
          name: 'Rohit Sharma',
          team: 'India',
          imageUrl: 'https://static.independent.co.uk/2023/11/14/15/12-5cb6b5afc7ac4c868ebce09feb88f6d4.jpg',
          achievements: 'Most ODI runs scored in the year.'
        }
      ]
    },
    {
      name: 'ICC T20 Player of the Year',
      description: 'Best T20 player by ICC',
      imageUrl: 'icc_t20_player.jpg',
      winners: [
        {
          name: 'Babar Azam',
          team: 'Pakistan',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVger7JqwFocps2AisqdZm0SyvPTPMrVt_Vg&usqp=CAU',
          achievements: 'Highest T20I run-scorer in the year.'
        }
      ]
    },
    {
      name: 'Wisdom Cricketers of the Year',
      description: 'Annual Cricket award by ICC',
      imageUrl: 'icc_odi_player.jpg',
      winners: [
        {
          name: 'Harmanpreet Kaur',
          team: 'New Zealand',
          imageUrl: 'https://femalecricket.com/wp-content/uploads/2023/01/harmanpreet-kaur-indian-womens-cricket-team-1200x788.jpg',
          achievements: 'Highest run scorer in Odi matches.'
        }
      ]
    },
    // Add more award objects with player details
  ];

  const handleAwardClick = (award) => {
    setSelectedAward(award);
  };

  return (
    <section className="awards" id="awards">
      <div className="awards-container">
        <h2 className="awards-title">Prestigious Cricketing Awards</h2>
        <div className="award-list">
          {awards.map((award, index) => (
            <div className="award-item" key={index} onClick={() => handleAwardClick(award)}>
              <img src={award.imageUrl} alt={award.name} className="award-image" />
              <h3>{award.name}</h3>
              <p>{award.description}</p>
            </div>
          ))}
        </div>
      </div>
      {selectedAward && (
        <div className="selected-award-details">
          <h3>{selectedAward.name}</h3>
          {selectedAward.winners && selectedAward.winners.map((winner, index) => (
            <div className="player-details" key={index}>
              <img src={winner.imageUrl} alt={winner.name} className="player-image" />
              <p>{winner.name} - {winner.team}</p>
              <p>Achievements: {winner.achievements}</p>
            </div>
          ))}
          <button onClick={() => setSelectedAward(null)}>Close</button>
        </div>
      )}
    </section>
  );
}

export default Awards;
