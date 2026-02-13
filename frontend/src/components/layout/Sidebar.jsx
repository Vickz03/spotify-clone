import React from 'react';
import { Home, Search, Library, Heart, Download } from 'lucide-react';
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
    return (
        <div style={{
            width: '280px',
            backgroundColor: '#000000',
            padding: '24px 8px',
            display: 'flex',
            flexDirection: 'column',
            color: '#b3b3b3',
            flexShrink: 0,
            height: '100%',
            overflowY: 'auto'
        }}>
            {/* Brand Logo */}
            <div style={{ padding: '0 24px', marginBottom: '24px' }}>
                <h2 style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.05em' }}>
                    <span style={{ fontSize: '2rem' }}>📡</span> Spotify
                </h2>
            </div>

            {/* Main Navigation */}
            <nav>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '20px',
                                padding: '0 16px',
                                height: '48px',
                                borderRadius: '4px',
                                textDecoration: 'none',
                                transition: 'color 0.3s ease, background-color 0.3s ease'
                            }}
                        >
                            {({ isActive }) => (
                                <>
                                    <Home size={28} strokeWidth={isActive ? 3 : 2} />
                                    <span>Home</span>
                                </>
                            )}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/search"
                            className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '20px',
                                padding: '0 16px',
                                height: '48px',
                                borderRadius: '4px',
                                textDecoration: 'none',
                                transition: 'color 0.3s ease, background-color 0.3s ease'
                            }}
                        >
                            {({ isActive }) => (
                                <>
                                    <Search size={28} strokeWidth={isActive ? 3 : 2} />
                                    <span>Search</span>
                                </>
                            )}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/library"
                            className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '20px',
                                padding: '0 16px',
                                height: '48px',
                                borderRadius: '4px',
                                textDecoration: 'none',
                                transition: 'color 0.3s ease, background-color 0.3s ease'
                            }}
                        >
                            {({ isActive }) => (
                                <>
                                    <Library size={28} strokeWidth={isActive ? 3 : 2} />
                                    <span>Your Library</span>
                                </>
                            )}
                        </NavLink>
                    </li>
                </ul>
            </nav>

            {/* Secondary Actions */}
            <div style={{ marginTop: '24px' }}>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li>
                        <NavLink
                            to="/liked"
                            className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
                            style={{
                                padding: '0 16px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '16px',
                                cursor: 'pointer',
                                transition: 'color 0.3s',
                                textDecoration: 'none',
                                borderRadius: '4px'
                            }}
                        >
                            {({ isActive }) => (
                                <>
                                    <div style={{
                                        background: isActive ? '#1DB954' : 'linear-gradient(135deg, #450af5, #c4efd9)',
                                        width: '24px',
                                        height: '24px',
                                        borderRadius: '2px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        opacity: isActive ? 1 : 0.8
                                    }}>
                                        <Heart size={12} fill="white" color="white" />
                                    </div>
                                    <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>Liked Songs</span>
                                </>
                            )}
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Scrollable Playlist List */}
            <div style={{ borderTop: '1px solid #282828', margin: '16px 16px 0', paddingTop: '16px', flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.9rem' }} className="playlist-scroll">
                    {['Leo Official Playlist', 'Jailer Vibes', 'Anirudh Hits', 'AR Rahman Magic', '90s Tamil Hits', 'Workout Pump', 'Sleep Focus', 'Coding Mode (Dark)', 'Indie Rock Essentials', 'R&B Classics', 'Top Hits 2024'].map((playlist, i) => (
                        <div key={i} className="playlist-item">
                            <span>{playlist}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Install App CTA */}
            <div style={{ padding: '16px 16px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', transition: '0.2s' }} className="nav-item">
                    <Download size={20} />
                    <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>Install App</span>
                </div>
            </div>

            <style>{`
                .nav-item {
                    color: #b3b3b3;
                    font-weight: 600;
                }
                .nav-item.active {
                    color: white !important;
                    font-weight: 700;
                }
                .nav-item:hover {
                    color: white !important;
                }
                .playlist-item {
                    cursor: pointer;
                    transition: color 0.2s;
                    padding-right: 8px;
                }
                .playlist-item:hover {
                    color: white;
                }
                /* Custom Scrollbar */
                .playlist-scroll::-webkit-scrollbar {
                    width: 8px;
                }
                .playlist-scroll::-webkit-scrollbar-thumb {
                    background-color: transparent;
                }
                .playlist-scroll:hover::-webkit-scrollbar-thumb {
                    background-color: #555;
                }
            `}</style>
        </div>
    );
};

export default Sidebar;
