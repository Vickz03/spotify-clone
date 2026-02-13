import React, { useState, useEffect } from 'react';
import Sidebar from '../layout/Sidebar';
import Player from '../layout/Player';
import SongCard from '../music/SongCard';
import { Search as SearchIcon, X } from 'lucide-react';

/**
 * Search Page Component
 * Features: Real-time search, filter by title/artist/album, clear button
 */
const Search = ({ user, onLogout, songs, currentSong, isPlaying, onPlaySong, onTogglePlay, onNext, onPrev, onToggleLike, isLiked }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredSongs, setFilteredSongs] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

    // Filter songs based on search query
    useEffect(() => {
        if (searchQuery.trim() === '') {
            setFilteredSongs([]);
            setIsSearching(false);
        } else {
            setIsSearching(true);
            const query = searchQuery.toLowerCase();
            const results = songs.filter(song =>
                song.title.toLowerCase().includes(query) ||
                song.artist.toLowerCase().includes(query) ||
                song.album.toLowerCase().includes(query)
            );
            setFilteredSongs(results);
        }
    }, [searchQuery, songs]);

    const handleClearSearch = () => {
        setSearchQuery('');
    };

    return (
        <div className="app-container">
            <div className="main-wrapper">
                <Sidebar />

                <div className="main-content">
                    {/* Header with Search Bar */}
                    <div className="header" style={{
                        padding: '16px 32px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        background: 'linear-gradient(rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)',
                        position: 'sticky',
                        top: 0,
                        zIndex: 10
                    }}>
                        {/* Search Input */}
                        <div style={{
                            position: 'relative',
                            width: '400px',
                            maxWidth: '100%'
                        }}>
                            <SearchIcon
                                size={20}
                                color="#b3b3b3"
                                style={{
                                    position: 'absolute',
                                    left: '16px',
                                    top: '50%',
                                    transform: 'translateY(-50%)'
                                }}
                            />
                            <input
                                type="text"
                                placeholder="What do you want to listen to?"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '12px 48px 12px 48px',
                                    borderRadius: '500px',
                                    border: 'none',
                                    backgroundColor: 'white',
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    outline: 'none'
                                }}
                            />
                            {searchQuery && (
                                <X
                                    size={20}
                                    color="#000"
                                    onClick={handleClearSearch}
                                    style={{
                                        position: 'absolute',
                                        right: '16px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        cursor: 'pointer'
                                    }}
                                />
                            )}
                        </div>

                        {/* User Profile */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <div style={{
                                backgroundColor: '#000',
                                borderRadius: '23px',
                                padding: '2px 16px 2px 2px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                cursor: 'pointer'
                            }} onClick={onLogout}>
                                <div style={{
                                    width: '28px',
                                    height: '28px',
                                    borderRadius: '50%',
                                    backgroundColor: '#333',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontWeight: 700,
                                    fontSize: '0.9rem'
                                }}>
                                    {user.name.charAt(0).toUpperCase()}
                                </div>
                                <span style={{ color: 'white', fontWeight: 700, fontSize: '0.9rem' }}>{user.name}</span>
                            </div>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div style={{ padding: '0 32px 32px', paddingBottom: '120px' }}>
                        {!isSearching ? (
                            // Browse Categories (Before Search)
                            <div>
                                <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '24px', color: 'white' }}>
                                    Browse All
                                </h1>
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                                    gap: '16px'
                                }}>
                                    {['Tamil Hits', 'International', 'Melody', 'Party', 'Workout', 'Chill', 'Focus', 'Sleep'].map((category, idx) => (
                                        <div
                                            key={idx}
                                            style={{
                                                backgroundColor: `hsl(${idx * 45}, 70%, 50%)`,
                                                borderRadius: '8px',
                                                padding: '20px',
                                                height: '180px',
                                                position: 'relative',
                                                overflow: 'hidden',
                                                cursor: 'pointer',
                                                transition: 'transform 0.2s'
                                            }}
                                            className="category-card"
                                        >
                                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'white' }}>
                                                {category}
                                            </h3>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            // Search Results
                            <div>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px', color: 'white' }}>
                                    {filteredSongs.length > 0
                                        ? `Found ${filteredSongs.length} result${filteredSongs.length !== 1 ? 's' : ''} for "${searchQuery}"`
                                        : `No results found for "${searchQuery}"`
                                    }
                                </h2>

                                {filteredSongs.length > 0 ? (
                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                                        gap: '24px',
                                        marginTop: '24px'
                                    }}>
                                        {filteredSongs.map(song => (
                                            <SongCard
                                                key={song.id}
                                                song={song}
                                                currentSong={currentSong}
                                                isPlaying={isPlaying}
                                                onPlaySong={onPlaySong}
                                                onToggleLike={onToggleLike}
                                                isLiked={isLiked}
                                            />
                                        ))}
                                    </div>
                                ) : (
                                    <div style={{
                                        textAlign: 'center',
                                        padding: '60px 20px',
                                        color: '#b3b3b3'
                                    }}>
                                        <SearchIcon size={64} color="#535353" style={{ marginBottom: '16px' }} />
                                        <p style={{ fontSize: '1.2rem', fontWeight: 600 }}>
                                            No songs match your search
                                        </p>
                                        <p style={{ fontSize: '0.9rem', marginTop: '8px' }}>
                                            Try different keywords or browse categories above
                                        </p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {currentSong && (
                <Player
                    currentSong={currentSong}
                    isPlaying={isPlaying}
                    onTogglePlay={onTogglePlay}
                    onNext={onNext}
                    onPrev={onPrev}
                />
            )}

            <style>{`
                .category-card:hover {
                    transform: scale(1.05);
                }
            `}</style>
        </div>
    );
};

export default Search;
