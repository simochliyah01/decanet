import './App.css';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Industrial from './sections/Industrial';
import SpecialServices from './sections/SpecialServices';
import Equipements from './sections/Equipements';
import References from './sections/References';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Industrial />
      <SpecialServices />
      <Equipements />
      <References />
      <Contact />
    </div>
  );
}

export default App;