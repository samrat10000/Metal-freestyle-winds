import React, { useState } from 'react';
import WindowFrame from '../../components/ui/WindowFrame';
import styles from './Notebook.module.css';

const Notebook = () => {

    const [notes, setNotes] = useState([
        "Jan 8 — Day 1 :) Started building this digital room. First thing I did was create the logo. Took time, but it felt right.",

        "Jan 9 — Day 2 :| Built the window frames today. Reusable little windows — bio, links, music player, etc. Felt like building the skeleton.",

        "Jan 10 — Day 3 :D Built the music player today. This one was fun. Music really changes the mood of the whole site.",

        "Jan 11 — Day 4 ^^ UI tweaks day. Gave things my own touch. Spent time adjusting layouts, spacing, vibes.",

        "Jan 12 — Also today <3 Created my anime-style character — kinda how I imagine myself. I actually really like him, so I added him as my avatar.",

        "Jan 13 — Today :P Started working on trip mode. Still experimenting, but yeah… this is where things start getting trippy.",

        "Jan 16 — Today ⛧ Built the contact page. Wanted a quiet place where people could leave something behind — words, thoughts, feelings. Made it gothic, soft, a little broken… but honest."
    ]);


    return (
        <WindowFrame title="Notebook" footer="13/03/2023">
            <div className={styles.notebookContainer}>
                <ul className={styles.notesList}>
                    {notes.map((note, index) => (
                        <li key={index} className={styles.noteItem}>{note}</li>
                    ))}
                </ul>
            </div>
        </WindowFrame>
    );
};

export default Notebook;
