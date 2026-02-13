import React from 'react';
import Sidebar from '../layout/Sidebar';
import Player from '../layout/Player';
import SongCard from '../music/SongCard';
import { Heart, Clock } from 'lucide-react';


const LikedSongs = ({ user, onLogout, songs, likedSongs, currentSong, isPlaying, onPlaySong, onTogglePlay, onNext, onPrev, onToggleLike, isLiked }) => {
    // Filter songs to show only liked ones
    const likedSongsList = songs.filter(song => likedSongs.includes(song.id));

    return (
        <div className="app-container">
            <div className="main-wrapper">
                <Sidebar />

                <div className="main-content">
                    {/* Gradient Header */}
                    <div style={{
                        background: 'linear-gradient(180deg, #5038a0 0%, rgba(80, 56, 160, 0.5) 100%)',
                        padding: '32px',
                        display: 'flex',
                        alignItems: 'flex-end',
                        gap: '24px',
                        minHeight: '340px'
                    }}>
                        
                        <div style={{
                            width: '232px',
                            height: '232px',
                            background: 'linear-gradient(135deg, #450af5, #c4efd9)',
                            borderRadius: '4px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 4px 60px rgba(0,0,0,0.5)',
                            flexShrink: 0
                        }}>
                            <Heart size={80} fill="white" color="white" />
                        </div>

                        {/* Playlist Info */}
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: '8px' }}>
                            <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
                                Playlist
                            </span>
                            <h1 style={{ fontSize: '6rem', fontWeight: 900, lineHeight: 1, margin: 0, color: 'white' }}>
                                Liked Songs
                            </h1>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '16px', fontSize: '0.9rem', fontWeight: 600 }}>
                                <span style={{ fontWeight: 700 }}>{user.name}</span>
                                <span>•</span>
                                <span>{likedSongsList.length} song{likedSongsList.length !== 1 ? 's' : ''}</span>
                            </div>
                        </div>
                    </div>

                    <div style={{
                        position: 'absolute',
                        top: '16px',
                        right: '32px',
                        zIndex: 10
                    }}>
                        <div style={{
                            backgroundColor: 'rgba(0,0,0,0.7)',
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

                    {/* Content Area */}
                    <div style={{
                        background: 'linear-gradient(rgba(80, 56, 160, 0.3) 0%, #121212 300px)',
                        minHeight: 'calc(100vh - 340px)',
                        padding: '24px 32px 120px'
                    }}>
                        {likedSongsList.length > 0 ? (
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                                gap: '24px',
                                marginTop: '24px'
                            }}>
                                {likedSongsList.map(song => (
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
                            // Empty State
                            <div style={{
                                textAlign: 'center',
                                padding: '80px 20px',
                                color: 'white'
                            }}>
                                <Heart size={80} color="#b3b3b3" style={{ marginBottom: '24px' }} />
                                <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '16px' }}>
                                    Songs you like will appear here
                                </h2>
                                <p style={{ color: '#b3b3b3', fontSize: '1rem', marginBottom: '32px' }}>
                                    Save songs by tapping the heart icon.
                                </p>
                                <button
                                    onClick={() => window.location.href = '/search'}
                                    style={{
                                        backgroundColor: 'white',
                                        color: 'black',
                                        border: 'none',
                                        padding: '14px 32px',
                                        borderRadius: '500px',
                                        fontWeight: 700,
                                        fontSize: '0.9rem',
                                        cursor: 'pointer',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px',
                                        transition: 'transform 0.2s'
                                    }}
                                    className="find-songs-btn"
                                >
                                    Find Songs
                                </button>
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
                .find-songs-btn:hover {
                    transform: scale(1.05);
                }
            `}</style>
        </div>
    );
};

export default LikedSongs;
