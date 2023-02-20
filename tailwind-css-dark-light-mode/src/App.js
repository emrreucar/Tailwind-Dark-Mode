import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "light" ? "dark" : "light"
  );

  useEffect(() => {
    if(localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)){
      document.documentElement.classList.add("dark");
    }
    else{
      document.documentElement.classList.remove("dark");
    }
  }, [theme])
  
  function changeTheme(){
    setTheme(theme === "light" ? "dark" : "light");

    if(theme === "dark"){
      document.documentElement.classList.add('dark');
      localStorage.setItem("theme","dark");
    }
    else{
      document.documentElement.classList.remove('dark');
      localStorage.setItem("theme", "light");
    }
  }

  return (
    <div className="App h-screen bg-blue-200 dark:bg-black">
      <nav className='w-full flex justify-center items-center h-24 bg-blue-300 dark:bg-blue-900'>
        <h1 className='dark:text-white'>Tailwind CSS ile Dark Mode Yapımı</h1>
        <button onClick={changeTheme} className='bg-black text-white dark:bg-white dark:text-black p-2 rounded-xl ml-4 hover:bg-rose-700 transition-all'>{theme} MODE</button>
      </nav>
      <div className=' ml-72 text-black bg-blue-200 h-72 w-72 p-10 dark:bg-black dark:text-white'>
      <p className=''>Lorem ipsum dolor sit ametLorem ipsum dolor sit amet</p>
      <p className=''>Lorem ipsum dolor sit ametLorem ipsum dolor sit amet</p>
      <p className=''>Lorem ipsum dolor sit ametLorem ipsum dolor sit amet</p>
      </div>
    </div>
  );
}

export default App;
