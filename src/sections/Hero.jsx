import './Hero.css';

function Hero() {
  return (
    <section id="accueil" className="hero">
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <h1 className="hero-title">
          Spécialiste du<br />
          <span className="highlight">Nettoyage Industriel,</span><br />
          Entretien des Extérieurs
        </h1>
        
        <p className="hero-slogan">La propreté, au-delà de vos attentes.</p>
        
        <div className="hero-buttons">
          <a href="#contact" className="btn-primary">Demander un devis</a>
          <a href="#services" className="btn-secondary">Nos services</a>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">+700</span>
            <span className="stat-label">Salariés</span>
          </div>
          <div className="stat">
            <span className="stat-number">+150</span>
            <span className="stat-label">Sites clients</span>
          </div>
          <div className="stat">
            <span className="stat-number">+12</span>
            <span className="stat-label">Agences</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;