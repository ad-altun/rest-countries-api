import { type Countries, AlphaCode3 } from "../types/countries";

// import dataJson from "../../data.json";

async function getCountries(url: string) {
  const res = await fetch(url);

  // const success: boolean = res.ok;

  const data: Countries[] = await res.json();

  return data;
}

async function getAlphaCode(url: string) {
  const res = await fetch(url);

  const alpha3Code: AlphaCode3[] = await res.json();

  return alpha3Code;
}
// getAlphaCode(
//   `https://restcountries.com/v3.1/independent?status=true&fields=name,cca3`
// );

export { getCountries, getAlphaCode };
// see video 480. Mapping the Response
