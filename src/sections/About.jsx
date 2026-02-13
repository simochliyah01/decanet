import './About.css';
import { FaTrophy, FaCogs, FaLeaf, FaBullseye } from 'react-icons/fa';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        
        {/* Section Title */}
        <div className="section-header">
          <h2 className="section-title">Qui sommes-nous ?</h2>
          <div className="title-underline"></div>
        </div>

        {/* Content */}
        <div className="about-content">
          
          <div className="about-text">
            <p className="about-intro">
              <strong>DECA NET</strong> est une société marocaine spécialisée dans le nettoyage, 
              créée par <strong>M. Abdelaziz El Bahraoui</strong>, un professionnel passionné et 
              expérimenté dans le secteur du nettoyage industriel.
            </p>

            <p>
              Depuis notre création, nous avons su bâtir une réputation solide grâce à notre 
              professionnalisme, notre rigueur et notre engagement envers la qualité.
            </p>

            <p>
              Nous intervenons dans <strong>divers secteurs industriels</strong> et offrons des 
              services de nettoyage adaptés aux besoins spécifiques de chaque client. Notre société 
              est présente à <strong>l'échelle nationale</strong>, avec des clients dans les 
              <strong> secteurs privé et public</strong>, que ce soit des entreprises, des 
              institutions publiques, des hôpitaux ou des commerces.
            </p>

            <p className="about-highlight">
              <span className="quote-icon">❝</span>
              Votre propreté est notre priorité, et nous nous engageons à faire de chaque 
              espace un lieu agréable et impeccable.
              <span className="quote-icon">❞</span>
            </p>
          </div>

          <div className="about-features">
            <div className="feature-card">
              <div className="feature-icon">
                <FaTrophy />
              </div>
              <h3>Expertise</h3>
              <p>Équipe expérimentée et formée aux protocoles de chaque secteur d'activité</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FaCogs />
              </div>
              <h3>Équipements</h3>
              <p>Matériels et équipements professionnels de pointe</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FaLeaf />
              </div>
              <h3>Environnement</h3>
              <p>Respect des délais et des normes environnementales</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FaBullseye />
              </div>
              <h3>Sur mesure</h3>
              <p>Solutions de nettoyage personnalisées adaptées à chaque type d'activité</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;