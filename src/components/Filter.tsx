interface FilterProps {
    onSelect: (term: string) => void
    selectedRegion?: string
}

export default function Filter({ onSelect, selectedRegion = "All" }: FilterProps) {

    // use 'Set' store unique values of Regions
    // const regions: string[] = [...new Set(homePage.map((item) => item.region!))];

    const filterChangeHandler = (region: string) => {
        onSelect(region)
    }

    return (
        <main className="filter-area">
            <div   >
                <select name="" id="select-filter" className="select-filter"
                    value={selectedRegion}
                    onChange={e => { filterChangeHandler(e.target.value) }}>
                    <option value="All">All</option>
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