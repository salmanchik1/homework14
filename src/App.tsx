import { createContext, Dispatch, SetStateAction, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import "./styles/globals.css";

type ThemeContextType = {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

function App() {

    const [theme, setTheme] = useState("light");

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div className={`container ${theme}`}>
                <Header />
                <main className="main">
                    <Hero />
                    <TechStack />
                    <Projects />
                </main>
                <Footer />
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
