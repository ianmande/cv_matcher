import { useState } from 'react';

import styles from './jobPositingURL.module.css';
import { Button } from '../button';

export const JobPostingURL = () => {
  const [url, setUrl] = useState('');

  const handleAnalyze = () => {
    console.log('Analyzing URL:', url);
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <span className={styles.icon}>🔗</span>
        <input
          type="text"
          className={styles.input}
          placeholder="Pega la URL de la vacante aquí o la descripción"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
      <Button onClick={handleAnalyze}>Analizar</Button>
    </div>
  );
};
