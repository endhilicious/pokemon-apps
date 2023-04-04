import React from 'react';
import styles from './SkeletonCardLoader.module.scss';

interface SkeletonCardLoaderProps {
  maxCard: number;
}

const SkeletonCardLoader: React.FC<SkeletonCardLoaderProps> = ({ maxCard }) => {
  return (
    <div className={styles.skeletonContainer} data-testid="skeleton-card-loader">
      {Array.from({ length: maxCard }).map((_, index) => (
        <div className={styles.skeletonCard} key={index}>
          <div className={styles.skeletonImage} />
          <div className={styles.skeletonTitle} />
          <div className={styles.skeletonSubtitle} />
        </div>
      ))}
    </div>
  );
};

export default SkeletonCardLoader;
