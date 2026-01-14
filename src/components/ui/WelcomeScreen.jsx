import React from 'react';
import styles from './WelcomeScreen.module.css';

const WelcomeScreen = ({ onEnter }) => {
    return (
        <div className={styles.overlay}>
            <div className={styles.content}>
                <h1 className={styles.title}>Freestyle Winds</h1>

                <div className={styles.warning}>
                    ⚠ BEST VIEWED ON A COMPUTER PLEASE
                </div>

                <p className={styles.note}>
                    This site is still <span className={styles.highlight}>under construction</span>.
                    Some buttons work, some are just dreams.
                </p>

                <p className={styles.note}>
                    I keep working on it because I love the craft, but sometimes... 
                    <span className={styles.highlight}>my health bar needs refilling too.</span>
                </p>

                <button className={styles.enterBtn} onClick={onEnter}>
                    [ ENTER ROOM ]
                </button>
            </div>
        </div>
    );
};

export default WelcomeScreen;