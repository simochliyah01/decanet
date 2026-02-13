import './Services.css';
import { 
  FaIndustry, 
  FaStore, 
  FaHome, 
  FaBuilding,
  FaHardHat,
  FaShieldAlt,
  FaRecycle,
  FaTree,
  FaSprayCan
} from 'react-icons/fa';

function Services() {

  const services = [
    {
      icon: <FaIndustry />,
      title: "Nettoyage industriel",
      description: "Usines, ateliers, zones de production avec respect des protocoles de chaque secteur"
    },
    {
      icon: <FaStore />,
      title: "Nettoyage commercial",
      description: "Magasins, centres commerciaux, restaurants et espaces de vente"
    },
    {
      icon: <FaHome />,
      title: "Nettoyage résidentiel",
      description: "Appartements, villas, résidences et copropriétés"
    },
    {
      icon: <FaBuilding />,
      title: "Nettoyage de vitres et façades",
      description: "Fenêtres, vitrines, miroirs, verrières à toutes les hauteurs"
    },
    {
      icon: <FaHardHat />,
      title: "Nettoyage après construction",
      description: "Nettoyage de fin de chantier et après rénovation"
    },
    {
      icon: <FaShieldAlt />,
      title: "Désinfection et hygiène",
      description: "Désinfection des locaux avec produits bactéricides et virucides"
    },
    {
      icon: <FaRecycle />,
      title: "Gestion des déchets",
      description: "Collecte, tri et évacuation des déchets professionnels"
    },
    {
      icon: <FaTree />,
      title: "Entretien d'espaces verts",
      description: "Jardins, parcs, espaces extérieurs et aménagements paysagers"
    },
    {
      icon: <FaSprayCan />,
      title: "Nettoyage des sols",
      description: "Parquets, carrelages, marbres, bétons avec polissage et cristallisation"
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Nos Services</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Nous proposons des solutions personnalisées adaptées à vos besoins spécifiques, 
            que ce soit pour des secteurs particuliers ou des horaires flexibles.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="services-cta">
          <p>Besoin d'un service sur mesure ?</p>
          <a href="#contact" className="btn-cta">Contactez-nous</a>
        </div>

      </div>
    </section>
  );
}

export default Services;