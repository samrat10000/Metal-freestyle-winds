import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Diary.module.css';

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  DIARY CONTENT DATA
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
import diaryData from '../data/diaryContent.json';

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  DIARY COMPONENT
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const Diary = () => {
    return (
        <div className={styles.container}>
            <div className={styles.paper}>
                <div className={styles.header}>
                    <h1>DIARY.txt</h1>
                    <span className={styles.status}>[READ ONLY]</span>
                </div>

                <div className={styles.content}>
                    {diaryData.entries.map((entry) => (
                        <div key={entry.id} className={styles.entry}>
                            <div className={styles.meta}>
                                <span className={styles.date}>{entry.date}</span>
                                <span className={styles.separator}>::</span>
                            </div>

                            <div className={styles.diaryFlow}>
                                {entry.blocks.map((block, idx) => {
                                    if (block.type === 'text') {
                                        return (
                                            <p key={idx} className={styles.text}>
                                                {block.content}
                                            </p>
                                        );
                                    } else if (block.type === 'image') {
                                        return (
                                            <div
                                                key={idx}
                                                className={`${styles.memoryWrapper} ${block.side === 'left' ? styles.memoryLeft : styles.memoryRight}`}
                                            >
                                                <div className={styles.polaroid}>
                                                    <img src={block.imagePath} alt="memory" />
                                                </div>
                                            </div>
                                        );
                                    }
                                    return null;
                                })}
                            </div>

                            <div className={styles.divider}>* * *</div>
                        </div>
                    ))}
                </div>

                <NavLink to="/personal" className={styles.backBtn}>
                    &lt; close_file
                </NavLink>
            </div>
        </div>
    );
};

export default Diary;