import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import PokemonList from '../PokemonList';

const mockPokemonList = [
  { name: 'bulbasaur' },
  { name: 'charmander' },
  { name: 'squirtle' },
];

describe('PokemonList', () => {
  it('renders a list of pokemon cards', () => {
    render(<PokemonList results={mockPokemonList} />);
    const pokemonCards = screen.getAllByTestId('pokemon-card');
    expect(pokemonCards).toHaveLength(mockPokemonList.length);
  });

  it('renders the correct name for each pokemon', () => {
    render(<PokemonList results={mockPokemonList} />);
    mockPokemonList.forEach(pokemon => {
      const pokemonName = screen.getByText(pokemon.name);
      expect(pokemonName).toBeInTheDocument();
    });
  });

  it('applies the correct background color for each pokemon card', () => {
    render(<PokemonList results={mockPokemonList} />);
    const pokemonCards = screen.getAllByTestId('pokemon-card');
    pokemonCards.forEach((card, index) => {
      const backgroundColor = card.style.backgroundColor;
      expect(backgroundColor).toBe('rgb(168, 168, 120)');
    });
  });
});
