import React from 'react'
import './index.css'
import { useEffect } from 'react'

const Pokemon = () => {
    const API= "https://pokeapi.co/api/v2/pokemon?limit=24";

    const fetchPokemon= async() => {
        try{
            const res= await fetch(API);
            //fetch always returns a promise
            const  data= await res.json();
            console.log(data)
        }
        catch(error){

        }
    }

    useEffect(()=>{
        fetchPokemon();
    },[])

    return (
        <div>Pokemon</div>
    )
}

export default Pokemon