 🎵 Spotify Clone - Production-Level Full Stack Application

A modern, feature-rich Spotify clone built with **React** (Frontend) and **Node.js/Express** (Backend), showcasing industry-standard architecture and best practices.

---

## 🌟 Features

### 🎧 Music Player
- **Play/Pause** with smooth transitions
- **Next/Previous** track navigation
- **Seek Bar** - Scrub through songs
- **Volume Control** - Adjustable audio levels
- **Auto-Next** - Automatically plays next song when current ends
- **Progress Tracking** - Real-time playback progress

### 🎨 UI/UX
- **Spotify-Authentic Design** - Pixel-perfect recreation
- **Dark Theme** - Modern, sleek interface
- **Smooth Animations** - Hover effects, transitions
- **Responsive Layout** - Adapts to different screen sizes
- **Glassmorphism Effects** - Frosted glass header on scroll
-  **Functional Dashboard**: Categorized music sections (Tamil, International, Melody, Party).
-  **Real-time Search**: Search songs by title, artist, or album with instant results.
- ❤️ **Liked Songs**: Save your favorites to a dedicated playlist (persisted in localStorage).
-  **Music Library**: Browse your entire collection with category filters and Grid/List view toggle.
- 🎵 **Advanced Player**: Full playback controls (Play/Pause, Next/Prev, Volume, Seek Bar).
- **Responsive Design**: Premium Spotify-like UI with glassmorphism and smooth animations.
-  **Modular Architecture**: Clean folder structure following industry standards.

### 🎵 Music Library
- **Curated Tamil Hits** - Leo, Jailer, Vikram, Master soundtracks
- **International Chart-Toppers** - The Weeknd, Taylor Swift, Harry Styles
- **Melodies & Party Tracks** - Organized by mood and genre
- **High-Quality Album Art** - Real Spotify artwork URLs

###  Authentication
- **Login System** - Secure user authentication
- **Session Persistence** - Remember logged-in users
- **Error Handling** - Clear feedback for login issues

---

## 📂 Project Structure

```text
frontend/src/
├── components/
│   ├── layout/       # Sidebar, Player
│   ├── music/        # SongCard
│   └── pages/        # Dashboard, Search, Library, LikedSongs, Login
├── utils/            # API services
└── App.jsx           # Routing and Global State
```

##  Architecture

### Backend Structure (Production-Level)
```
backend/
├── config/
│   └── config.js           # Environment configuration
├── controllers/
│   ├── authController.js   # Authentication logic
│   └── songController.js   # Song request handlers
├── middleware/
│   └── middleware.js       # Logger & error handling
├── routes/
│   ├── authRoutes.js       # Auth endpoints
│   └── songRoutes.js       # Song endpoints
├── services/
│   └── songService.js      # Business logic layer
├── data/
│   └── songs.js            # Song database
├── server.js               # Application entry point
├── .env                    # Environment variables
└── package.json
```

### Frontend Structure (Clean Architecture)
```
frontend/
├── src/
│   ├── pages/
│   │   ├── Login.jsx       # Login page
│   │   └── Dashboard.jsx   # Main app layout
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Sidebar.jsx # Navigation sidebar
│   │   │   └── Player.jsx  # Music player
│   │   └── music/
│   │       └── MainContent.jsx # Song grid display
│   ├── utils/
│   │   └── api.js          # Centralized API calls
│   ├── App.jsx             # Root component
│   ├── index.css           # Global styles
│   └── main.jsx            # Entry point
└── package.json
```

---

##  Getting Started

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Spotify-Clone
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Configure Environment Variables**
   
   Create a `.env` file in the `backend/` directory:
   ```env
   PORT=5000
   NODE_ENV=development
   ```

### Running the Application

#### Option 1: Using start.bat (Windows)
```bash
start.bat
```

#### Option 2: Manual Start

**Terminal 1 - Backend:**
```bash
cd backend
npm start
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

### Access the Application
- **Frontend**: http://localhost:5173
- **Production Backend API**: https://spotify-clone-6wnc.onrender.com

### Default Login Credentials
- **Username**: `user`
- **Password**: `password`

---

## 📡 API Endpoints (Production)

### Authentication
- `POST https://spotify-clone-6wnc.onrender.com/api/auth/login` - User login

### Songs
- `GET https://spotify-clone-6wnc.onrender.com/api/songs` - Get all songs
- `GET https://spotify-clone-6wnc.onrender.com/api/songs?category=Tamil` - Filter by category
- `GET https://spotify-clone-6wnc.onrender.com/api/songs/search?q=leo` - Search songs

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **React Router** - Navigation
- **Axios** - HTTP client
- **Lucide React** - Icon library
- **Vite** - Build tool

### Backend (Deployed on Render)
- **Node.js** - Runtime
- **Express** - Web framework
- **CORS** - Cross-origin support
- **dotenv** - Environment management
- **express-async-handler** - Async error handling

---

## 🎨 Design Highlights

### Color Palette
- **Spotify Green**: `#1DB954`
- **Background Black**: `#000000`
- **Card Dark**: `#181818`
- **Text Gray**: `#b3b3b3`

### Typography
- **Font Family**: Montserrat, System UI
- **Weights**: 400, 500, 600, 700

### Animations
- **Hover Effects**: Scale transforms, color transitions
- **Card Interactions**: Lift effect with play button reveal
- **Scroll Effects**: Dynamic header opacity

---

## 📂 Key Features Implementation

### 1. Layered Architecture
- **Controllers** handle HTTP requests/responses
- **Services** contain business logic
- **Routes** define API endpoints
- **Middleware** for logging and error handling

### 2. Clean Code Practices
- **Single Responsibility** - Each file has one purpose
- **DRY Principle** - Reusable components and utilities
- **Separation of Concerns** - UI, logic, and data layers separated

### 3. Error Handling
- **Try-Catch** blocks in async operations
- **Global error handler** middleware
- **User-friendly** error messages

### 4. State Management
- **React Hooks** (useState, useEffect)
- **LocalStorage** for session persistence
- **Prop drilling** with clear data flow

---

## 🔧 Configuration

### Backend Config (`backend/config/config.js`)
```javascript
module.exports = {
    PORT: process.env.PORT || 5000,
    NODE_ENV: process.env.NODE_ENV || 'development'
};
```

### API Base URL (`frontend/src/utils/api.js`)
```javascript
const api = axios.create({
    baseURL: 'https://spotify-clone-6wnc.onrender.com/api'
});
```

---

## 🎯 Future Enhancements

### Planned Features
- [ ] **Playlist Creation** - User-generated playlists
- [ ] **Recently Played** - Track listening history
- [ ] **Like/Favorite** - Save favorite songs
- [ ] **Shuffle & Repeat** - Playback modes
- [ ] **Dark/Light Theme Toggle** - Theme customization
- [ ] **MongoDB Integration** - Persistent database
- [ ] **JWT Authentication** - Secure token-based auth
- [ ] **Search Functionality** - Real-time song search
- [ ] **Mobile Responsive** - Optimized for all devices

---

## 📝 Code Quality

### Best Practices Followed
✅ **Modular Architecture** - Separated concerns  
✅ **Clean Folder Structure** - Easy navigation  
✅ **Consistent Naming** - Readable code  
✅ **Comments** - Documented complex logic  
✅ **Error Handling** - Graceful failures  
✅ **Environment Variables** - Secure configuration  
✅ **Reusable Components** - DRY principle  

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Your Name**  
- Portfolio: [your-portfolio.com]
- LinkedIn: [your-linkedin]
- GitHub: [@yourusername]

---

## 🙏 Acknowledgments

- **Spotify** for design inspiration
- **Anirudh Ravichander** for amazing Tamil music
- **Open Source Community** for tools and libraries

---

## 📊 Project Stats

- **Lines of Code**: ~2000+
- **Components**: 6
- **API Endpoints**: 3
- **Songs in Library**: 25+
- **Categories**: Tamil, International, Melody, Party

---

**⭐ If you found this project helpful, please give it a star!**
