import './SpecialServices.css';
import { 
  FaWindowMaximize, 
  FaCheckCircle,
  FaLayerGroup,
  FaShieldVirus
} from 'react-icons/fa';

function SpecialServices() {

  const specialServices = [
    {
      id: "vitres",
      icon: <FaWindowMaximize />,
      title: "Nettoyage de vitres pour les professionnels",
      description: "Spécialistes dans leur domaine, nos laveurs de vitres savent répondre à vos besoins. Ils interviennent sur tous les types de surfaces vitrées : fenêtres, vitrines, miroirs, verrières...",
      highlight: "Nos laveurs de vitres sont formés aux nouvelles méthodes de nettoyage et de sécurité. Ils interviennent à toutes les hauteurs, même difficiles d'accès en s'aidant d'une perche, d'une nacelle ou de cordes.",
      features: [
        "Fenêtres et vitrines",
        "Miroirs et verrières",
        "Travail en hauteur",
        "Nacelles et cordes"
      ]
    },
    {
      id: "sols",
      icon: <FaLayerGroup />,
      title: "Nettoyage et entretien des sols",
      description: "Notre société de nettoyage intervient sur tous les types de sols : parquets, carrelages, marbres, pierres naturelles, lino, sols thermoplastiques, PVC, bétons, ciments, revêtements industriels, etc.",
      highlight: "Chacun nécessite ses spécificités avec une méthode de nettoyage et des produits différents.",
      features: [
        "Nettoyage à sec, à l'eau ou vapeur",
        "Polissage",
        "Cristallisation et lustrage",
        "Protection hydrofuge"
      ]
    },
    {
      id: "desinfection",
      icon: <FaShieldVirus />,
      title: "Désinfection des locaux",
      description: "Choisissez de désinfecter ponctuellement ou régulièrement vos locaux professionnels pour garantir à vos collaborateurs et visiteurs une réelle sécurité sanitaire.",
      highlight: "Nous avons des équipes d'agents experts, formées aux protocoles de désinfection ainsi qu'à l'utilisation de produits bactéricides et virucides.",
      features: [
        "Désinfection des points de contact",
        "Désinfection intégrale des locaux",
        "Désinfection de l'air avec purificateur",
        "Bureaux, magasins, écoles, hôtels"
      ]
    }
  ];

  return (
    <section id="special-services" className="special-services">
      <div className="special-services-container">

        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Services Spécialisés</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Des prestations de haute qualité avec des équipes formées et des équipements professionnels
          </p>
        </div>

        {/* Services */}
        <div className="special-services-list">
          {specialServices.map((service, index) => (
            <div 
              className={`special-service-item ${index % 2 !== 0 ? 'reverse' : ''}`} 
              key={service.id}
            >
              
              {/* Content Side */}
              <div className="special-service-content">
                <div className="special-service-icon">
                  {service.icon}
                </div>
                <h3 className="special-service-title">{service.title}</h3>
                <p className="special-service-description">{service.description}</p>
                <div className="special-service-highlight">
                  <p>{service.highlight}</p>
                </div>
              </div>

              {/* Features Side */}
              <div className="special-service-features">
                <h4>Nos prestations incluent :</h4>
                <ul>
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <FaCheckCircle className="check-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="btn-service">Demander un devis</a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default SpecialServices;