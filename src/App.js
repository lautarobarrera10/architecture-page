import './App.css';
import { Header } from './Header';
import { FirstSection } from './FirstSection';
import { ContactSection } from './ContactSection';
import { TeamSection } from './TeamSection';

function App() {
  return (
    <div className="App">
      <Header />
      <FirstSection>
        <ContactSection />
      </FirstSection>
      <TeamSection />
    </div>
  );
}

export default App;
