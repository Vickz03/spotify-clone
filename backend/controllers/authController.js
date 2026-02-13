// Dummy database for authentication
const users = [
    { id: 1, username: 'user', password: 'password', name: 'Thalaiva' },
    { id: 2, username: 'admin', password: 'admin', name: 'Admin One' }
];

// @desc    Auth user & get token (mock)
// @route   POST /api/login
// @access  Public
const loginUser = (req, res) => {
    const { username, password } = req.body;

    // user search
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.json({
            success: true,
            user: {
                id: user.id,
                name: user.name,
                username: user.username,
                token: 'mock-jwt-token-123456' // Mock token for frontend
            }
        });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
};

module.exports = {
    loginUser
};
