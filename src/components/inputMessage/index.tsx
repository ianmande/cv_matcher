import { useState } from 'react';

import styles from './inputMessage.module.css';
import { Button } from '../button';
import { Card } from '../card';

export const ApplicationMessage = () => {
  const [message, setMessage] = useState('');

  const handleGenerateMessage = () => {
    setMessage('This is a generated application message.');
  };

  const handleCopyText = () => {
    setMessage('');
  };

  return (
    <Card title="Mensaje personalizado">
      <div className={styles.container}>
        <textarea
          className={styles.textarea}
          placeholder="Aquí se genera tu mensaje personalizado..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
        />
        <div className={styles.buttonContainer}>
          <Button onClick={handleGenerateMessage}>Generar</Button>
          <Button onClick={handleCopyText} type="outline">
            Copiar
          </Button>
        </div>
      </div>
    </Card>
  );
};
