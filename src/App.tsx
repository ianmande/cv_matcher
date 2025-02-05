import './assets/styles/App.css';

import { Card } from './components/card';
import { Header } from './components/header/header';
import { FileUpload } from './components/uploadFile';
import { FeedBackSection } from './sections/FeedBackSection';

function App() {
  return (
    <main className="container">
      <Header />
      <div className="card-upload-info">
        <Card title="Subir tu CV">
          <FileUpload />
        </Card>

        <Card title="URL de puesto de vacante">
          <input type="url" />
        </Card>
      </div>

      <FeedBackSection />
    </main>
  );
}

export default App;
