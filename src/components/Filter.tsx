import { useState } from "react"

interface FilterProps {
    onSelect: (term: string) => void
}

export default function Filter({ onSelect }: FilterProps) {
    const [selected, setSelected] = useState<boolean>(true);

    // use 'Set' store unique values of Regions
    // const regions: string[] = [...new Set(homePage.map((item) => item.region!))];

    const filterChangeHandler = (region: string) => {
        onSelect(region)
        setSelected((prev) => {
            return !prev
        })
    }

    let content = "Filter by Region"

    if (!selected) {
        content = "All"
    }

    return (
        <main className="filter-area">
            <div   >
                <select name="" id="select-filter" className="select-filter"
                    onChange={e => { filterChangeHandler(e.target.value) }}>
                    <option value="All">{content}</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </main>
    )
}