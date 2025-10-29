import { FaSearch } from "react-icons/fa";

interface SearchProps {
    onChangeProb: (term: string) => void
    searchTerm: string
}

export default function Search({ onChangeProb, searchTerm }: SearchProps) {

    const handleChange = (term: string) => {
        onChangeProb(term);
    }

    return (
        <main className="search-area">
            <FaSearch className="search-icon" />
            <input
                type="search"
                placeholder="Search for a country..."
                id="search"
                value={searchTerm}
                onChange={e => handleChange(e.target.value)}
            />
        </main>
    )
}