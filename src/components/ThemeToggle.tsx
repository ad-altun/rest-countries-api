import { useEffect } from "react";
import { useState } from "react";
import { FaMoon } from "react-icons/fa";

export type ThemeModes = "light" | "dark" | null;

// { theme }: { [key: string]: ThemeModes }

export default function ThemeToggle() {

    const selectedTheme = localStorage.getItem('selectedTheme') as ThemeModes;
    const [theme, setTheme] = useState(selectedTheme);

    // update dark mode
    useEffect(() => {
        const updateTheme = () => setTheme(localStorage.getItem('selectedTheme') as ThemeModes)
        updateTheme();
    }, [selectedTheme, theme]);


    const [mode, setMode] = useState(theme);

    const setDarkMode = () => {
        document.querySelector('body')?.setAttribute('data-theme', 'dark');
        localStorage.setItem('selectedTheme', 'dark');
        // setMode(theme);
    }

    const setLightMode = () => {
        document.querySelector('body')?.setAttribute('data-theme', 'light');
        localStorage.setItem('selectedTheme', 'light');
        // setMode(theme);
    }

    const handleClick = () => {
        if (mode === "dark") {
            setLightMode();
            setMode("light");
        }
        else {
            setDarkMode();
            setMode("dark");
        }

    };

    if (mode === "dark") {
        setDarkMode();

    }
    else {
        setLightMode();
    }

    return (
        <div>
            <div className="darkMode" onClick={handleClick} >
                <FaMoon className=""></FaMoon>
                <button className="nunito-font-600 dark-btn">Dark Mode</button>
            </div>
        </div>
    )
}