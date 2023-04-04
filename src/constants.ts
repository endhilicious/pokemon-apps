import { TypeColors } from "./globalTypes";

export const typeColors: TypeColors = {
  normal: '#A8A878',
  fighting: '#C03028',
  flying: '#A890F0',
  poison: '#A040A0',
  ground: '#E0C068',
  rock: '#B8A038',
  bug: '#A8B820',
  ghost: '#705898',
  steel: '#B8B8D0',
  fire: '#F08030',
  water: '#6890F0',
  grass: '#78C850',
  electric: '#F8D030',
  psychic: '#F85888',
  ice: '#98D8D8',
  dragon: '#7038F8',
  dark: '#705848',
  fairy: '#EE99AC',
};

export const ITEMS_PER_PAGE = 20;
export const POKEMON_API_URL = `https://pokeapi.co/api/v2/pokemon?limit=${ITEMS_PER_PAGE}&offset=0`;
export const RAW_GITHUB_USER_CONTENT = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';
