import { ReactNode } from 'react';
import styles from './button.module.css';

interface Props {
  children: ReactNode;
  onClick: () => void;
  type?: 'outline' | 'solid';
}

export const Button = ({ children, onClick, type = 'solid' }: Props) => {
  return (
    <button
      className={`${styles.button} ${
        type === 'outline' ? styles.outline : styles.solid
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
