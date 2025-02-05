import styles from './feedback.module.css';

type Props = {
  title: string;
  description: string;
};

export const Feedback = ({ title, description }: Props) => {
  return (
    <div className={styles.root}>
      <h4 className={styles.title}>{title}</h4>
      <span>{description}</span>
    </div>
  );
};
