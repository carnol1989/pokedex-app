import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useFetchInfoPokemon from '../../hooks/useFetchInfoPokemon'
import useFetchEvolPokemon from '../../hooks/useFetchEvolPokemon'

const PokemonCard = ({
  name,
  url
}) => {
  const [infoPokemon, spritesPokemon, typePokemon] = useFetchInfoPokemon(url)

  const apiEvolUrl = `https://pokeapi.co/api/v2/evolution-chain/${infoPokemon.id}`
  const [infoEvolPokemon, infoChainPokemon, infoEvolToPokemon, abilityPokemon] = useFetchEvolPokemon(apiEvolUrl)

  const urlImgPokemon = spritesPokemon.front_default

  return (
    <div className="card" style={{ maxWidth: '100%' }}>
      <img src={`${urlImgPokemon}`} className="card-img-top"
        alt={infoPokemon.name} />
      <div className="card-body">
        <h5 className="card-title"><b>Nro.: </b>{infoPokemon.id}</h5>
        <p className="card-text" style={{ textTransform: 'capitalize' }}><b>Pokemón: </b>{name}</p>
        <p className="card-text"><b>Tipo: </b></p>
        <ul>
          {typePokemon.map((type) => (
            <li key={type.slot} style={{ textTransform: 'capitalize' }}>{type.type.name}</li>
          ))}
        </ul>
        <p className="card-text"><b>Evolución a: </b></p>
        <ul>
          {infoEvolToPokemon.map((evol, index) => (
            <li key={index} style={{ textTransform: 'capitalize' }}>{evol.species.name}</li>
          ))}
        </ul>
        <Link to={`pokemon/${infoPokemon.id}`}>
          Más...
        </Link>
      </div>
    </div >
  )
}

export default PokemonCard
