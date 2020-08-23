import { useState, useEffect } from 'react'

const useFetchInfoPokemon = (apiUrl) => {
    const [infoPokemon, setInfoPokemon] = useState([])
    const [spritesPokemon, setSpritePokemon] = useState([])
    const [typePokemon, setTypePokemon] = useState([])
    const [abilityPokemon, setAbilityPokemon] = useState([])

    useEffect(() => {
        fetch(apiUrl)
            .then(resp => resp.json())
            .then((datos) => {
                //console.log(datos)
                setInfoPokemon(datos)
                console.log(datos.abilities)
                setAbilityPokemon(datos.abilities)
                //console.log(datos.sprites)
                setSpritePokemon(datos.sprites)
                //console.log(datos.types)
                setTypePokemon(datos.types)
            })
    }, [apiUrl])

    return [infoPokemon, spritesPokemon, typePokemon, abilityPokemon]
}

export default useFetchInfoPokemon