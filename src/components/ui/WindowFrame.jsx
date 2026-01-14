import React, { useState } from 'react';
import styles from './WindowFrame.module.css';
import Toast from './Toast';



const WindowFrame = ({ title, children, footer }) => {


    const [showToast, setShowToast] = useState(false);


    const handleButtonClick = () => {
        setShowToast(true);

        setTimeout(() => {
            setShowToast(false);
        }, 4000);

    };

    return (
        <>
            <div className={styles.window}>
                <div className={styles.titleBar}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        {/* "Little icon on all windows" - Pixel dot */}
                        <span>●</span>
                        <span>{title}</span>
                    </div>
                    <div className={styles.controls}>
                        <div className={styles.controlBtn} onClick={handleButtonClick}>_</div>
                        <div className={styles.controlBtn} onClick={handleButtonClick}>□</div>
                        <div className={styles.controlBtn} onClick={handleButtonClick}>x</div>
                    </div>
                </div>
                <div className={styles.content}>
                    {children}
                </div>
                {footer && <div className={styles.footer}>{footer}</div>}
            </div>

            {showToast && (
                <Toast
                    message="these buttons are just for show, they don't work actually, yeah... I just built them because they were looking cool hehe ... <3"
                    onClose={() => setShowToast(false)}
                />
            )}
        </>
    );
};

export default WindowFrame;
