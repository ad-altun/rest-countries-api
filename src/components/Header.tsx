// import { Link } from "react-router"
import ThemeToggle from "./ThemeToggle"

export default function Header() {

    return (
        <main className="header">
            <a href="/" className="nunito-font-800">Where in the world?</a>
            <ThemeToggle />
        </main>
    )
}