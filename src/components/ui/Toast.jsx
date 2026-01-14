import React from 'react';
import styles from './Toast.module.css';

const Toast = ({ message, onClose }) => {
    return (
        <div className={styles.toast}>
            <p>{message}</p>
            <button className={styles.closeBtn} onClick={onClose}></button>
        </div>
    );

};

export default Toast;
