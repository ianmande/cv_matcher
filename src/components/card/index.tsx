import styles from './card.module.css';

type Props = {
  title?: string;
  children: React.ReactNode;
};

export const Card = ({ title, children }: Props) => {
  return (
    <div className={styles.root}>
      {title && <h4 className={styles.title}>{title}</h4>}
      {children}
    </div>
  );
};
