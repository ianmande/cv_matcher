import './assets/styles/App.css';

import { Header } from './components/header/header';
import { FeedBackSection } from './sections/FeedBackSection';
import { UploadInfo } from './sections/uploadInfo';

function App() {
  return (
    <main className="container">
      <Header />
      <div className="body">
        <UploadInfo />
        <FeedBackSection />
      </div>
    </main>
  );
}

export default App;
