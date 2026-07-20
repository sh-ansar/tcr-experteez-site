#!/usr/bin/env sh
set -eu
if ! command -v php >/dev/null 2>&1; then
  echo "PHP was not found. Install PHP 8 or newer."
  exit 1
fi
URL="http://127.0.0.1:8000"
if command -v xdg-open >/dev/null 2>&1; then xdg-open "$URL" >/dev/null 2>&1 || true; fi
if command -v open >/dev/null 2>&1; then open "$URL" >/dev/null 2>&1 || true; fi
php -S 127.0.0.1:8000
