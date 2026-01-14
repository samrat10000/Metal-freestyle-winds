
import React, { useState, useEffect } from 'react';
import styles from './TripMode.module.css';

import trip1 from '../../assets/trip/trip1.jpg';
import trip2 from '../../assets/trip/trip2.jpg';
import trip3 from '../../assets/trip/trip3.jpeg';
import trip4 from '../../assets/trip/trip4.jpeg';
import trip5 from '../../assets/trip/trip5.jpeg';
import trip6 from '../../assets/trip/trip6.jpeg';
import trip7 from '../../assets/trip/trip7.jpeg';
import trip8 from '../../assets/trip/trip8.jpeg';
import trip9 from '../../assets/trip/trip9.jpeg';
import trip10 from '../../assets/trip/trip10.jpeg';
import trip11 from '../../assets/trip/trip11.jpeg';
import trip12 from '../../assets/trip/trip12.jpeg';
import trip13 from '../../assets/trip/trip13.jpeg';
import trip14 from '../../assets/trip/trip14.jpeg';

const background = [trip1, trip2, trip3, trip4, trip5, trip6, trip7, trip8, trip9, trip10, trip11, trip12, trip13, trip14];

const TripMode = ({ onExit, children }) => {

    const [currentBg, setCurrentBg] = useState(0);
    const [tranceOn, setTranceOn] = useState(true);


    useEffect(() => {
        if (!tranceOn) return;

        const interval = setInterval(() => {
            setCurrentBg((prev => (prev + 1) % background.length));
        }, 169);

        return () => clearInterval(interval);

    }, [tranceOn]);

    return (
        <div className={styles.tripContainer}
            style={{ backgroundImage: `url(${background[currentBg]})` }}

        >

            {/* Top Controls */}

            <div className={styles.controls}>
                <span className={styles.modeLabel}>†✝TRIP MODE✝†</span>
                <button onClick={() => setTranceOn(!tranceOn)}>
                    {tranceOn ? '⏸ STOP TRANCE' : '▶ START TRANCE'}
                </button>
                <button onClick={onExit}>✕ EXIT TRIP</button>
            </div>

            {/* Music Player goes here */}
            <div className={styles.playerWrapper}>
                {children}
            </div>
        </div>
    )
};

export default TripMode;
