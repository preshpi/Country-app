import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

  const filterByRegion = async (region) => {
    if (region === "") return;
    const res = await fetch(`https://restcountries.com/v3.1/region/${region}`);
    const data = await res.json();
    setLoading(false);
    setError(true);
    setCountries(data);

  };

  const searchByName = async (term) => {
    if (term.length < 3 || term === "") {
    const res = await fetch(`https://restcountries.com/v3.1/name/${term}`);
    const data = await res.json();
    setLoading(false);
    setCountries(data);
    } else{
        setError("Error occured!");
    }
  }

  return (
    <div className="dark:bg-[#222F36] lg:px-12 px-6 bg-white pt-12">
      <div className="lg:flex justify-between md:flex">
              {/* Search Filter */}
        <form className=" items-center justify-start ">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              onChange={e => searchByName(e.target.value)}
              id="default-search"
              className="lg:w-96 w-[280px] md:w-[350px] shadow-xl lg:block grid  p-4 pl-10 text-sm focus:bg-slate-50 text-gray-900 rounded-lg  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
              placeholder="Search for a country..."
            />
          </div>
      </form>
            {/* Filter by category */}
        <select
          className="ml-auto my-2 text-x  h-[54px] text-black mt-[40px]
                       dark:text-white bg-white shadow-xl hover:bg-slate-50 focus:ring-2
                       focus:outline-none focus:ring-slate-50 font-bold rounded-lg 
                       text-center inline-flex items-center dark:bg-[#374051] 
                       dark:hover:bg-[#3b4455] dark:focus:ring-[#374051]"
          onChange={(e) => filterByRegion(e.target.value)}
        >
          <option value="">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2">
        {isLoading && !error && (
           <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="circular-loading">
              <div className="circular-loading-inner"  style={{animation: 'circular-loading 1s linear infinite', }}>
              </div>
            </div>
          </div>
          
        )}
        {error && isLoading && 
          <div className="top-0 left-0 w-full h-full flex items-center justify-center">
            <h4 className="text-2xl text-black">Something went wrong!</h4>
          </div>
        }

        {countries?.map((country, id) => (
          <Link to={{ pathname: "/details", state: country }} key={id}>
            <div className="mt-[40px] place-items-center items-center justify-center grid">
              <div className="rounded-lg shadow-lg max-w-sm w-[272px] h-[370px] bg-[#2C3642]">
                <div>
                  <img
                    src={country.flags.png}
                    alt="flag"
                    className="rounded-t-lg w-[300px] h-[200px]"
                  />
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
