import json
import os
import subprocess
import sys

# Install yt-dlp if not installed
try:
    import yt_dlp
except ImportError:
    print("Installing yt-dlp...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "yt-dlp"])
    import yt_dlp

def download_music():
    # Load playlist
    with open('src/assets/playlist.json', 'r') as f:
        playlist = json.load(f)

    # Ensure download directory exists
    output_dir = 'public/songs'
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    print(f"Found {len(playlist)} songs to download...")

    ydl_opts = {
        'format': 'bestaudio/best',
        'postprocessors': [{
            'key': 'FFmpegExtractAudio',
            'preferredcodec': 'mp3',
            'preferredquality': '192',
        }],
        'outtmpl': f'{output_dir}/%(title)s.%(ext)s',
        'quiet': False,
        'no_warnings': True,
    }

    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        for song in playlist:
            url = song.get('url')
            title = song.get('title')
            
            if not url:
                print(f"Skipping {title}: No URL found")
                continue

            # Update src in json to match what we are downloading
            # (Though we already set this manually in the JSON file)
            expected_filename = f"{title}.mp3"
            song['src'] = f"/songs/{expected_filename}"

            print(f"\nDownloading: {title}...")
            try:
                ydl.download([url])
                print(f"✓ Success: {title}")
            except Exception as e:
                print(f"✗ Failed: {title} - {e}")

    # Optionally update the JSON with confirmed paths if filenames changed
    # But because we force the filename with outtmpl, we should be good.

if __name__ == "__main__":
    download_music()
