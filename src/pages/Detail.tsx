import { Link, NavLink } from 'react-router'
import { useParams } from 'react-router'
// import { detailsPage } from "../service/api.ts"
import Header from '../components/Header.tsx';
import { BiArrowBack } from "react-icons/bi";
import { useEffect, useState } from 'react';
import { getAlphaCode, getCountries } from '../service/api.ts';
import { AlphaCode3, DetailPageProps } from '../types/countries.ts';
import Loading from '../components/Loading.tsx';
import FetchFailed from './FetchFailed.tsx';

export default function Detail() {
    const [country, setCountry] = useState<DetailPageProps>();
    const [alpha3List, setAlpha3List] = useState<AlphaCode3[]>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [fetchFailed, setFetchFailed] = useState<boolean>(false);
    const fields: string[] = ["name", "languages", "capital", "region",
        "flags", "population", "currencies", "subregion", "borders", "tld"];
    const { name } = useParams();



    useEffect(() => {
        const getResp = async () => {
            try {
                setIsLoading(true);
                const response = await getCountries(`https://restcountries.com/v3.1/name/${name}?status=true&fields=${fields}`);
                const detailsPage = response.map((item) => {
                    return {
                        name: item.name,
                        population: item.population,
                        flags: item.flags,
                        capital: item.capital,
                        region: item.region,
                        currencies: item.currencies,
                        languages: item.languages,
                        borders: item.borders,
                        subregion: item.subregion,
                        topLevelDomain: item.tld,
                    } as DetailPageProps;
                });
                setCountry(detailsPage[0])
                setIsLoading(false);
            } catch (error) {
                console.log(error)
                setFetchFailed(true);
            }
        }

        getResp();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name])

    useEffect(() => {
        const getAlpha3Code = async () => {
            try {
                const response = await getAlphaCode(`https://restcountries.com/v3.1/independent?status=true&fields=name,cca3`);
                const alpha3CodeList = response.map((item) => {
                    return {
                        name: item.name,
                        cca3: item.cca3,
                    } as AlphaCode3;
                });
                setAlpha3List(alpha3CodeList);
            } catch (error) {
                console.log(error)
            }
        }

        getAlpha3Code();
    }, [])

    // if (!country) { return <FetchFailed /> }

    // get the country borders in abbreviation
    const borderCountries = country?.borders; // ['FRA', 'GER', ...]

    // Extract first native name
    const nativeNameObject = country?.name.nativeName;
    const firstNativeEntry = nativeNameObject
        ? Object.values(nativeNameObject)[0]
        : null;

    const currencyObject = country?.currencies;
    const currencyEntries = currencyObject ? Object.values(currencyObject)[0].symbol : null;

    const languagesObject = country?.languages;
    const languagesEntries = languagesObject ? Object.values(languagesObject) : null;

    return (
        <main className='details-main'>
            <div className='shadow'>
                <div className="details-header">
                    <Header />
                </div>
                {
                    // country !== undefined && Object.keys(country).length !== 0 ?
                    !fetchFailed ?
                        isLoading
                            ?
                            <div className="details-loading">
                                <Loading />
                            </div>
                            :
                            <section className='details-section'>
                                <NavLink to={'/'} className="back-button">
                                    <BiArrowBack className='react-icon' />
                                    Back
                                </NavLink>
                                <div className='details-content'>
                                    <div>
                                        <img src={`${country?.flags.png}`} alt={`${country?.name.common} flag`} />
                                    </div>
                                    <div className="detail-area">
                                        <h2 className="country-name">{`${country?.name.common}`}</h2>
                                        <div className="details-mid">
                                            <div>
                                                <p className="details-item">
                                                    Native Name:<span>{` ${firstNativeEntry?.common || 'N/A'}`}</span>
                                                </p>
                                                <p className="details-item">Population:
                                                    <span>{` ${country?.population.toLocaleString() || 'N/A'}`}</span></p>
                                                <p className="details-item">Region:
                                                    <span>{` ${country?.region || 'N/A'}`}</span></p>
                                                <p className="details-item">Sub Region:
                                                    <span>{` ${country?.subregion || 'N/A'}`}</span></p>
                                                <p className="details-item">Capital:
                                                    <span>{` ${country?.capital || 'N/A'}`}</span></p>
                                            </div>
                                            <div className="">
                                                <p className="details-item">Top Level Domain:
                                                    <span>{` ${country?.topLevelDomain}`}</span></p>
                                                <p className="details-item">Currencies:
                                                    <span>{` ${currencyEntries || 'N/A'}`}</span></p>
                                                <p className="details-item">Languages:
                                                    <span>{`${languagesEntries || 'N/A'}`}</span></p>
                                            </div>
                                        </div>
                                        <div className="detail-border">
                                            <p className='details-item'>Border Countries: </p>
                                            <div className='border-countries'>
                                                {borderCountries && borderCountries.length > 0 ?
                                                    borderCountries?.map((c, index) => {
                                                        return (
                                                            <Link to={`/details/${alpha3List?.find(x => x.cca3 === c)?.name.common}`}
                                                                key={index} className='border-links'>
                                                                <p>{c}</p>
                                                            </Link>
                                                        )
                                                    })
                                                    :
                                                    <p>N/A</p>}
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </section> :
                        <FetchFailed />
                }
            </div>
        </main>
    )
}
