import { useState, DragEvent, ChangeEvent } from 'react';
import styles from './styles.module.css'; // Importando los estilos

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
    <div className={styles.container}>
      <h3 className={styles.title}>Upload Your CV</h3>
      <div
        className={`${styles.dropZone} ${dragging ? styles.dragging : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className={styles.uploadIcon}>
          {dragging ? '🔄' : file ? '✅' : '📤'}
        </div>
        <p>Arrastra y suelta tu CV aquí</p>
        <label className={styles.button}>
          Archivos
          <input
            type="file"
            onChange={handleFileChange}
            className={styles.input}
          />
        </label>
      </div>
    </div>
  );
};
