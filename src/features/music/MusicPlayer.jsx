import React, { useState, useRef, useEffect } from 'react';
import WindowFrame from '../../components/ui/WindowFrame';
import styles from './MusicPlayer.module.css';
import playlistData from '../../assets/playlist.json'; // Importing the playlist
import TripMode from '../trip/TripMode';

// SVG Icons (Basic shapes to match pixel vibe)
const PlayIcon = () => (
    <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
);
const PauseIcon = () => (
    <svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
);
const PrevIcon = () => (
    <svg viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" /></svg>
);
const NextIcon = () => (
    <svg viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" /></svg>
);
const VolumeIcon = () => (
    <svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" /></svg>
);

const MusicPlayer = () => {
    const audioRef = useRef(null);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(0.5);
    const [tripMode, setTripMode] = useState(false);

    // Get current track details
    const currentTrack = playlistData[currentTrackIndex];

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const updateTime = () => setCurrentTime(audio.currentTime);
        const updateDuration = () => setDuration(audio.duration);
        const handleEnded = () => handleNext(); // Auto-play next song

        audio.addEventListener('timeupdate', updateTime);
        audio.addEventListener('loadedmetadata', updateDuration);
        audio.addEventListener('ended', handleEnded);
        audio.volume = volume;

        return () => {
            audio.removeEventListener('timeupdate', updateTime);
            audio.removeEventListener('loadedmetadata', updateDuration);
            audio.removeEventListener('ended', handleEnded);
        };
    }, [volume, currentTrackIndex]);

    // When track changes, if it was playing, keep playing
    useEffect(() => {
        if (isPlaying && audioRef.current) {
            audioRef.current.play().catch(e => console.log("Playback error:", e));
        }
    }, [currentTrackIndex]);

    const togglePlay = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleNext = () => {
        setCurrentTrackIndex((prev) => (prev + 1) % playlistData.length);
    };

    const handlePrev = () => {
        setCurrentTrackIndex((prev) => (prev - 1 + playlistData.length) % playlistData.length);
    };

    const handleVolumeChange = (e) => {
        const newVol = parseFloat(e.target.value);
        setVolume(newVol);
        if (audioRef.current) audioRef.current.volume = newVol;
    };

    const handleProgressClick = (e) => {
        if (!audioRef.current) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const width = rect.width;
        const percent = x / width;
        const newTime = percent * duration;
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
    };

    const formatTime = (time) => {
        if (!time || isNaN(time)) return "00:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const progressPercent = duration ? (currentTime / duration) * 100 : 0;

    // TRIP MODE - show different UI
    if (tripMode) {
        return (
            <TripMode onExit={() => { setTripMode(false) }}>

                <audio ref={audioRef} src={currentTrack.src} />
                <div style={{ textAlign: 'center', color: 'white' }}>
                    <img src={currentTrack.albumArt} alt="Album Art" style={{ width: '150px', borderRadius: '10px' }} />
                    <p>{currentTrack.title}</p>
                    <div>
                        <button onClick={handlePrev}>⏮</button>
                        <button onClick={togglePlay}>{isPlaying ? '⏸' : '▶'}</button>
                        <button onClick={handleNext}>⏭</button>
                    </div>
                </div>


            </TripMode>
        );

    }






    return (
        <WindowFrame title="music player">
            <div className={styles.content}>
                <div className={styles.trackInfo}>
                    <img
                        src={currentTrack.albumArt}
                        alt="Album Art"
                        className={styles.albumArt}
                    />
                    <div className={styles.details}>
                        <div>
                            <div className={styles.songName}>{currentTrack.title}</div>
                            <div className={styles.artistName}>Uploaded by {currentTrack.artist}</div>
                        </div>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className={styles.progressContainer} onClick={handleProgressClick}>
                    <div className={styles.progressBar} style={{ width: `${progressPercent}%` }}>
                        <div className={styles.progressHandle} />
                    </div>
                </div>

                {/* Controls */}
                <div className={styles.controlsRow}>
                    <div className={styles.mainControls}>
                        <button className={styles.controlBtn} onClick={handlePrev}><PrevIcon /></button>
                        <button className={styles.controlBtn} onClick={togglePlay}>
                            {isPlaying ? <PauseIcon /> : <PlayIcon />}
                        </button>
                        <button className={styles.controlBtn} onClick={handleNext}><NextIcon /></button>
                        <button className={`${styles.controlBtn} ${styles.tripBtn}`} onClick={() => setTripMode(true)}>†✝TRIP MODE✝†</button>
                    </div>

                    <div className={styles.timeDisplay}>
                        {formatTime(currentTime)} / {formatTime(duration)}
                    </div>

                    <div className={styles.volumeContainer}>
                        <div className={styles.controlBtn} style={{ width: 16, height: 16 }}><VolumeIcon /></div>
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.05"
                            value={volume}
                            onChange={handleVolumeChange}
                            className={styles.volumeSlider}
                        />
                    </div>
                </div>
            </div>

            <audio ref={audioRef} src={currentTrack.src} />
        </WindowFrame>
    );
};

export default MusicPlayer;
