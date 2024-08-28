import React, { useState, useEffect } from 'react';
import './App.css'; 
import Header from './components/js/Header';
import Gallery from './components/js/Gallery';
import Awards from './components/js/Awards';
import Footer from './components/js/Footer';
import Contact from "./components/js/Contact";
import News from './components/js/News';
import LiveScore from './components/js/LiveScore';
import PlayerProfile from './components/js/PlayerProfile';


function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [players, setPlayers] = useState([]);

  // Simulate loading delay
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);

      const samplePlayers = [
        { id: 1, name: 'Player 1', position: 'Batsman', team: 'Team A', imageSrc: 'https://images1.wionews.com/images/wion/900x1600/2023/7/6/1688647547758_msdhoniedited070722013442.jpeg' },
        { id: 2, name: 'Player 2', position: 'Bowler', team: 'Team B', imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Virat_Kohli_during_the_India_vs_Aus_4th_Test_match_at_Narendra_Modi_Stadium_on_09_March_2023.jpg' },
        { id: 3, name: 'Player 3', position: 'All-Rounder', team: 'Team C', imageSrc: 'https://staticg.sportskeeda.com/editor/2023/02/4a3c6-16766121781745-1920.jpg' },
        { id: 3, name: 'Player 4', position: 'All-Rounder', team: 'Team C', imageSrc: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/316400/316486.png' },
        { id: 3, name: 'Player 5', position: 'All-Rounder', team: 'Team C', imageSrc: 'https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/304000/304057.png' },
        { id: 3, name: 'Player 6', position: 'All-Rounder', team: 'Team C', imageSrc: 'https://imgeng.jagran.com/images/2022/jan/11_01_2022-rahul_dravid_bcci_223717141641878326871.jpg' },
     
      ];
      setPlayers(samplePlayers);
    }, 2000); // Change the duration as needed

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const loader = document.getElementById('loader');
    loader.addEventListener('animationend', () => {
      loader.remove();
    });
  }, []);
  

  return (
    <div className={`app-container ${isLoading ? 'loading' : ''}`}>
      {isLoading ? (
      <div id="loader" className="loader"></div>
      ) : (
        <div className="content">
          <Header />
          <LiveScore />
          <Gallery />
          <News  />
          <Awards />
          <PlayerProfile players={players} />
          <br/>
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
