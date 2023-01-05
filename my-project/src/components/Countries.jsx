import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
import Search from "./Search";
function Countries() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 4RNDg9X3qcTU1pRBgqsxJAms6aMPBuwJj5cSenPM
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => {
        setLoading(false);
        console.log(res.data);
        setCountries(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError("Error occured!");
        console.log(err);
      });
  }, []);

    // const filterByRegion = async region => {
    //     if(region === '') return
    //     const res = await fetch(`https://restcountries.eu/rest/v3.1/region/${region}`)
    //     const data = await res.json()
    //     await setCountries(data)
    // }

      const filterByRegion = (country) => {
        if(region === '') return(
          axios.get(`https://restcountries.eu/rest/v3.1/region/${region}`)
          .then((res) => {
            setCountries(data)
            console.log(res.data);
          }).catch((err) => {
            console.log(err);
          })
        )
      }
 
  return (
    <div className="dark:bg-[#222F36] lg:px-12 px-6 bg-white pt-12">
      <div className="lg:flex justify-between">
      <Search/>

        {/* <div className="dropdown relative grid items-center justify-start lg:mt-0 mt-10">
          <button
            id="dropdownDefault"
            onChange={ val => filterByRegion(val.target.value)}
            className="
            dropdown-toggle
            h-[54px]
            text-black
            dark:text-white bg-white shadow-xl hover:bg-slate-50 focus:ring-4 focus:outline-none focus:ring-slate-50 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-[#374051] dark:hover:bg-[#3b4455] dark:focus:ring-[#374051]"
            type="button"
            data-bs-toggle="dropdown"
          >
            Filter by Region{" "}
            <svg
              className="ml-2 w-4 h-4"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <div
            id="dropdown"
            className="dropdown-menu  hidden z-10 w-38 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
          >
            <ul
              className=" py-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefault"
            >
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Asia
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  America
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Africa
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Oceania
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Europe
                </a>
              </li>
            </ul>
          </div>
        </div> */}

                        <select className="ml-auto my-2 p-2 shadow-md rounded-md font-medium dark:bg-gray-700" onChange={ val => filterByRegion(val.target.value)}>
                    <option value="">Filter by Region</option>
                    <option value="africa">Africa</option>
                    <option value="america">America</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>
      </div>

       <div className="grid lg:grid-cols-3 md:grid-cols-2">
        {isLoading && !error && <p className="h-screen grid place-items-center text-xl font-bold justify-center items-center">Loading...</p>}
        {error && isLoading && <h4>{error}</h4>}
      
       
        {countries?.map((country, id) => (
          <Link to={{pathname: '/details', state: country}} key={id}>
            <div className="mt-[40px] place-items-center items-center justify-center grid">
            <div className="rounded-lg shadow-lg max-w-sm w-[272px] h-[370px] bg-[#2C3642]">
              <div>
                 <img src={country.flags.png} alt="flag" className="rounded-t-lg w-[300px] h-[200px]"/> 
              </div>
              <div className="p-6 text-white">
                <h3>{country.name.common}</h3> 
                <h6>Population: {country.population}</h6>
                <h6>Region: {country.region}</h6>
                <h6>Capital: {country.capital}</h6>
              </div>
            </div>
            </div>
          </Link>
        ))}
       </div>
    </div>
  );
}

export default Countries;
