import { useState, DragEvent, ChangeEvent } from 'react';

import { UploadCloud } from '../icons/UploadCloud';

import styles from './styles.module.css';

export const FileUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [dragging, setDragging] = useState<boolean>(false);

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(false);
    if (event.dataTransfer.files.length > 0) {
      setFile(event.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  return (
    <div
      className={`${styles.dropZone} ${dragging ? styles.dragging : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className={styles.uploadIcon}>
        {dragging ? '🔄' : file ? '✅' : <UploadCloud />}
        <p>Arrastra y suelta tu CV aquí</p>
      </div>
      <label className={styles.button}>
        Archivos
        <input
          type="file"
          onChange={handleFileChange}
          className={styles.input}
        />
      </label>
    </div>
  );
};
