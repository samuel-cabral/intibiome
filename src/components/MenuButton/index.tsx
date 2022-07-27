import { HTMLAttributes, MouseEventHandler, ReactNode } from 'react';
import styles from './styles.module.scss';

interface MenuButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

export function MenuButton({ children, onClick, ...rest }: MenuButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={styles.menuButton}
      {...rest}
    >
      {children && children}
    </button>
  );
}
