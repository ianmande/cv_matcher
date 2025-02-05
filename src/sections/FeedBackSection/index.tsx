import { Card } from '../../components/card';
import { Feedback } from '../../components/feedback';
import { ApplicationMessage } from '../../components/inputMessage';

import styles from './styles.module.css';
export const FeedBackSection = () => {
  return (
    <div className={styles.container}>
      <Card>
        <div className={styles.header}>
          <h2>Resultado de análisis</h2>
          <strong>85%</strong>
        </div>
        <div>
          <Feedback
            title="Coincidencia de habilidades "
            description="Your technical skills align well with 8 out of 10 required skills"
          />
          <i className={styles.divider} />
          <Feedback
            title="Experience Level "
            description="You meet the minimum experience requirement"
          />
        </div>
      </Card>

      <ApplicationMessage />
    </div>
  );
};
