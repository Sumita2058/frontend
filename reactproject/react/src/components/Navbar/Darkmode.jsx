import { useEffect, useState } from "react";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";

const Darkmode = () => {
  // dark mode start
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  useEffect (() =>{
    const element = document.documentElement;
    if (theme === "light") {
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
  }
}, [theme]);
  return (
    <>
      {theme == "dark" ? (
        <BiSolidSun onClick={() => setTheme("light")} className="text-2xl" />
      ) : (
        <BiSolidMoon onClick={() => setTheme("dark")} className="text-2xl" />
      )}
    </>
  );
};
export default Darkmode;
