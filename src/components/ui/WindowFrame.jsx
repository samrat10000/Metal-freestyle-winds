import React from 'react';
import styles from './WindowFrame.module.css';

const WindowFrame = ({ title, children, footer }) => {
    return (
        <div className={styles.window}>
            <div className={styles.titleBar}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {/* "Little icon on all windows" - Pixel dot */}
                    <span>●</span>
                    <span>{title}</span>
                </div>
                <div className={styles.controls}>
                    <div className={styles.controlBtn}>_</div>
                    <div className={styles.controlBtn}>□</div>
                    <div className={styles.controlBtn}>x</div>
                </div>
            </div>
            <div className={styles.content}>
                {children}
            </div>
            {footer && <div className={styles.footer}>{footer}</div>}
        </div>
    );
};

export default WindowFrame;
