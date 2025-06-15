// import { useState } from "react";
import { FaSearch } from "react-icons/fa";

interface SearchProps {
    onChangeProb: (term: string) => void
}

export default function Search({ onChangeProb }: SearchProps) {
    // const [term, setTerm] = useState("");

    const handleChange = (term: string) => {

        onChangeProb(term);

        // const conditionToSearch: boolean = term.length === 0 || term.length > 2;

        // if (conditionToSearch) onChangeProb(term);
        // console.log(term)
    }

    return (
        <main className="search-area">

            <FaSearch className="search-icon" />
            {/* <i className="fa-solid fa-magnifying-glass"></i> */}
            <input type="search" placeholder="Search for a country..." id="search"
                onChange={e => handleChange(e.target.value)} />

        </main>
    )
}