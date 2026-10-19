@echo off
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js 18 or newer is required to run this local experience.
  echo Download it from https://nodejs.org/
  pause
  exit /b 1
)
start "VITRINE Server" /min cmd /c "node server.cjs"
timeout /t 2 /nobreak >nul
start "" "http://127.0.0.1:4173/"
exit /b 0
