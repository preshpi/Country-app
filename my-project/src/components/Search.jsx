import React, { useState } from "react";

function Search({onSearch}) {
      const [search, setSearch] = useState("");

      const handleSubmit = (e) => {
        e.preventDefault()
        onSearch(search)
      }

  return (
      <form className=" items-center justify-start " onSubmit={handleSubmit}>
          <label
            htmlFor="default-search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
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
  )
}

export default Search;
