import { createContext, useContext } from "react";

//1st step
export const BioContext = createContext();
//createContext() returns a context component, not a variable.
//So, capital letter

//2nd step
export const BioProvider = ({ children }) => {
    const myName = "KKR";
    const myAge = 21;
    return <BioContext.Provider value={{ myName, myAge }}>
        {children}
    </BioContext.Provider>
}


//custom hook
export const useBioContext= () => {
    const context= useContext(BioContext);
    if(context===undefined){
        throw new Error('Component must be wrapped with BioProvider')
    }
    return context;
}