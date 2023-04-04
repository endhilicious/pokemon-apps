import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Header from '../Header';

describe('Header', () => {
  it('renders the header with correct text content', () => {
    render(<Header />);
    const headerElement = screen.getByRole('heading', { name: 'Pokemon List' });
    expect(headerElement).toBeInTheDocument();
  });
});
