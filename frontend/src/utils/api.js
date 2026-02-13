import axios from 'axios';

// Base API setup
const api = axios.create({
    baseURL: 'https://spotify-clone-6wnc.onrender.com/api'
});

// Song API Calls
export const getSongs = async (category) => {
    try {
        const response = await api.get('/songs', { params: { category } });
        return response.data;
    } catch (error) {
        console.error("API Error fetching songs:", error);
        throw error;
    }
};

export const searchSongs = async (query) => {
    try {
        const response = await api.get('/songs/search', { params: { q: query } });
        return response.data;
    } catch (error) {
        console.error("API Error searching songs:", error);
        throw error;
    }
};

// Auth API Calls
export const loginUser = async (credentials) => {
    try {
        const response = await api.post('/auth/login', credentials);
        return response.data;
    } catch (error) {
        console.error("API Error login:", error);
        throw error; // Let frontend handle specific errors
    }
};

export default api;
