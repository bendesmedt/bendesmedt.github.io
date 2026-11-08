#!/usr/bin/env bash
# Regenerates benjamin-desmedt-cv.pdf from cv.html using headless Google Chrome.
# Usage: ./scripts/build-cv-pdf.sh   (override the browser with CHROME=/path/to/chrome)
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/benjamin-desmedt-cv.pdf"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
PORT="${PORT:-8765}"

if [ ! -x "$CHROME" ]; then
  echo "Chrome not found at: $CHROME (set CHROME=/path/to/chrome)" >&2
  exit 1
fi

cd "$ROOT"
python3 -m http.server "$PORT" --bind 127.0.0.1 >/dev/null 2>&1 &
SERVER_PID=$!
trap 'kill "$SERVER_PID" 2>/dev/null || true' EXIT

for _ in $(seq 1 50); do
  curl -sf "http://127.0.0.1:$PORT/cv.html" >/dev/null && break
  sleep 0.1
done

"$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
  --virtual-time-budget=5000 \
  --print-to-pdf="$OUT" "http://127.0.0.1:$PORT/cv.html" 2>/dev/null

echo "Wrote $OUT"
