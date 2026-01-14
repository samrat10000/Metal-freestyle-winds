import React from 'react';
import styles from './DesktopIcon.module.css';

const DesktopIcon = ({ label, icon, onClick }) => {
    return (
        <button className={styles.iconContainer} onClick={onClick}>
            <div className={styles.iconWrapper}>
                {icon ? (
                    <img src={icon} alt={label} className={styles.iconImage} />
                ) : (
                    /* Placeholder for missing icons - a simple colored box */
                    <div className={styles.placeholderIcon} />
                )}
            </div>
            <span className={styles.label}>{label}</span>
        </button>
    );
};

export default DesktopIcon;
