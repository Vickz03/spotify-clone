import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import Search from './components/pages/Search';
import Library from './components/pages/Library';
import LikedSongs from './components/pages/LikedSongs';
import { getSongs } from './utils/api';
import './index.css';

function App() {
  const [user, setUser] = useState(null);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songs, setSongs] = useState([]);
  const [likedSongs, setLikedSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load user and liked songs from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('spotify_user');
    const storedLikedSongs = localStorage.getItem('spotify_liked_songs');

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    if (storedLikedSongs) {
      setLikedSongs(JSON.parse(storedLikedSongs));
    }

    // Fetch songs
    const fetchMusic = async () => {
      try {
        const data = await getSongs();
        setSongs(data);
      } catch (error) {
        console.error("Failed to load music library.");
      } finally {
        setLoading(false);
      }
    };

    fetchMusic();
  }, []);

  // Persist liked songs to localStorage
  useEffect(() => {
    localStorage.setItem('spotify_liked_songs', JSON.stringify(likedSongs));
  }, [likedSongs]);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('spotify_user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('spotify_user');
    setCurrentSong(null);
    setIsPlaying(false);
  };

  const playSong = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    if (currentSong) {
      setIsPlaying(!isPlaying);
    }
  };

  const playNext = () => {
    if (!currentSong || songs.length === 0) return;
    const currentIndex = songs.findIndex(s => s.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % songs.length;
    setCurrentSong(songs[nextIndex]);
    setIsPlaying(true);
  };

  const playPrev = () => {
    if (!currentSong || songs.length === 0) return;
    const currentIndex = songs.findIndex(s => s.id === currentSong.id);
    const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
    setCurrentSong(songs[prevIndex]);
    setIsPlaying(true);
  };

  
  const toggleLike = (songId) => {
    setLikedSongs(prev => {
      if (prev.includes(songId)) {
        return prev.filter(id => id !== songId);
      } else {
        return [...prev, songId];
      }
    });
  };

  const isLiked = (songId) => {
    return likedSongs.includes(songId);
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'black', color: 'white' }}>
        <div className="loader">Loading Spotify...</div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={!user ? <Login onLogin={handleLogin} /> : <Navigate to="/" />}
        />
        <Route
          path="/*"
          element={user ? (
            <Routes>
              <Route
                path="/"
                element={
                  <Dashboard
                    user={user}
                    onLogout={handleLogout}
                    songs={songs}
                    currentSong={currentSong}
                    isPlaying={isPlaying}
                    onPlaySong={playSong}
                    onTogglePlay={togglePlay}
                    onNext={playNext}
                    onPrev={playPrev}
                    onToggleLike={toggleLike}
                    isLiked={isLiked}
                  />
                }
              />
              <Route
                path="/search"
                element={
                  <Search
                    user={user}
                    onLogout={handleLogout}
                    songs={songs}
                    currentSong={currentSong}
                    isPlaying={isPlaying}
                    onPlaySong={playSong}
                    onTogglePlay={togglePlay}
                    onNext={playNext}
                    onPrev={playPrev}
                    onToggleLike={toggleLike}
                    isLiked={isLiked}
                  />
                }
              />
              <Route
                path="/library"
                element={
                  <Library
                    user={user}
                    onLogout={handleLogout}
                    songs={songs}
                    currentSong={currentSong}
                    isPlaying={isPlaying}
                    onPlaySong={playSong}
                    onTogglePlay={togglePlay}
                    onNext={playNext}
                    onPrev={playPrev}
                    onToggleLike={toggleLike}
                    isLiked={isLiked}
                  />
                }
              />
              <Route
                path="/liked"
                element={
                  <LikedSongs
                    user={user}
                    onLogout={handleLogout}
                    songs={songs}
                    likedSongs={likedSongs}
                    currentSong={currentSong}
                    isPlaying={isPlaying}
                    onPlaySong={playSong}
                    onTogglePlay={togglePlay}
                    onNext={playNext}
                    onPrev={playPrev}
                    onToggleLike={toggleLike}
                    isLiked={isLiked}
                  />
                }
              />
            </Routes>
          ) : (
            <Navigate to="/login" />
          )}
        />
      </Routes>
    </Router>
  );
}

export default App;
