import { useContext } from "react";
import { ThemeContext } from "../../App";
import lightIcon from "@assets/icons/theme/light.svg";
import darkIcon from "@assets/icons/theme/dark.svg";
import styles from "./SwitchTheme.module.css";

const SwitchTheme = () => {
    const currentTheme = useContext(ThemeContext);
    console.log("currentTheme", currentTheme);

    const handleClick = () => {
        currentTheme?.setTheme(
            currentTheme.theme === "light" ? "dark" : "light"
        );
    };
    const icon = currentTheme?.theme === "light" ? lightIcon : darkIcon;
    return <div className={styles.switch} onClick={handleClick}>
        <img src={icon} alt="Switch theme" />
    </div>;
};

export default SwitchTheme;
