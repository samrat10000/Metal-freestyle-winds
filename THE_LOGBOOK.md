# 📖 THE LOGBOOK: Freestyle Winds
*A Digital Room for Mental Health and Feeling Alive.*

This document is your master reference. It combines the **Spirit** of the project with the **Technical Blocks** we've built.

---

## 🕊️ THE SPIRIT OF THE ROOM
> "Born to fight zombies, currently fighting the corporate machine. Apocalypse-ready."

This isn't just a website; it's an aesthetic experience. We've chosen colors and elements that feel personal, bold, and nostalgic.
*   **The Persona**: Samrat (he/him | ♋) — A MERN Stack dev and 90s kid building a digital sanctuary.
*   **The Metal Vibe**: A raw, energetic custom logo with red scribble overlays.
*   **The Aesthetic**: Lavender/Indie colors mixed with a dreamy purple anime background.
*   **The Interaction**: Clicking through the world with a large, tilted metal guitar cursor.

---

## 🧭 LATEST UPDATES (V1.2)
*   **Background**: A fixed anime-style background (`public/background.jpeg`) with a dark overlay to make windows pop.
*   **The Music Player**: A functional player that reads from `src/assets/playlist.json`. 
    *   *Downloader*: A Python script (`download_music.py`) that fetches songs from YouTube.
    *   *Thumbnails*: Real artwork fetched for every track.
*   **Custom Cursor**: A custom-resized 64px tilted guitar (`metal_guitar_cursor_final.png`). 
    *   *Global Override*: Custom CSS forces the guitar to be the pointer on **every** button and control across all modules.
*   **UI Sizes**: All interactive targets (Min/Max/Close buttons) have been enlarged for better "clickability" with the large cursor.

---

## 🧱 THE BUILDING BLOCKS (RECAP)

### 1. The Foundation: `DesktopGrid`
*   **What**: The 3-column wall structure + Header.
*   **Key**: Uses `{children}` to place everything you write in `App.jsx` into the columns.

### 2. The Universal Container: `WindowFrame`
*   **What**: The Lavender CSS box with pixel controls (`_` `□` `x`).
*   **Rule**: **Always use this.** If you build something new, wrap it in a `WindowFrame` to keep the room consistent.

### 3. Features (The Furniture)
*   **Music Player**: Manages its own playlist and audio logic.
*   **Notebook**: Your space for daily logs and goals.

---

## 🛠️ HOW TO GROW THE ROOM
If you want to add a new "block" (e.g., a **Guestbook**):
1.  **Create the logic**: Make a file like `src/features/guestbook/Guestbook.jsx`.
2.  **Wrap it**: In that file, `import WindowFrame` and wrap your UI in `<WindowFrame title="Guestbook">`.
3.  **Place it**: Go to `App.jsx` and drop `<Guestbook />` into one of the grid columns.

---

## 📝 QUICK REVISION MODES
1.  **Aesthetics**: Edit `src/index.css` (Handles Background, Cursor, Fonts).
2.  **Arrangement**: Edit `src/App.jsx` (Determines which window goes where).
3.  **Specific Styles**: Each component has its own `.module.css` (e.g., `WindowFrame.module.css`).

---
*Keep building. Keep feeling alive.* 🎸🌌
