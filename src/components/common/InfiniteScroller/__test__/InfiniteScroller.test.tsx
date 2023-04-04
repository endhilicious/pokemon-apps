import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';

import InfiniteScroller from '../InfiniteScroller';

class IntersectionObserver {
  observe() {
    return null;
  }
  unobserve() {
    return null;
  }
}

window.IntersectionObserver = IntersectionObserver as any;

describe('InfiniteScroller', () => {
  const mockFetchMore = jest.fn();
  const mockChildren = (
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  );

  it('should render the children', () => {
    render(
      <InfiniteScroller fetchMore={mockFetchMore} isLoading={false} hasMore={true}>
        {mockChildren}
      </InfiniteScroller>
    );

    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.getByText('Item 3')).toBeInTheDocument();
  });

  it('should render the loading indicator if isLoading is true', () => {
    render(
      <InfiniteScroller fetchMore={mockFetchMore} isLoading={true} hasMore={true}>
        {mockChildren}
      </InfiniteScroller>
    );

    expect(screen.getByTestId('skeleton-card-loader')).toBeInTheDocument();
  });
});
