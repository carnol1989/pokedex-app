import React from 'react'
import {getPokemonByName} from '../../selectors/getPokemonByName'
import PokemonCard from './PokemonCard';


const PokemonList = ({publisher}) => {
    const pokemones = getPokemonByName(publisher)
    return (
        <div className="card-columns">
            {pokemones.map(pokemon =>( <PokemonCard key={pokemon.url}{...pokemon}/>))}
        </div>
    )
}

export default PokemonList
