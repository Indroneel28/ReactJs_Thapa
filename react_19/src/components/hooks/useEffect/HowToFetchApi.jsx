import React, { useEffect, useState } from 'react'

const HowToFetchApi = () => {
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const API = "https://pokeapi.co/api/v2/pokemon/pikachu"

    // Fetching using promise-chain
    /*
    const fetchPokemon = () => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                setPokemon(data)
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setError(error);
                setLoading(false)
            });
    }
    */

    // Fetching using async await
    const fetchPokemon = async () => {
        try {
            const res = await fetch(API);
            const data = await res.json();
            setPokemon(data);
            setLoading(false);
        }
        catch (error){
            console.log(error);
            setError(error);
            setLoading(false)
        }
    }



    useEffect(() => {
        fetchPokemon();
    }, []); // [] will allow only one time to run.

    if (error) {
        return (
            <div>
                <h1>Error: {error.message}</h1>
            </div>
        )
    }
    else if (loading) {
        return (
            <>
                <h1>The Pokemon does not exist!</h1>
            </>
        )
    }
    else {
        return (
            <section className="container">
                <header>
                    <h1>Let's catch Pokemon</h1>
                </header>
                <ul className="card-demo">
                    <li className="pokemon-card">
                        <figure>
                            <img
                                src={pokemon.sprites.other.dream_world.front_default}
                                alt={pokemon.name}
                                className='pokemon-image'
                            />
                        </figure>
                        <h1>{pokemon.name}</h1>
                        <div className="grid-three-cols">
                            <p className="pokemon-info">
                                Height: <span> {pokemon.height} </span>
                            </p>
                            <p className="pokemon-info">
                                Weight: <span> {pokemon.weight} </span>
                            </p>
                            <p className="pokemon-info">
                                Speed: <span> {pokemon.stats[5].base_stat} </span>
                            </p>
                        </div>
                    </li>
                </ul>
            </section>
        )
    }
}

export default HowToFetchApi;