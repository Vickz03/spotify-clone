import React, { useState } from 'react';
import Sidebar from '../layout/Sidebar';
import Player from '../layout/Player';
import SongCard from '../music/SongCard';
import { Library as LibraryIcon, Grid, List } from 'lucide-react';


const Library = ({ user, onLogout, songs, currentSong, isPlaying, onPlaySong, onTogglePlay, onNext, onPrev, onToggleLike, isLiked }) => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

    // Get unique categories
    const categories = ['All', ...new Set(songs.map(song => song.category))];

    // Filter songs by category
    const filteredSongs = selectedCategory === 'All'
        ? songs
        : songs.filter(song => song.category === selectedCategory);

    return (
        <div className="app-container">
            <div className="main-wrapper">
                <Sidebar />

                <div className="main-content">
                    {/* Header */}
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
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <LibraryIcon size={32} color="white" />
                            <h1 style={{ fontSize: '2rem', fontWeight: 700, color: 'white' }}>Your Library</h1>
                        </div>

                        {/* User Profile */}
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

                    {/* Filters and View Toggle */}
                    <div style={{
                        padding: '16px 32px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '16px',
                        flexWrap: 'wrap'
                    }}>
                        {/* Category Filters */}
                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                            {categories.map(category => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    style={{
                                        backgroundColor: selectedCategory === category ? 'white' : 'rgba(255,255,255,0.1)',
                                        color: selectedCategory === category ? 'black' : 'white',
                                        border: 'none',
                                        padding: '8px 16px',
                                        borderRadius: '500px',
                                        fontWeight: 600,
                                        fontSize: '0.875rem',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s'
                                    }}
                                    className="category-filter-btn"
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        {/* View Mode Toggle */}
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <button
                                onClick={() => setViewMode('grid')}
                                style={{
                                    backgroundColor: viewMode === 'grid' ? 'rgba(255,255,255,0.2)' : 'transparent',
                                    border: 'none',
                                    padding: '8px',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <Grid size={20} color="white" />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                style={{
                                    backgroundColor: viewMode === 'list' ? 'rgba(255,255,255,0.2)' : 'transparent',
                                    border: 'none',
                                    padding: '8px',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <List size={20} color="white" />
                            </button>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div style={{ padding: '0 32px 120px' }}>
                        <p style={{ color: '#b3b3b3', marginBottom: '24px', fontSize: '0.9rem' }}>
                            Showing {filteredSongs.length} song{filteredSongs.length !== 1 ? 's' : ''}
                        </p>

                        {viewMode === 'grid' ? (
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                                gap: '24px'
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
                            // List View
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                {filteredSongs.map((song, index) => (
                                    <div
                                        key={song.id}
                                        onClick={() => onPlaySong(song)}
                                        style={{
                                            display: 'grid',
                                            gridTemplateColumns: '50px 1fr 200px 100px',
                                            alignItems: 'center',
                                            padding: '8px 16px',
                                            borderRadius: '4px',
                                            cursor: 'pointer',
                                            transition: 'background-color 0.2s'
                                        }}
                                        className="list-item"
                                    >
                                        <span style={{ color: '#b3b3b3', fontSize: '0.9rem' }}>{index + 1}</span>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            <img
                                                src={song.cover}
                                                alt={song.title}
                                                style={{ width: '40px', height: '40px', borderRadius: '4px' }}
                                            />
                                            <div>
                                                <div style={{ color: 'white', fontWeight: 500 }}>{song.title}</div>
                                                <div style={{ color: '#b3b3b3', fontSize: '0.875rem' }}>{song.artist}</div>
                                            </div>
                                        </div>
                                        <span style={{ color: '#b3b3b3', fontSize: '0.875rem' }}>{song.album}</span>
                                        <span style={{ color: '#b3b3b3', fontSize: '0.875rem', textAlign: 'right' }}>{song.duration}</span>
                                    </div>
                                ))}
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
                .category-filter-btn:hover {
                    transform: scale(1.05);
                }
                .list-item:hover {
                    background-color: rgba(255,255,255,0.1);
                }
            `}</style>
        </div>
    );
};

export default Library;
