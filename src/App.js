import './App.css';
import { Header } from './Header';
import { FirstSection } from './FirstSection';
import { ContactSection } from './ContactSection';
import { TeamSection } from './TeamSection';
import { LogoSection } from './LogoSection';

function App() {
  return (
    <div className="App">
      <Header />
      <FirstSection>
        <ContactSection />
      </FirstSection>
      <TeamSection />
      <LogoSection />
    </div>
  );
}

export default App;
