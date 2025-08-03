import { createContext, useContext, useState } from "react";

export const ThemeContext= createContext(); //storage

//Provider component
export const ThemeProvider= ({children}) => {

    const [theme, setTheme]= useState('dark');

    return <ThemeContext.Provider value={{theme}}>
        {children}
    </ThemeContext.Provider>
}


//Creating a component
export const DarkLight= () => {
    return <div>
        
    </div>
}