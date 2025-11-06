import { useEffect } from "react";
import { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";

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
            <div className="darkMode"  >
                <button onClick={handleClick}
                    className="dark-btn">
                    {
                        mode === "dark" ?
                            <FaMoon size={'1rem'} /> :
                            <MdLightMode size={'1rem'} />
                    }
                </button>
            </div>
        </div>
    )
}