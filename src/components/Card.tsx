// import {  useState } from "react"
// import { homePage } from '../service/api.ts'
// import { type HomePageProps } from "../types/countries.ts"
import { Link, Outlet } from "react-router"
import { HomePageProps } from "../types/countries.ts"
// import getCountries from '../service/api.ts'


export default function Card({ name, population, region, capital, flags }: HomePageProps) {
    // export default function Card() {
    // const [countries, setCountries] = useState<HomePageProps[]>([])

    // useEffect(() => {
    //     setCountries(homePage);
    // }, [])

    //   const searchChangeHandler = (term: string) => {
    //     const searchInput: string = data.filter((country: HomePageProps) =>
    //       country.name.common.toLowerCase().includes(term.toLowerCase()));

    //     // const conditionToSearch: boolean = searchQuery.length === 0 || searchQuery.length > 2;
    //   }


    //     const homePage: HomePageProps[] = getCountries(`https://restcountries.com/v3.1/name/${name}`)
    // const nnn = homePage.map((ddd) => {
    //     ddd.
    // })

    return (
        <div className="card">
            <Link to={`/details/${name.common}`}>
                {
                    <div className="cardClass">
                        <img src={flags.png}
                            alt={flags.alt}
                            className="card-flag" />
                        <div className="card-text">
                            <h2 className="nunito-font-800">{name.common}</h2>
                            <p>{`Population: ${population.toLocaleString()}`}</p>
                            <p>{`Region: ${region}`}</p>
                            <p>{`Capital: ${capital}`}</p>
                        </div>
                    </div>
                }
            </Link>
            <div>
                <Outlet />
            </div>
        </div>
    )
}
