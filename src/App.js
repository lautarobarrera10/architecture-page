import './App.css';
import { Header } from './Header';
import { FirstSection } from './FirstSection';
import { ContactSection } from './ContactSection';
import { TeamSection } from './TeamSection';
import { LogoSection } from './LogoSection';
import { PortfolioSection } from './PortfolioSection';

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
    </div>
  );
}

export default App;
