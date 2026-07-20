@echo off
where php >nul 2>nul
if errorlevel 1 (
  echo PHP was not found. Install PHP 8 or newer and add it to PATH.
  pause
  exit /b 1
)
start "" http://127.0.0.1:8000
php -S 127.0.0.1:8000
