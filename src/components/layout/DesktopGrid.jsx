import React from 'react';
import styles from './DesktopGrid.module.css';
import logo from '../../assets/freestyle_winds_logo.png';
import DesktopIcon from '../ui/DesktopIcon';
import bookIcon from '../../assets/book_icon.png';
import discordIcon from '../../assets/discord_icon.png';
import eyeIcon from '../../assets/eye_icon.png';
import youtubeIcon from '../../assets/youtube _icon.png';
import guitarMetalImg from '../../assets/guitar_metal.png';

const DesktopGrid = ({ children }) => {
    return (
        <div className={styles.desktopContainer}>
            <header className={styles.header}>
                <img
                    src={logo}
                    alt="Freestyle Winds"
                    className={styles.headerLogo}
                />
                <nav className={styles.navBar}>
                    {/* Retro Desktop Icons */}
                    <DesktopIcon
                        label="Notes"
                        icon={bookIcon}
                        onClick={() => alert('Opening Notes...')}
                    />
                    <DesktopIcon
                        label="Discord"
                        icon={discordIcon}
                        onClick={() => alert('Discord Link')}
                    />
                    <DesktopIcon
                        label="YouTube"
                        icon={youtubeIcon}
                        onClick={() => alert('YouTube Link')}
                    />
                    <DesktopIcon
                        label="Observe"
                        icon={eyeIcon}
                        onClick={() => alert('???')}
                    />
                </nav>
                <img src={guitarMetalImg} alt="guitar metal" className={styles.guitarDecorLeft} />
                <img src={guitarMetalImg} alt="guitar metal" className={styles.guitarDecorRight} />

            </header>

            {children}
        </div>
    );
};

export default DesktopGrid;
