import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import DesktopGrid from './components/layout/DesktopGrid';
import WindowFrame from './components/ui/WindowFrame';
import Notebook from './features/notebook/Notebook';
import MusicPlayer from './features/music/MusicPlayer';
import WelcomeScreen from './components/ui/WelcomeScreen'; // Import the new screen
import styles from './App.module.css';
import pfpImage from './assets/thenixsam/thenixsam_main.png';
import Sitemap from './features/sitemap/Sitemap';

function App() {
    const [hasEntered, setHasEntered] = useState(false);

    if (!hasEntered) {
        return <WelcomeScreen onEnter={() => setHasEntered(true)} />;
    }

    return (
        <Routes>
            <Route path="/" element={
                <DesktopGrid>
                    {/* Left Column */}
                    <div className={styles.column}>
                        <WindowFrame title="Bio">
                            <div className={styles.bioContent}>
                                {<img src={pfpImage} alt="..." className={styles.pfp} />}

                                <p className={styles.bioName}>
                                    <strong>Samrat</strong> <span>| he/him | ☯︎</span>
                                </p>

                                <div className={styles.bioRoles}>
                                    <p>MERN Stack Dev 🇮🇳</p>
                                    <p>Digital Architect</p>
                                </div>

                                <hr className={styles.bioDivider} />

                                <p className={styles.bioManifesto}>
                                    "The internet got too loud, so I built a quiet room.
                                    Coding to heal. Designing to feel alive."
                                </p>

                                <div className={styles.bioStatus}>
                                    <p>STATUS: <span>REFILLING HP...</span></p>
                                </div>
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
                            <div className={styles.homeContent}>
                                <p className={styles.homeIntro}>
                                    <strong>Hello, traveler.</strong>
                                    <br /><br />
                                    I am Samrat. This digital room is my <i>external hard drive</i>.
                                    <br />
                                    Most coders build for efficiency. I build for <strong>feeling</strong>.
                                    Everything here—the music, the colors, the bugs—is a piece of my mind.
                                </p>

                                <div className={styles.soulSignature}>
                                    <span className={styles.soulTitle}> SOUL SIGNATURE </span>
                                    <hr className={styles.soulDivider} />

                                    <div className={styles.soulRow}>
                                        <span>AURA:</span>
                                        <span className={styles.soulValuePurp}>Lavender Glitch</span>
                                    </div>

                                    <div className={styles.soulRow}>
                                        <span>ARCHETYPE:</span>
                                        <span className={styles.soulValueGrey}>Digital Hermit</span>
                                    </div>

                                    <div className={styles.soulRow}>
                                        <span>OBJECTIVE:</span>
                                        <span className={styles.soulValueGreen}>Transcend 1.0</span>
                                    </div>

                                    <div className={styles.soulRow}>
                                        <span>MEDIUM:</span>
                                        <span className={styles.soulValueLavender}>Code & Shadows</span>
                                    </div>

                                    <div className={styles.soulRow}>
                                        <span>SANCTUARY:</span>
                                        <span className={styles.soulValueSanctuary}>Freestyle Winds</span>
                                    </div>

                                    <div className={styles.soulIcons}>
                                        ⛧ ♰ ⛧
                                    </div>
                                </div>
                            </div>
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
