import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Personal.module.css";

const Personal = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    MY PERSONAL ARCHIVE
                </h1>
                <div className={styles.grid}>
                    {/* 1.DIARY */}
                    <NavLink to="/personal/diary" className={styles.card}>
                        <span className={styles.icon}>[ .txt ]</span>
                        <h2>DIARY</h2>
                        <p>Thoughts from the void.</p>
                    </NavLink>
                    {/* 2. MANIFEST */}
                    <button className={styles.card}>
                        <span className={styles.icon}>( * )</span>
                        <h2>MANIFEST</h2>
                        <p>Things I desire.</p>
                    </button>
                    {/* 3. THE LAB */}
                    <button className={styles.card}>
                        <span className={styles.icon}>&gt;_</span>
                        <h2>THE LAB</h2>
                        <p>Where I build.</p>
                    </button>
                    {/* 4. CHAOS */}
                    <button className={styles.card}>
                        <span className={styles.icon}>?¿?</span>
                        <h2>CHAOS</h2>
                        <p>Everything else.</p>
                    </button>
                    {/* MyLikes */}
                    <NavLink to="/personal/mylikes" className={styles.card}>
                        <span className={styles.icon}>♥</span>
                        <h2>LIKES</h2>
                        <p>Pieces of me.</p>
                    </NavLink>
                </div>
                <NavLink to="/" className={styles.backBtn}>return;
                    <br />✶ ✶ ✶ ✶

                </NavLink>

            </div>
        </div>
    );
};

export default Personal;