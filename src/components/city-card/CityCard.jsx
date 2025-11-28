import './CityCard.css'
import DefaultButton from '../buttons/default-button/DefaultButton'
import { useNavigate } from 'react-router-dom'

const CityCard = ({ name, country, temp, icon }) => {
  const navigate = useNavigate()

  const goToDetail = () => {
    navigate(`/city/${encodeURIComponent(name)}`)
  }

  return (
    <div className="city-card" onClick={goToDetail}>
      <img
        className="weather-icon"
        src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
        alt="weather icon"
      />

      <h3 className="city-name">
        {name}, {country}
      </h3>

      <p className="temperature">
        {Math.round(temp)}°C
      </p>

      <DefaultButton
        type="primary"
        text="Ver detalle"
        size=""
        action={goToDetail}
      />
    </div>
  )
}

export default CityCard