// src/pages/About/About.jsx ← SOBRESCRIBE TODO
import './About.css'

const About = () => {
  return (
    <div className="about-fullscreen">
      {/* Nubes animadas */}
      <div className="clouds">
        <div className="cloud cloud1"></div>
        <div className="cloud cloud2"></div>
        <div className="cloud cloud3"></div>
      </div>

      <div className="about-container">
        <h1 className="about-title">Sobre Clima Mundial</h1>

        <div className="about-content">
          <p className="about-text">
            <strong>Clima Mundial</strong> es una aplicación desarrollada en 2025 como proyecto final de Desarrollo de Aplicaciones Web con React + Vite.
          </p>

          <div className="about-info">
            <div className="info-card">
              <h3>Desarrollado por</h3>
              <p className="highlight">Sergio Fernández</p>
              <p>Estudiante DAM 2º – Curso 2025/2026</p>
            </div>

            <div className="info-card">
              <h3>Tecnologías utilizadas</h3>
              <p>• React 18 + Vite</p>
              <p>• React Router DOM v6</p>
              <p>• CSS + Google Fonts (Montserrat)</p>
            </div>

            <div className="info-card">
              <h3>Datos meteorológicos</h3>
              <p className="highlight">Open-Meteo API</p>
              <p>• Temperatura actual y sensación térmica</p>
              <p>• Humedad relativa y velocidad del viento</p>
              <p>• Datos en tiempo real</p>
            </div>

            <div className="info-card">
              <h3>Características</h3>
              <p>• Diseño 100% responsive</p>
              <p>• Navegación fluida entre ciudades</p>
              <p>• Detalle completo del tiempo actual</p>
              <p>• Interfaz moderna con animaciones suaves</p>
            </div>
          </div>

          <p className="about-footer">
            © 2025 Clima Mundial – Proyecto académico.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
