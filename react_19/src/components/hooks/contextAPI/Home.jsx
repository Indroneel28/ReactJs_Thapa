import React, { useContext, use } from 'react';
import { BioContext, useBioContext } from ".";

export const Home = () => {
    // const { myName, myAge } = useContext(BioContext)
    // const { myName, myAge } = useBioContext();
    //use hook is alternative of useContext hook
    const { myName, myAge }= use(BioContext);
    return (
        <div>
            <h1>Home</h1>
            <p>{myName}</p>
            <p>{myAge}</p>
        </div>
    )
}

