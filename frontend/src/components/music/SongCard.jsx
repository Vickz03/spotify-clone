import React from 'react';
import { Play, Pause, Heart } from 'lucide-react';


const SongCard = ({ song, currentSong, isPlaying, onPlaySong, onToggleLike, isLiked }) => {
    const isCurrentSong = currentSong?.id === song.id;
    const liked = isLiked(song.id);

    const handleLikeClick = (e) => {
        e.stopPropagation(); // Prevent triggering play when clicking like
        onToggleLike(song.id);
    };

    return (
        <div
            className="song-card"
            onClick={() => onPlaySong(song)}
            style={{
                backgroundColor: '#181818',
                padding: '16px',
                borderRadius: '8px',
                cursor: 'pointer',
                position: 'relative',
                isolation: 'isolate',
                transition: 'background-color 0.3s ease'
            }}
        >
            {/* Album Cover with Play Button */}
            <div style={{ position: 'relative', marginBottom: '16px' }}>
                <img
                    src={song.cover}
                    alt={song.title}
                    style={{
                        width: '100%',
                        aspectRatio: '1/1',
                        objectFit: 'cover',
                        borderRadius: '4px',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
                    }}
                />

                {/* Like Button (Top Right) */}
                <div
                    onClick={handleLikeClick}
                    className="like-btn"
                    style={{
                        position: 'absolute',
                        top: '8px',
                        right: '8px',
                        backgroundColor: 'rgba(0,0,0,0.7)',
                        borderRadius: '50%',
                        width: '32px',
                        height: '32px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0,
                        transition: 'opacity 0.3s ease, transform 0.2s ease',
                        zIndex: 2
                    }}
                >
                    <Heart
                        size={18}
                        fill={liked ? '#1DB954' : 'transparent'}
                        color={liked ? '#1DB954' : 'white'}
                    />
                </div>

                {/* Floating Play Button */}
                <div className="card-play-btn">
                    {isCurrentSong && isPlaying ? (
                        <Pause fill="black" size={22} />
                    ) : (
                        <Play fill="black" size={22} style={{ marginLeft: '4px' }} />
                    )}
                </div>
            </div>

            {/* Song Info */}
            <div style={{ minHeight: '62px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <h3 style={{
                    fontWeight: 700,
                    fontSize: '1rem',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    color: 'white'
                }}>
                    {song.title}
                </h3>
                <p style={{
                    color: '#b3b3b3',
                    fontSize: '0.875rem',
                    lineHeight: '1.4',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical'
                }}>
                    {song.artist}
                </p>
            </div>

            <style>{`
                .song-card:hover {
                    background-color: #282828 !important;
                }
                .song-card:hover .card-play-btn {
                    opacity: 1;
                    transform: translateY(-8px);
                }
                .song-card:hover .like-btn {
                    opacity: 1;
                }
                .like-btn:hover {
                    transform: scale(1.1);
                }
            `}</style>
        </div>
    );
};

export default SongCard;
