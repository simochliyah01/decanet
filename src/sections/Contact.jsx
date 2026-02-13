import './Contact.css';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaPaperPlane
} from 'react-icons/fa';

function Contact() {

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Téléphone",
      details: ["06.58.76.39.94"]
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      details: ["stedecanet@gmail.com"]
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Adresse",
      details: ["Kenitra, Maroc"]
    },
    {
      icon: <FaClock />,
      title: "Disponibilité",
      details: ["Lun - Sam: 8h00 - 18h00", "Devis sous 24h"]
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-container">

        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Contactez-Nous</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Nous sommes disponibles pour répondre à vos besoins et vous fournir un devis dans un délai de 24 heures.
          </p>
        </div>

        {/* Contact Content */}
        <div className="contact-content">

          {/* Contact Info Cards */}
          <div className="contact-info">
            {contactInfo.map((info, index) => (
              <div className="contact-card" key={index}>
                <div className="contact-icon">
                  {info.icon}
                </div>
                <div className="contact-details">
                  <h3>{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx}>{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <h3 className="form-title">Demander un devis gratuit</h3>
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nom complet</label>
                  <input type="text" id="name" name="name" placeholder="Votre nom" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Téléphone</label>
                  <input type="tel" id="phone" name="phone" placeholder="06 XX XX XX XX" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="votre@email.com" required />
              </div>

              <div className="form-group">
                <label htmlFor="service">Service souhaité</label>
                <select id="service" name="service" required>
                  <option value="">Sélectionnez un service</option>
                  <option value="industriel">Nettoyage industriel</option>
                  <option value="commercial">Nettoyage commercial</option>
                  <option value="residentiel">Nettoyage résidentiel</option>
                  <option value="vitres">Nettoyage de vitres</option>
                  <option value="desinfection">Désinfection</option>
                  <option value="espaces-verts">Entretien espaces verts</option>
                  <option value="drone">Nettoyage par drone</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4" placeholder="Décrivez votre besoin..." required></textarea>
              </div>

              <button type="submit" className="btn-submit">
                <FaPaperPlane />
                <span>Envoyer la demande</span>
              </button>
            </form>
          </div>

        </div>

      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">

          <div className="footer-content">

            {/* Logo & Description */}
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="logo-deca">DECA</span>
                <span className="logo-net">NET</span>
              </div>
              <p className="footer-slogan">ROUTE DU PROPRE</p>
              <p className="footer-description">
                Spécialiste du nettoyage industriel et entretien des extérieurs. La propreté, au-delà de vos attentes.
              </p>
              <div className="footer-social">
                <button className="social-link" aria-label="Facebook"><FaFacebookF /></button>
                <button className="social-link" aria-label="Instagram"><FaInstagram /></button>
                <button className="social-link" aria-label="LinkedIn"><FaLinkedinIn /></button>
                <button className="social-link whatsapp" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-links">
              <h4>Liens Rapides</h4>
              <ul>
                <li><a href="#accueil">Accueil</a></li>
                <li><a href="#about">Qui sommes-nous</a></li>
                <li><a href="#services">Nos services</a></li>
                <li><a href="#equipements">Équipements</a></li>
                <li><a href="#references">Références</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer-links">
              <h4>Nos Services</h4>
              <ul>
                <li><a href="#services">Nettoyage industriel</a></li>
                <li><a href="#services">Nettoyage commercial</a></li>
                <li><a href="#services">Nettoyage de vitres</a></li>
                <li><a href="#services">Désinfection</a></li>
                <li><a href="#services">Espaces verts</a></li>
                <li><a href="#equipements">Nettoyage par drone</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-contact">
              <h4>Contact</h4>
              <div className="footer-contact-item">
                <FaMapMarkerAlt />
                <span>Kenitra, Maroc</span>
              </div>
              <div className="footer-contact-item">
                <FaPhone />
                <span>06.58.76.39.94</span>
              </div>
              <div className="footer-contact-item">
                <FaPhone />
                <span>06.69.99.00.92</span>
              </div>
              <div className="footer-contact-item">
                <FaEnvelope />
                <span>stedecanet@gmail.com</span>
              </div>
            </div>

          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p>&copy; DECA NET. Tous droits réservés.</p>
            <p>Société marocaine spécialisée dans le nettoyage industriel</p>
          </div>

        </div>
      </footer>

    </section>
  );
}

export default Contact;