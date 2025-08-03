import { createContext, use, useContext, useState } from "react";

export const ThemeContext= createContext(); //storage

//Provider component
export const ThemeProvider= ({children}) => {

    const [theme, setTheme]= useState('dark');

    const handleToggleTheme= () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    return <ThemeContext.Provider value={{theme, handleToggleTheme}}>
        {children}
    </ThemeContext.Provider>
}


//Creating a component
export const DarkLight= () => {

    const {theme, handleToggleTheme}= useContext(ThemeContext);

    return 
    (
    <div className={`p-4 h-lvh flex flex-col justify-center items-center ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
        <h1>Dark Light Mode Website</h1>
        <p>Hello!! I am a legend!!</p>
        <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md mt-4 p-4"
        onClick={handleToggleTheme}>{theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</button>
    </div>
    )
}