import './App.css';
import { Header } from './Header';
import { FirstSection } from './FirstSection';
import { ContactSection } from './ContactSection';

function App() {
  return (
    <div className="App">
      <Header />
      <FirstSection>
        <ContactSection />
      </FirstSection>
    </div>
  );
}

export default App;
