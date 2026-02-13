import './References.css';
import { FaUsers, FaMapMarkerAlt, FaBuilding, FaCalendarAlt } from 'react-icons/fa';

function References() {

  const clients = [
    { name: "NETAFIM" },
    { name: "KENZ MEHDIA" },
    { name: "CELIO" },
    { name: "NOVARES" },
    { name: "LABEL'VIE" },
    { name: "KITEA" },
    { name: "KIABI" },
    { name: "MAGNA" },
    { name: "MEGARAMA" }
  ];

  const stats = [
    {
      icon: <FaUsers />,
      number: "+700",
      label: "Salariés"
    },
    {
      icon: <FaMapMarkerAlt />,
      number: "+150",
      label: "Sites clients"
    },
    {
      icon: <FaBuilding />,
      number: "+12",
      label: "Agences"
    },
    {
      icon: <FaCalendarAlt />,
      number: "2019",
      label: "Année de création"
    }
  ];

  return (
    <section id="references" className="references">
      <div className="references-container">

        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Nos Références Clients</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Avec plus de 4 ans d'expérience, notre société de nettoyage s'est imposée comme un acteur de confiance dans le secteur. Nos clients nous témoignent leur fidélité grâce à notre savoir-faire, notre rigueur et la qualité constante de nos prestations.
          </p>
        </div>

        {/* Clients Logos Grid */}
        <div className="clients-grid">
          {clients.map((client, index) => (
            <div className="client-card" key={index}>
              <span className="client-name">{client.name}</span>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          <div className="stats-header">
            <h3>Les Chiffres Clés</h3>
            <p>DECA NET en quelques chiffres</p>
          </div>

          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div className="stat-card" key={index}>
                <div className="stat-icon">
                  {stat.icon}
                </div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Coverage Section */}
        <div className="coverage-section">
          <div className="coverage-content">
            <div className="coverage-icon">
              <FaMapMarkerAlt />
            </div>
            <div className="coverage-text">
              <h3>Intervention et disponibilité</h3>
              <p>
                Nous intervenons <strong>partout au Maroc</strong>, avec des équipes disponibles dans toutes les villes pour répondre à vos besoins.
              </p>
            </div>
          </div>
          <a href="#contact" className="btn-coverage">Demander un devis gratuit</a>
        </div>

      </div>
    </section>
  );
}

export default References;