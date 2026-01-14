import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import DesktopGrid from './components/layout/DesktopGrid';
import WindowFrame from './components/ui/WindowFrame';
import Notebook from './features/notebook/Notebook';
import MusicPlayer from './features/music/MusicPlayer';
import styles from './App.module.css';
import pfpImage from './assets/thenixsam/thenixsam_main.png';
import Sitemap from './features/sitemap/Sitemap';

function App() {
    return (
        <Routes>
            <Route path="/" element={
                <DesktopGrid>
                    {/* Left Column */}
                    <div className={styles.column}>
                        <WindowFrame title="Bio">
                            <div className={styles.bioContent}>
                                {<img src={pfpImage} alt="..." className={styles.pfp} />}
                                <p><strong>Samrat</strong> | he/him | ☯︎</p>
                                <p>MERN Stack Dev | India 🇮🇳</p>
                                <p>Digital Archaeologist | Heart and Soul of a 90s Kid</p>
                                <hr style={{ border: '1px dotted #8e7cc3', margin: '10px 0' }} />
                                <p><i>"Born to fight zombies, currently fighting the corporate machine.I Stay awake at night building this to feel alive."</i></p>
                                <p>Future Apocalypse Survivor. </p>
                            </div>
                        </WindowFrame>

                        <WindowFrame title="Webcam">
                            <div className={styles.webcamContent}>
                                NO SIGNAL
                            </div>
                        </WindowFrame>

                        <WindowFrame title="Chat">
                            <p>Welcome to the chat!</p>
                        </WindowFrame>
                    </div>

                    {/* Center Column */}
                    <div className={styles.column}>
                        <WindowFrame title="Links">
                            <div className={styles.linksContainer}>
                                <NavLink to="/sitemap" className={styles.linkButton}>sitemap</NavLink>
                                <button className={styles.linkButton}>projects</button>
                                <button className={styles.linkButton}>shrines</button>
                                <button className={styles.linkButton}>personal</button>
                                <button className={styles.linkButton}>now</button>
                                <button className={styles.linkButton}>notebook</button>
                                <button className={styles.linkButton}>moodboard</button>
                                <button className={styles.linkButton}>letters</button>
                                <button className={styles.linkButton}>fragments</button>
                                <button className={styles.linkButton}>dreams</button>
                                <button className={styles.linkButton}>uses</button>
                                <button className={styles.linkButton}>lab</button>
                                <button className={styles.linkButton}>guestbook</button>
                                <button className={styles.linkButton}>questions</button>
                            </div>
                        </WindowFrame>

                        <MusicPlayer />

                        <WindowFrame title="Home">
                            <p>Hello, welcome to my digital room.</p>
                            <p>I'm building this to feel alive.</p>
                        </WindowFrame>
                    </div>

                    {/* Right Column */}
                    <div className={styles.column}>
                        <WindowFrame title="Other Sites">
                            <p>Links to friends...</p>
                        </WindowFrame>

                        <Notebook />

                        <WindowFrame title="Webring">
                            <p>← TRANSING THE INTERNET →</p>
                        </WindowFrame>
                    </div>
                </DesktopGrid>
            } />


            <Route path="/sitemap" element={<Sitemap />} />
        </Routes>
    );
}

export default App;
