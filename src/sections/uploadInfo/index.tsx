import { Card } from '../../components/card';
import { JobPostingURL } from '../../components/jobPositingURL';
import { FileUpload } from '../../components/uploadFile/UploadFIle';

import styles from './styles.module.css';

export const UploadInfo = () => {
  return (
    <div className={styles.container}>
      <Card title="Subir tu CV">
        <FileUpload />
      </Card>

      <Card title="URL de puesto de vacante">
        <JobPostingURL />
      </Card>
    </div>
  );
};
