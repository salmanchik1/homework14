import styles from "./Footer.module.css";

const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>&copy; {currentYear} Ramis Salmanov. All rights reserved.</p>
        </footer>
    );
};

export default Footer;