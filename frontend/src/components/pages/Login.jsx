import React, { useState } from 'react';
import { PlayCircle } from 'lucide-react';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('user');
    const [password, setPassword] = useState('password');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('https://spotify-clone-6wnc.onrender.com/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (data.success) {
                onLogin(data.user);
            } else {
                setError(data.message || 'Incorrect username or password.');
            }
        } catch (err) {
            setError('Service unavailable. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundColor: 'black',
            color: 'white',
            paddingTop: '32px',
            background: 'linear-gradient(rgba(0,0,0,0.6) 0%, #000 100%)'
        }}>
            <header style={{
                width: '100%',
                padding: '32px 0',
                display: 'flex',
                justifyContent: 'center',
                borderBottom: '1px solid #222'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <PlayCircle size={40} fill="white" color="black" />
                    <span style={{ fontSize: '2rem', fontWeight: 700, letterSpacing: '-1px' }}>Spotify</span>
                </div>
            </header>

            <div style={{
                marginTop: '32px',
                maxWidth: '450px',
                width: '100%',
                padding: '0 16px'
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    marginBottom: '16px'
                }}>
                    <button style={{
                        backgroundColor: '#1877F2',
                        color: 'white',
                        border: 'none',
                        padding: '14px',
                        borderRadius: '500px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        fontSize: '0.9rem',
                        letterSpacing: '1px',
                        cursor: 'pointer'
                    }}>
                        Continue with Facebook
                    </button>
                    <button style={{
                        backgroundColor: 'black',
                        color: '#6a6a6a',
                        border: '1px solid #6a6a6a',
                        padding: '12px',
                        borderRadius: '500px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        fontSize: '0.9rem',
                        letterSpacing: '1px',
                        cursor: 'pointer'
                    }}>
                        Continue with Apple
                    </button>
                    <button style={{
                        backgroundColor: 'black',
                        color: '#6a6a6a',
                        border: '1px solid #6a6a6a',
                        padding: '12px',
                        borderRadius: '500px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        fontSize: '0.9rem',
                        letterSpacing: '1px',
                        cursor: 'pointer'
                    }}>
                        Continue with Google
                    </button>
                </div>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    margin: '20px 0',
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '12px',
                    letterSpacing: '1px'
                }}>
                    <div style={{ flex: 1, height: '1px', backgroundColor: '#333' }}></div>
                    <span style={{ padding: '0 16px' }}>OR</span>
                    <div style={{ flex: 1, height: '1px', backgroundColor: '#333' }}></div>
                </div>

                {error && (
                    <div style={{
                        backgroundColor: '#e91429',
                        color: 'white',
                        padding: '12px',
                        borderRadius: '4px',
                        marginBottom: '16px',
                        fontSize: '14px',
                        textAlign: 'center'
                    }}>
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ fontWeight: 700, fontSize: '0.875rem' }}>Email address or username</label>
                        <input
                            type="text"
                            placeholder="Email address or username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            style={{
                                padding: '14px',
                                borderRadius: '4px',
                                border: '1px solid #555',
                                backgroundColor: '#121212',
                                color: 'white',
                                fontSize: '1rem'
                            }}
                        />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ fontWeight: 700, fontSize: '0.875rem' }}>Password</label>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{
                                padding: '14px',
                                borderRadius: '4px',
                                border: '1px solid #555',
                                backgroundColor: '#121212',
                                color: 'white',
                                fontSize: '1rem'
                            }}
                        />
                    </div>

                    <div style={{ margin: '16px 0 32px' }}>
                        <a href="#" style={{ fontSize: '0.9rem', color: 'white', textDecoration: 'underline' }}>Forgot your password?</a>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <div style={{ flex: 1, display: 'flex', gap: '8px', alignItems: 'center' }}>
                            <input type="checkbox" id="remember" style={{ width: '16px', height: '16px', accentColor: '#1DB954' }} />
                            <label htmlFor="remember" style={{ fontSize: '0.9rem', color: '#b3b3b3' }}>Remember me</label>
                        </div>
                        <button
                            className="btn-login"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? 'LOGGING IN...' : 'LOG IN'}
                        </button>
                    </div>
                </form>

                <div style={{ marginTop: '40px', textAlign: 'center', borderTop: '1px solid #333', paddingTop: '32px' }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '24px' }}>Don't have an account?</h3>
                    <button style={{
                        backgroundColor: 'transparent',
                        color: '#b3b3b3',
                        border: '1px solid #b3b3b3',
                        padding: '14px 48px',
                        borderRadius: '500px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        width: '100%',
                        cursor: 'pointer'
                    }}>
                        Sign up for Spotify
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
