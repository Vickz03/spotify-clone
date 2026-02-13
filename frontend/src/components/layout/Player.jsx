import React, { useRef, useEffect, useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Repeat, Shuffle } from 'lucide-react';

const Player = ({ currentSong, isPlaying, onTogglePlay, onNext, onPrev }) => {
    const audioRef = useRef(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const playPromiseRef = useRef(null);

    // Handle song changes
    useEffect(() => {
        if (currentSong && audioRef.current) {
            // Reset state
            setCurrentTime(0);
            setDuration(0);

            // Cancel any pending play promise
            if (playPromiseRef.current) {
                playPromiseRef.current.catch(() => { });
            }

            // Load new song
            audioRef.current.load();

            // Play if needed
            if (isPlaying) {
                const playPromise = audioRef.current.play();
                if (playPromise !== undefined) {
                    playPromiseRef.current = playPromise;
                    playPromise.catch(error => {
                        // Ignore AbortError - it's expected when switching songs
                        if (error.name !== 'AbortError') {
                            console.error('Playback error:', error);
                        }
                    });
                }
            }
        }
    }, [currentSong]);

    // Handle play/pause state changes
    useEffect(() => {
        if (!audioRef.current) return;

        const audio = audioRef.current;

        // Cancel any pending play promise
        if (playPromiseRef.current) {
            playPromiseRef.current.catch(() => { });
        }

        if (isPlaying) {
            const playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromiseRef.current = playPromise;
                playPromise.catch(error => {
                    if (error.name !== 'AbortError') {
                        console.error('Playback error:', error);
                    }
                });
            }
        } else {
            audio.pause();
        }
    }, [isPlaying]);

    // Handle Volume Change
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume]);

    const handleTimeUpdate = () => {
        if (!audioRef.current) return;
        const current = audioRef.current.currentTime;
        const dur = audioRef.current.duration;
        setCurrentTime(current);
        if (dur && !isNaN(dur)) {
            setDuration(dur);
        }
    };

    const handleSeek = (e) => {
        if (!audioRef.current || !duration) return;
        const seekTime = (e.target.value / 100) * duration;
        audioRef.current.currentTime = seekTime;
        setCurrentTime(seekTime);
    };

    const handleVolumeChange = (e) => {
        setVolume(parseFloat(e.target.value));
    };

    const formatTime = (time) => {
        if (!time || isNaN(time)) return "0:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    if (!currentSong) return null;

    return (
        <div style={{
            height: '90px',
            backgroundColor: '#181818',
            borderTop: '1px solid #282828',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 16px',
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 100
        }}>
            <div style={{ display: 'flex', alignItems: 'center', width: '30%', gap: '14px' }}>
                <img
                    src={currentSong.cover}
                    alt={currentSong.title}
                    style={{ width: '56px', height: '56px', objectFit: 'cover', borderRadius: '4px' }}
                />
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <span style={{ color: 'white', fontWeight: 500, fontSize: '0.9rem' }}>{currentSong.title}</span>
                    <span style={{ color: '#b3b3b3', fontSize: '0.75rem', marginTop: '2px' }}>{currentSong.artist}</span>
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '8px' }}>
                    <Shuffle size={16} color="#b3b3b3" className="hover-icon" style={{ cursor: 'pointer' }} />

                    <SkipBack
                        size={20}
                        fill="#b3b3b3"
                        color="#b3b3b3"
                        onClick={onPrev}
                        style={{ cursor: 'pointer' }}
                        className="hover-icon"
                    />

                    <div
                        onClick={onTogglePlay}
                        style={{
                            backgroundColor: 'white',
                            borderRadius: '50%',
                            width: '32px',
                            height: '32px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            transition: 'transform 0.1s'
                        }}
                        className="play-btn scale-on-hover"
                    >
                        {isPlaying ? (
                            <Pause size={18} fill="black" color="black" />
                        ) : (
                            <Play size={18} fill="black" color="black" style={{ marginLeft: '2px' }} />
                        )}
                    </div>

                    <SkipForward
                        size={20}
                        fill="#b3b3b3"
                        color="#b3b3b3"
                        onClick={onNext}
                        style={{ cursor: 'pointer' }}
                        className="hover-icon"
                    />

                    <Repeat size={16} color="#b3b3b3" className="hover-icon" style={{ cursor: 'pointer' }} />
                </div>

                {/* Progress Bar with Seek */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%' }}>
                    <span style={{ fontSize: '0.7rem', color: '#b3b3b3', minWidth: '32px', textAlign: 'right' }}>{formatTime(currentTime)}</span>

                    <div className="progress-container" style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={duration ? (currentTime / duration) * 100 : 0}
                            onChange={handleSeek}
                            className="seek-slider"
                            style={{ width: '100%', cursor: 'pointer' }}
                        />
                    </div>

                    <span style={{ fontSize: '0.7rem', color: '#b3b3b3', minWidth: '32px' }}>{formatTime(duration)}</span>
                </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', width: '30%', justifyContent: 'flex-end', gap: '8px' }}>
                <Volume2 size={20} color="#b3b3b3" />
                <div style={{ width: '100px', display: 'flex', alignItems: 'center' }}>
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onChange={handleVolumeChange}
                        className="volume-slider"
                        style={{ width: '100%', cursor: 'pointer' }}
                    />
                </div>
            </div>

            <audio
                ref={audioRef}
                src={currentSong.url}
                onTimeUpdate={handleTimeUpdate}
                onEnded={() => onNext && onNext()}
            />

            <style>{`
                .hover-icon:hover {
                    color: white !important;
                    fill: white !important;
                }
                .scale-on-hover:hover {
                    transform: scale(1.1);
                }
                /* Custom Range Slider Styles */
                input[type=range] {
                    -webkit-appearance: none;
                    background: transparent;
                }
                input[type=range]::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    height: 12px;
                    width: 12px;
                    border-radius: 50%;
                    background: #1DB954;
                    cursor: pointer;
                    margin-top: -4px;
                    opacity: 0;
                    transition: opacity 0.2s;
                }
                .progress-container:hover input[type=range]::-webkit-slider-thumb,
                .volume-slider:hover::-webkit-slider-thumb {
                    opacity: 1;
                }
                input[type=range]::-webkit-slider-runnable-track {
                    width: 100%;
                    height: 4px;
                    cursor: pointer;
                    background: #535353;
                    border-radius: 2px;
                }
            `}</style>
        </div>
    );
};

export default Player;
