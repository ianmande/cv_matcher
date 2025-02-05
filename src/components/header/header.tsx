import { Card } from '../card';

import styles from './header.module.css';

export const Header = () => {
  return (
    <div className={styles.container}>
      <Card>
        <h1 className={styles.main_title}>TalentMatch</h1>
      </Card>
    </div>
  );
};
