import React, { useMemo } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import useFetchInfoPokemon from '../../hooks/useFetchInfoPokemon'
import useFetchEvolPokemon from '../../hooks/useFetchEvolPokemon'

const PokemonScreen = ({ history }) => {
    const { pokemonId } = useParams()

    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
    const [infoPokemon, spritesPokemon, typePokemon, abilityPokemon] = useFetchInfoPokemon(url)

    const apiEvolUrl = `https://pokeapi.co/api/v2/evolution-chain/${infoPokemon.id}`
    const [infoEvolPokemon, infoChainPokemon, infoEvolToPokemon] = useFetchEvolPokemon(apiEvolUrl)
    const urlImgPokemon = spritesPokemon.front_default

    if (!infoPokemon) {
        return <Redirect to='/' />
    }
    const handleReturn = () => {
        history.goBack()
    }

    return (
        <div className="card" style={{ maxWidth: '50%' }}>
            <img src={`${urlImgPokemon}`} className="card-img-top"
                alt={infoPokemon.name} />
            <div className="card-body">
                <h5 className="card-title"><b>Nro.: </b>{infoPokemon.id}</h5>
                <p className="card-text" style={{ textTransform: 'capitalize' }}><b>Pokemón: </b>{infoPokemon.name}</p>
                <p className="card-text"><b>Altura: </b>{infoPokemon.height}</p>
                <p className="card-text"><b>Peso: </b>{infoPokemon.weight}</p>
                <p className="card-text"><b>Habilidades: </b></p>
                <ul>
                    {abilityPokemon.map((item) => (
                        <li key={item.ability.url} style={{ textTransform: 'capitalize' }}>{item.ability.name}</li>
                    ))}
                </ul>
                <p className="card-text"><b>Evolución a: </b></p>
                <ul>
                    {infoEvolToPokemon.map((evol, index) => (
                        <li key={index} style={{ textTransform: 'capitalize' }}>{evol.species.name}</li>
                    ))}
                </ul>
                <button className="btn btn-outline-info" onClick={handleReturn}> Return </button>
            </div>
        </div >
    )
}

export default PokemonScreen
