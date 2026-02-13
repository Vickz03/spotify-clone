const songLibrary = require('../data/songs');

// Helper to add fallback for missing images
const addImageFallback = (song) => {
    return {
        ...song,
        cover: song.cover || 'https://spotify-clone-6wnc.onrender.com/covers/placeholders.jpg'
    };
};

// Service layer to handle business logic
const getAllSongs = async (category) => {
    let filtered = songLibrary;
    if (category) {
        filtered = songLibrary.filter(
            song => song.category.toLowerCase() === category.toLowerCase()
        );
    }
    // Add fallback for missing images
    return filtered.map(addImageFallback);
};

const searchSongs = async (query) => {
    if (!query) return [];
    const results = songLibrary.filter(song =>
        song.title.toLowerCase().includes(query.toLowerCase()) ||
        song.artist.toLowerCase().includes(query.toLowerCase()) ||
        song.album.toLowerCase().includes(query.toLowerCase())
    );
    return results.map(addImageFallback);
};

module.exports = {
    getAllSongs,
    searchSongs
};
