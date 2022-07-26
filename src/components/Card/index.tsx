import { ReactNode } from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

type CardProps = {
  children?: ReactNode;
  title?: string;
  bgTitleColor?: string;
};

export function Card({ children, title, bgTitleColor }: CardProps) {
  return (
    <div className={styles.cardContainer}>
      {children}
      {title && (
        <p
          className={classNames([
            styles.cardTitle,
            bgTitleColor && styles[bgTitleColor],
          ])}
        >
          {title}
        </p>
      )}
    </div>
  );
}
