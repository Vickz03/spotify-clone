import Sidebar from '../layout/Sidebar';
import Player from '../layout/Player';
import SongCard from '../music/SongCard';


const Dashboard = ({ user, onLogout, songs, currentSong, isPlaying, onPlaySong, onTogglePlay, onNext, onPrev, onToggleLike, isLiked }) => {
    // Get current time for greeting
    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return 'Good morning';
        if (hour < 18) return 'Good afternoon';
        return 'Good evening';
    };

    // Group songs by category
    const tamilSongs = songs.filter(s => s.category === 'Tamil');
    const melodySongs = songs.filter(s => s.category === 'Melody');
    const partySongs = songs.filter(s => s.category === 'Party');
    const internationalSongs = songs.filter(s => s.category === 'International');

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
                        <h1 style={{ fontSize: '2rem', fontWeight: 700, color: 'white' }}>
                            {getGreeting()}
                        </h1>

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

                    {/* Content Sections */}
                    <div style={{ padding: '0 32px 120px' }}>
                        {/* Trending Tamil Hits */}
                        {tamilSongs.length > 0 && (
                            <section style={{ marginBottom: '48px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'white' }}>
                                        Trending Tamil Hits
                                    </h2>
                                    <a href="/library" style={{ color: '#b3b3b3', fontSize: '0.875rem', fontWeight: 700, textDecoration: 'none' }}>
                                        Show all
                                    </a>
                                </div>
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                                    gap: '24px'
                                }}>
                                    {tamilSongs.slice(0, 6).map(song => (
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
                            </section>
                        )}

                        {/* Melody & Love */}
                        {melodySongs.length > 0 && (
                            <section style={{ marginBottom: '48px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'white' }}>
                                        Melody & Love
                                    </h2>
                                    <a href="/library" style={{ color: '#b3b3b3', fontSize: '0.875rem', fontWeight: 700, textDecoration: 'none' }}>
                                        Show all
                                    </a>
                                </div>
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                                    gap: '24px'
                                }}>
                                    {melodySongs.slice(0, 6).map(song => (
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
                            </section>
                        )}

                        {/* Party Hits */}
                        {partySongs.length > 0 && (
                            <section style={{ marginBottom: '48px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'white' }}>
                                        Party Hits
                                    </h2>
                                    <a href="/library" style={{ color: '#b3b3b3', fontSize: '0.875rem', fontWeight: 700, textDecoration: 'none' }}>
                                        Show all
                                    </a>
                                </div>
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                                    gap: '24px'
                                }}>
                                    {partySongs.map(song => (
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
                            </section>
                        )}

                        {/* International Hits */}
                        {internationalSongs.length > 0 && (
                            <section style={{ marginBottom: '48px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'white' }}>
                                        International Hits
                                    </h2>
                                    <a href="/library" style={{ color: '#b3b3b3', fontSize: '0.875rem', fontWeight: 700, textDecoration: 'none' }}>
                                        Show all
                                    </a>
                                </div>
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                                    gap: '24px'
                                }}>
                                    {internationalSongs.map(song => (
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
                            </section>
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
        </div>
    );
};

export default Dashboard;
