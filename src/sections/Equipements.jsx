import './Equipements.css';
import { 
  FaWater,
  FaBlender,
  FaShoppingCart,
  FaCogs,
  FaTruck,
  FaHelicopter,
  FaHome,
  FaBuilding,
  FaSolarPanel,
  FaCheckCircle,
  FaCamera,
  FaShieldAlt,
  FaRulerCombined
} from 'react-icons/fa';

function Equipements() {

  const machines = [
    {
      icon: <FaWater />,
      name: "Nettoyeurs haute pression"
    },
    {
      icon: <FaBlender />,
      name: "Aspirateurs professionnels"
    },
    {
      icon: <FaShoppingCart />,
      name: "Chariots complets"
    },
    {
      icon: <FaCogs />,
      name: "Auto laveuse"
    },
    {
      icon: <FaCogs />,
      name: "Mono brosse"
    },
    {
      icon: <FaTruck />,
      name: "Auto laveuse autoportée"
    }
  ];

  const droneServices = [
    {
      icon: <FaHome />,
      title: "Nettoyage de toiture"
    },
    {
      icon: <FaBuilding />,
      title: "Nettoyage de façades"
    },
    {
      icon: <FaSolarPanel />,
      title: "Nettoyage des panneaux solaires"
    }
  ];

  const droneAdvantages = [
    {
      icon: <FaCheckCircle />,
      text: "Nettoyage efficace"
    },
    {
      icon: <FaShieldAlt />,
      text: "Sécurité: plus d'échelle ni de personnes sur les toits"
    },
    {
      icon: <FaRulerCombined />,
      text: "Atteignez des zones inaccessibles jusqu'à 60 mètres"
    },
    {
      icon: <FaCamera />,
      text: "Surveillance en temps réel avec caméra FPV"
    }
  ];

  return (
    <section id="equipements" className="equipements">
      <div className="equipements-container">

        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Nos Machines et Équipements</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Nous mettons à votre disposition, selon vos besoins, des matériels et équipements professionnels de qualité.
          </p>
        </div>

        {/* Machines Grid */}
        <div className="machines-grid">
          {machines.map((machine, index) => (
            <div className="machine-card" key={index}>
              <div className="machine-icon">
                {machine.icon}
              </div>
              <h3 className="machine-name">{machine.name}</h3>
            </div>
          ))}
        </div>

        {/* Drone Section */}
        <div className="drone-section">
          <div className="drone-header">
            <div className="drone-icon-large">
              <FaHelicopter />
            </div>
            <h3 className="drone-title">
              Notre flotte de drones dédiée pour le nettoyage
            </h3>
            <p className="drone-subtitle">
              Toitures, surfaces, façades et panneaux solaires
            </p>
          </div>

          {/* Drone Services */}
          <div className="drone-services">
            {droneServices.map((service, index) => (
              <div className="drone-service-card" key={index}>
                <div className="drone-service-icon">
                  {service.icon}
                </div>
                <h4>{service.title}</h4>
              </div>
            ))}
          </div>

          {/* Drone Advantages */}
          <div className="drone-advantages">
            {droneAdvantages.map((advantage, index) => (
              <div className="drone-advantage" key={index}>
                <div className="advantage-icon">
                  {advantage.icon}
                </div>
                <p>{advantage.text}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default Equipements;