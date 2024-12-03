import SwitchTheme from "../SwitchTheme";
import styles from "./Header.module.css";
import logoImage from "@assets/icons/logo/logo.svg";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={logoImage} alt="Logo" />
                <span>Portfolio</span>
            </div>
            <nav className={styles.nav}>
                <a href="#">Home</a>
                <a href="#hero">About</a>
                <a href="#techStack">Tech Stack</a>
                <a href="#projects">Projects</a>
            </nav>
            <div className={styles.socials}>
                <a href="https://github.com/salmanchik1" target="_blank" rel="noopener noreferrer" >
                    GitHub
                </a>
                <SwitchTheme />
            </div>
        </header>
    );
};

export default Header;
