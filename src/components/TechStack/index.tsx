import styles from "./TechStack.module.css";
import techStack from "../../data/techStack.json";
import { Technology } from "../../types";

const TechStack = () => {
    return (
        <section className={styles.techStack} id="techStack">
            <h2>My Tech Stack</h2>
            <p>Technologies I've worked with and regularly use</p>
            <div className={styles.grid}>
                {techStack.technologies.map((tech: Technology) => (
                    <div key={tech.id} className={styles.tech}>
                        <img
                            src={`${tech.icon}`}
                            alt={tech.name}
                            className={`icon`}
                        />
                        <span className={tech.name}></span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechStack;
