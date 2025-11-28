import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  })
  const [enviado, setEnviado] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setTimeout(() => {
      setEnviado(true)
      setFormData({ nombre: '', email: '', mensaje: '' })
      setTimeout(() => setEnviado(false), 4000)
    }, 500)
  }

  return (
    <div className="contact-fullscreen">
      <div className="clouds">
        <div className="cloud cloud1"></div>
        <div className="cloud cloud2"></div>
        <div className="cloud cloud3"></div>
      </div>

      <div className="contact-container">
        <h1 className="contact-title">Contacto</h1>

        <div className="contact-card">
          {enviado && (
            <div className="success-message">
              Mensaje enviado correctamente. ¡Gracias!
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="nombre"
              placeholder="Tu nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="contact-input"
            />
            <input
              type="email"
              name="email"
              placeholder="tu@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="contact-input"
            />
            <textarea
              name="mensaje"
              placeholder="Escribe tu mensaje aquí..."
              rows="6"
              value={formData.mensaje}
              onChange={handleChange}
              required
              className="contact-input contact-textarea"
            ></textarea>

            <button type="submit" className="contact-button">
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
