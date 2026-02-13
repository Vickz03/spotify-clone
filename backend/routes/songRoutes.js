const express = require('express');
const router = express.Router();
const { getAllSongs, searchSongs } = require('../controllers/songController');

router.get('/', getAllSongs);
router.get('/search', searchSongs);

module.exports = router;
