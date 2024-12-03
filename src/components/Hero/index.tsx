import styles from "./Hero.module.css";
import avatarImage from "@assets/images/hero/avatar.jpg";
import hero from "../../data/hero.json";

const Hero = () => {
    return (
        <section className={styles.container} id="hero">
            <div className={styles.hero}>
                <div className={styles.content}></div>
                <p>Hi 👋, my name is</p>
                <h1>{hero.name}</h1>
                <p>I am a {hero.occupation}</p>
            </div>
            <div className={styles.image}>
                <img src={`${hero.avatar}`} alt="Profile" className={styles.avatar} />
            </div>
        </section>
    );
};

export default Hero;
