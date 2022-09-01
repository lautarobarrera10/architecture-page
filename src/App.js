import './App.css';
import { Header } from './Header';
import { FirstSection } from './FirstSection';
import { ContactSection } from './ContactSection';
import { TeamSection } from './TeamSection';
import { LogoSection } from './LogoSection';
import { PortfolioSection } from './PortfolioSection';
import { HightlightsSection } from './HightlightsSection';

function App() {
  return (
    <div className="App">
      <Header />
      <FirstSection>
        <ContactSection />
      </FirstSection>
      <TeamSection />
      <LogoSection />
      <PortfolioSection />
      <HightlightsSection />
    </div>
  );
}

export default App;
