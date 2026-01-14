import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Sitemap.module.css';

const Sitemap = () => {
    const navigate = useNavigate();

    const siteStructure = {
        Desktop: {
            panels: [
                "Bio Panel",
                "Links Panel",
                "Music Player Panel",
                "Notebook Panel",
                "Webcam Panel",
                "Other Sites Panel"
            ]
        },

        Pages: {
            Sitemap: [],
            Projects: [],
            Shrines: [],
            Personal: [
                "now",
                "notebook",
                "moodboard",
                "letters",
                "fragments",
                "dreams"
            ],
            Uses: [],
            Lab: [],
            Guestbook: [],
            Questions: []
        }
    };

    return (
        <div className={styles.sitemapPage}>
            <div className={styles.header}>
                <h1>✟ Site Map</h1>
                <button onClick={() => navigate('/')} className={styles.backBtn}>
                    ← Back to Desktop
                </button>
            </div>

            <div className={styles.content}>
                <p className={styles.intro}>All corners of this digital room</p>

                {/* Desktop Section */}
                <div className={styles.section}>
                    <h2 className={styles.categoryTitle}> Desktop</h2>
                    <ul className={styles.mainList}>
                        {siteStructure.Desktop.panels.map((panel) => (
                            <li key={panel} className={styles.mainItem}>
                                <span className={styles.sectionName}>{panel}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Pages Section */}
                <div className={styles.section}>
                    <h2 className={styles.categoryTitle}> Pages</h2>
                    <ul className={styles.mainList}>
                        {Object.entries(siteStructure.Pages).map(([page, subsections]) => (
                            <li key={page} className={styles.mainItem}>
                                <span className={styles.sectionName}>{page}</span>
                                {subsections.length > 0 && (
                                    <ul className={styles.subList}>
                                        {subsections.map((sub) => (
                                            <li key={sub} className={styles.subItem}>{sub}</li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sitemap;
