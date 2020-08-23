import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string';

import useForm from '../../hooks/useForm'
import useFetchListPokemon from '../../hooks/useFetchListPokemon'

import PokemonCard from '../pokemon/PokemonCard'

const SearchScreen = ({ history }) => {
    const location = useLocation()
    const { q = '' } = queryString.parse(location.search)
    const [formValues, handleInput] = useForm({
        searText: q
    })
    const { searText } = formValues

    const [listPokemon] = useFetchListPokemon('https://pokeapi.co/api/v2/pokemon?limit=25')

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`?q=${searText}`)
    }
    return (
        <div>
            <h2>Search Screen</h2>
            <hr />
            <div className="row">
                <div className="col-12">
                    <form onSubmit={handleSubmit}>
                        <input type="text"
                            placeholder="Find your pokemon"
                            name="searText"
                            value=''
                            className="form-control"
                            value={searText}
                            onChange={handleInput}
                        />
                        <button type="submit" className="btn m-t btn-block btn-outline-primary">
                            Search
                        </button>
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h4>Results</h4>
                </div>
            </div>
            <div className="row">
                {listPokemon.map(pokemon => (<PokemonCard key={pokemon.url} {...pokemon} />))}
            </div>
        </div>
    )
}

export default SearchScreen
