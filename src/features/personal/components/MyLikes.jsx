import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MyLikes.module.css';

const MyLikes = () => {
    const categories = [
        {
            title: "✝STUFF I DO TO FEEL ALIVE",
            items: ["Calisthenics", "Gym", "Bikes", "Football"]
        },
        {
            title: "✝LATE NIGHT VIBES",
            items: ["Nights", "Darkness", "Stargazing", "Winters", "Cold weather"]
        },
        {
            title: "✝CREATIVE RANDOMNESS",
            items: ["Sketching", "Gothic art", "Diary", "Websites"]
        },
        {
            title: "✝RANDOM THINGS I’M ATTACHED TO",
            items: ["Bracelets", "Lockets", "Flip phone", "Camcorder"]
        },
        {
            title: "✝NOISE I LIVE WITH",
            items: ["Music", "Electric guitar", "Coffee"]
        },
        {
            title: "✝SOFT CORNER",
            items: ["Cats", "Dogs"]
        }
    ];


    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>My Likes</h1>
                <div className={styles.grid}>
                    {categories.map((cat, index) => (
                        <div key={index} className={styles.categoryCard}>
                            <h2 className={styles.catTitle}>{cat.title}</h2>
                            <div className={styles.line}></div>
                            <ul className={styles.list}>
                                {cat.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <NavLink to="/personal" className={styles.backBtn}>return;




                </NavLink>
            </div>
        </div>
    );
};
export default MyLikes;