import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';
function Countries() {
  const [data, setData] = useState([]);
 
// 4RNDg9X3qcTU1pRBgqsxJAms6aMPBuwJj5cSenPM
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
      .then((res) => {
        setData(data)
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])


  return (
    <div className="dark:bg-[#222F36] lg:px-12 px-6 bg-white h-screen pt-12">
      <div className="lg:flex justify-between">
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
              id="default-search"
              className="lg:w-96 w-[280px] md:w-[350px] shadow-xl lg:block grid  p-4 pl-10 text-sm focus:bg-slate-50 text-gray-900 rounded-lg  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
              placeholder="Search for a country..."
            />
          </div>
        </form>

        <div className="dropdown relative grid items-center justify-start lg:mt-0 mt-10">
          <button
            id="dropdownDefault"
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
        </div>
      </div>





      <div>
    {data.map((items, id) => {
  return (
    <div key={id}>
      <img src={items.flag}/>
    </div>
  );
})}

      </div>
    </div>
  );
}

export default Countries;
