import { useEffect, useState } from "react";
import "./App.css";
import { Moon } from "iconsax-react";
import { Sun1 } from "iconsax-react";
import Countries from "./components/Countries";

function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <>
      <div className="flex justify-between h-[62px] dark:bg-[#2B3642] bg-white drop-shadow-md text-white lg:px-12 px-6 place-items-center items-center ">
        <h1 className="font-extrabold text-black dark:text-white">
          Where in the world?
        </h1>
        <button type="B" onClick={handleThemeSwitch} className="">
          {theme === "dark" ? (
            <div>
              <Moon size="20" color="#d9e3f0" />
            </div>
          ) : (
            <div>
              <Sun1 size="20" color="#F49D1A" />
            </div>
          )}
        </button>
      </div>

      <Countries />
    </>
  );
}

export default App;
