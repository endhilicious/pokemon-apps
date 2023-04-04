import React from 'react';
import Image from 'next/image'

import { PokemonListResponse } from 'src/globalTypes';
import { RAW_GITHUB_USER_CONTENT, typeColors } from '../../../src/constants';

import styles from './PokemonList.module.scss';

const PokemonList: React.FC<PokemonListResponse> = ({ results }) => {
  return (
    <main className={styles.main}>
      {results.map((pokemon, index) => (
        <div data-testid="pokemon-card" key={pokemon.name} className={styles.pokemonCard} style={{ backgroundColor: typeColors[pokemon?.types?.[0] || 'normal'] }}>
          <div className={styles.pokemonImage}>
            <Image src={`${RAW_GITHUB_USER_CONTENT}${index + 1}.png`} alt={pokemon.name} width={96} height={96} />
          </div>
          <div className={styles.pokemonName}>
            {pokemon.name}
          </div>
        </div>
      ))}
    </main>
  )
}

export default PokemonList