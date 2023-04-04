import React, { useRef, useState, useEffect, useCallback } from 'react';
import SkeletonCardLoader from '../SkeletonCardLoader/SkeletonCardLoader';

interface InfiniteScrollerProps {
  fetchMore: () => void;
  children: React.ReactNode;
  isLoading: boolean;
  hasMore: boolean;
  threshold?: number;
}

const InfiniteScroller: React.FC<InfiniteScrollerProps> = ({ fetchMore, isLoading, hasMore, threshold = 0.5, children }) => {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIntersecting] = useState(false);

  const handleIntersection = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting) {
        setIntersecting(true);
      }
    },
    [setIntersecting]
  );

  useEffect(() => {
    const options = {
      rootMargin: `${threshold * 100}%`
    };
    const observer = new IntersectionObserver(handleIntersection, options);

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      if (sentinelRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sentinelRef.current);
      }
    };
  }, [handleIntersection, threshold]);

  useEffect(() => {
    if (isIntersecting && !isLoading && hasMore) {
      fetchMore();
      setIntersecting(false);
    }
  }, [isIntersecting, isLoading, hasMore, fetchMore]);

  return (
    <div>
      {children}
      <div ref={sentinelRef} />
      {isLoading && <SkeletonCardLoader maxCard={6} />}
    </div>
  );
};

export default InfiniteScroller;
