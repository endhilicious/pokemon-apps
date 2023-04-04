export interface Pokemon {
  name: string;
  url?: string | null;
  types?: string[];
}

export interface PokemonListResponse {
  results: Pokemon[];
  next?: string | null;
}
export interface TypeColors {
  [key: string]: string;
}