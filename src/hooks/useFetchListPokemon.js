import { useState, useEffect } from 'react'

const useFetchListPokemon = (apiUrl) => {
    const [listPokemon, setApiPokemon] = useState([])

    useEffect(() => {
        fetch(apiUrl)
            .then(resp => resp.json())
            .then(data => data.results)
            .then((datos) => {
                setApiPokemon(datos)
            })
    }, [apiUrl])

    return [listPokemon]
}

export default useFetchListPokemon