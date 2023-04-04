import { useState, useEffect } from 'react';

import PokemonList from 'src/components/PokemonList/PokemonList';
import InfiniteScroller from 'components/common/InfiniteScroller/InfiniteScroller';

import { Pokemon, PokemonListResponse } from 'src/globalTypes';
import { ITEMS_PER_PAGE, POKEMON_API_URL } from '../../../src/constants';

import styles from './styles.module.scss';

interface PokemonDetails {
  name: string;
  types: {
    type: {
      name: string;
    }
  }[]
}

export default function Home(): JSX.Element {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [nextUrl, setNextUrl] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);

        const res = await fetch(POKEMON_API_URL);
        const data = await res.json() as PokemonListResponse;
  
        data.next && setNextUrl(data.next);

        const pokemonData = await Promise.all(data.results.map(async (pokemon) => {
          if (pokemon.url) {
            const pokemonRes = await fetch(pokemon.url);
            const pokemonDetails = await pokemonRes.json() as PokemonDetails;
            return {
              types: pokemonDetails.types.map(type => type.type.name),
              ...pokemon
            }
          }
        }))

        const filteredPokemonData = pokemonData.filter(pokemon => pokemon !== undefined) as Pokemon[];

        setPokemonList(filteredPokemonData);
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false);
      }
    };
    fetchPokemon();
  }, []);

  const loadMorePokemon = async () => {
    setLoading(true);
    try {
      const res = await fetch(nextUrl as string);
      const data = await res.json() as PokemonListResponse;
  
      data.next && setNextUrl(data.next);
  
      setPokemonList(prevList => [...prevList, ...data.results]);
      setHasMore(data?.results?.length === ITEMS_PER_PAGE);
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <InfiniteScroller fetchMore={loadMorePokemon} isLoading={loading} hasMore={hasMore}>
        <PokemonList results={pokemonList} />
      </InfiniteScroller>
    </div>
  );
}
