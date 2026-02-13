import './Industrial.css';
import { 
  FaCar, 
  FaTshirt, 
  FaMicrochip, 
  FaFlask 
} from 'react-icons/fa';

function Industrial() {

  const sectors = [
    {
      icon: <FaCar />,
      title: "Automobile & Transport",
      description: "Usine automobile, cycles, motocycles et construction navale, ferroviaire, aéronautique ou spatiale"
    },
    {
      icon: <FaTshirt />,
      title: "Textile & Matériaux",
      description: "Industrie textile et production de verre, bois, papier, carton, emballages, imprimerie, meubles"
    },
    {
      icon: <FaMicrochip />,
      title: "Informatique & Électronique",
      description: "Fabricants de matériels et composants informatiques, électriques et électroniques et data center"
    },
    {
      icon: <FaFlask />,
      title: "Laboratoire & Médical",
      description: "Laboratoire cosmétique, pharmacie, chimie, parachimie, matériel médico-chirurgical"
    }
  ];

  return (
    <section id="industrial" className="industrial">
      <div className="industrial-container">
        
        <div className="industrial-content">
          
          {/* Left Side - Text */}
          <div className="industrial-text">
            <h2 className="industrial-title">
              Le nettoyage de vos<br />
              <span className="highlight">locaux industriels</span>
            </h2>
            
            <p className="industrial-description">
              La propreté de vos industries et usines représente un enjeu majeur pour le 
              bien-être de vos salariés et la productivité de votre activité.
            </p>
            
            <p className="industrial-description">
              Nous adaptons des services de nettoyage industriel qui répondent à vos besoins 
              et aux contraintes liées à votre métier. Nos agents de service sont formés pour 
              assurer la propreté de vos ateliers et zones de production tout en respectant 
              les protocoles imposés par votre secteur d'activité.
            </p>

            <a href="#contact" className="btn-industrial">Demander un devis</a>
          </div>

          {/* Right Side - Sectors Grid */}
          <div className="industrial-sectors">
            {sectors.map((sector, index) => (
              <div className="sector-card" key={index}>
                <div className="sector-icon">
                  {sector.icon}
                </div>
                <div className="sector-info">
                  <h3>{sector.title}</h3>
                  <p>{sector.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default Industrial;