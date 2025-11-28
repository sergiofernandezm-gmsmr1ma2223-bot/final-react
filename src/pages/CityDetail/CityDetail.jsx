import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getWeather } from '../../services/weatherAPI'
import DefaultButton from '../../components/buttons/default-button/DefaultButton'
import './CityDetail.css'

const CityDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [city, setCity] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const cargar = async () => {
      try {
        const data = await getWeather(id)
        setCity(data)
      } catch (err) {
        console.log('Ciudad no encontrada')
      } finally {
        setLoading(false)
      }
    }
    cargar()
  }, [id])

  if (loading) {
    return <div className="detail-loading">Cargando detalle...</div>
  }

  if (!city) {
    return <div className="detail-error">Ciudad no encontrada</div>
  }

  return (
    <div className="detail-fullscreen">
      <div className="clouds">
        <div className="cloud cloud1"></div>
        <div className="cloud cloud2"></div>
        <div className="cloud cloud3"></div>
      </div>

      <div className="detail-container">
        <div className="detail-card">
          <h2 className="detail-city">
            {city.name}, {city.sys.country}
          </h2>

          <img
            src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@4x.png`}
            alt={city.weather[0].description}
            className="detail-icon"
          />

          <p className="detail-temp">{Math.round(city.main.temp)}°C</p>
          <p className="detail-desc">{city.weather[0].description}</p>

          <div className="detail-info">
            <div className="info-row">
              <span>Sensación térmica</span>
              <strong>{Math.round(city.main.feels_like)}°C</strong>
            </div>
            <div className="info-row">
              <span>Humedad</span>
              <strong>{city.main.humidity}%</strong>
            </div>
            <div className="info-row">
              <span>Viento</span>
              <strong>{city.wind.speed} m/s</strong>
            </div>
          </div>

          <DefaultButton
            type="primary"
            text="Volver a ciudades"
            size="large"
            action={() => navigate('/cities')}
          />
        </div>
      </div>
    </div>
  )
}

export default CityDetail
