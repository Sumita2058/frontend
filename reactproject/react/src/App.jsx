import './App.css'
import { FaPhone } from "react-icons/fa6";
import Logo from "./assets/logo.png";
function App() {

  return (
   <div className="relative z-10 shadow-md w-full dark:bg-black dark:text-white duration-300">
 
  <div className="container">
    <div className="flex justify-between items-center">
      <div className="sm:flex items-center gap-3 hidden font-semibold text-gray-500 dark:text-gray-400 group">
      <FaPhone  className='text-primary text-2xl duration-200 group-hover:scale-105 ' />9815019007
      </div>
      <img src={Logo} alt="" className="w-16 sm:w-24 absolute top-0 left-0 sm:left-1/2 sm:translate-x-1/2 m-2 sm:m-0"/>
    </div>
  </div>
  </div>
   );
}

export default App;

