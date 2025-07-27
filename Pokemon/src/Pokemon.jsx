import React, { useState } from "react";
import "./index.css";
import { useEffect } from "react";
import PokemonCard from "./pages/PokemonCard";

const Pokemon = () => {
  const API = "https://pokeapi.co/api/v2/pokemon?limit=100";
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");

  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      //fetch always returns a promise
      const data = await res.json();
      //console.log(data);

      const detailedPokemonData = data.results.map(async (currPokemon) => {
        const res = await fetch(currPokemon.url);
        const data = await res.json();
        //console.log(data);
        return data;
      });

      const detailedResponses = await Promise.all(detailedPokemonData);
      console.log(detailedResponses);
      setPokemon(detailedResponses);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);


  //Search functionality
  const searchData= pokemon.filter((currPokemon) => {
    return currPokemon.name.toLowerCase().includes(search.toLowerCase());
  })


  if (error) {
    return <h1>Something went wrong</h1>;
  } else if (loading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <>
        <section className="container">
          <header>
            <h1>Lets Catch Pokemon</h1>
          </header>

          <div className="pokemon-search">
            <input
              type="text"
              placeholder="Search Pokemon"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div>
            <ul className="cards">
              {searchData.map((currPokemon) => {
                return (
                  <PokemonCard key={currPokemon.id} pokemonData={currPokemon} />
                );
              })}
            </ul>
          </div>
        </section>
      </>
    );
  }
};

export default Pokemon;
