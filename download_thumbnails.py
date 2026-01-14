import json
import os
import urllib.request
import re

def download_thumbnails():
    # Load playlist
    with open('src/assets/playlist.json', 'r', encoding='utf-8') as f:
        playlist = json.load(f)

    # Ensure thumbnail directory exists
    output_dir = 'src/assets/thumbnails'
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    print(f"Downloading thumbnails for {len(playlist)} songs...")

    for song in playlist:
        url = song.get('url')
        title = song.get('title')
        
        if not url:
            print(f"Skipping {title}: No URL found")
            continue

        # Extract video ID from YouTube URL
        video_id_match = re.search(r'(?:v=|/)([A-Za-z0-9_-]{11})', url)
        if not video_id_match:
            print(f"Skipping {title}: Invalid YouTube URL")
            continue
        
        video_id = video_id_match.group(1)
        
        # YouTube thumbnail URL (maxresdefault for highest quality)
        thumbnail_url = f"https://img.youtube.com/vi/{video_id}/maxresdefault.jpg"
        
        # Fallback to hqdefault if maxres doesn't exist
        fallback_url = f"https://img.youtube.com/vi/{video_id}/hqdefault.jpg"
        
        # Safe filename
        safe_title = re.sub(r'[<>:"/\\|?*]', '', title)
        output_path = os.path.join(output_dir, f"{safe_title}.jpg")
        
        print(f"Downloading thumbnail for: {title}...")
        try:
            # Try high-res first
            urllib.request.urlretrieve(thumbnail_url, output_path)
            
            # Check if it's a valid image (sometimes maxres doesn't exist)
            file_size = os.path.getsize(output_path)
            if file_size < 5000:  # Image too small, use fallback
                urllib.request.urlretrieve(fallback_url, output_path)
            
            # Update JSON
            song['albumArt'] = f"/src/assets/thumbnails/{safe_title}.jpg"
            print(f"✓ Downloaded: {title}")
            
        except Exception as e:
            print(f"✗ Failed: {title} - {e}")

    # Save updated playlist
    with open('src/assets/playlist.json', 'w', encoding='utf-8') as f:
        json.dump(playlist, f, indent=2, ensure_ascii=False)
    
    print("\n✓ All thumbnails downloaded and playlist.json updated!")

if __name__ == "__main__":
    download_thumbnails()
