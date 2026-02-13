const asyncHandler = require('express-async-handler');
const { getAllSongs, searchSongs: searchSongsService } = require('../services/songService');

// @desc    Get all songs or filter by category
const getAllSongsController = asyncHandler(async (req, res) => {
    const { category } = req.query;
    const songs = await getAllSongs(category);
    // Simulate delay
    setTimeout(() => res.json(songs), 200);
});

// @desc    Search songs
const searchSongsController = asyncHandler(async (req, res) => {
    const { q } = req.query;
    const results = await searchSongsService(q);
    res.json(results);
});

module.exports = {
    getAllSongs: getAllSongsController,
    searchSongs: searchSongsController
};
