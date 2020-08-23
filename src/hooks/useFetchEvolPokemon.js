import { useState, useEffect } from 'react'

const useFetchEvolPokemon = (apiUrl) => {
    const [infoEvolPokemon, setInfoEvolPokemon] = useState([])
    const [infoChainPokemon, setInfoChainPokemon] = useState([])
    const [infoEvolToPokemon, setInfoEvolToPokemon] = useState([])
    
    useEffect(() => {
        fetch(apiUrl)
            .then(resp => resp.json())
            .then((datos) => {
                //console.log(datos)
                setInfoEvolPokemon(datos)
                //console.log(datos.chain)
                setInfoChainPokemon(datos.chain)
                //console.log(datos.chain.evolves_to)
                setInfoEvolToPokemon(datos.chain.evolves_to)
            })
    }, [apiUrl])

    return [infoEvolPokemon, infoChainPokemon, infoEvolToPokemon]
}

export default useFetchEvolPokemon