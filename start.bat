@echo off
echo Starting Spotify Clone...

start "Spotify Backend" cmd /k "cd backend && npm start"
start "Spotify Frontend" cmd /k "cd frontend && npm run dev"

echo Servers started!
echo Frontend: http://localhost:5173
echo Backend: http://localhost:5000
