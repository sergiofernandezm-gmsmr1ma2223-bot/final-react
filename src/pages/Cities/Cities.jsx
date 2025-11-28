import { useState, useEffect } from 'react'
import CityCard from '../../components/city-card/CityCard'
import SearchBar from '../../components/search-bar/SearchBar'
import { getWeather } from '../../services/weatherAPI'
import './Cities.css'

const Cities = () => {
  const [allCities, setAllCities] = useState([])
  const [cities, setCities] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  const ciudades = [
    'Madrid','Barcelona','Valencia','Sevilla','Zaragoza','Málaga','Murcia','Palma','Bilbao','Alicante',
    'London','Manchester','Birmingham','Liverpool','Leeds','Glasgow','Bristol','Edinburgh','Cardiff','Belfast',
    'Paris','Marseille','Lyon','Toulouse','Nice','Nantes','Strasbourg','Montpellier','Bordeaux','Lille',
    'Berlin','Hamburg','Munich','Cologne','Frankfurt','Stuttgart','Düsseldorf','Dortmund','Essen','Leipzig',
    'Rome','Milan','Naples','Turin','Palermo','Genoa','Bologna','Florence','Bari','Catania',
    'Tokyo','Osaka','Yokohama','Nagoya','Sapporo','Kobe','Kyoto','Fukuoka','Kawasaki','Saitama',
    'New York','Los Angeles','Chicago','Houston','Phoenix','Philadelphia','San Antonio','San Diego','Dallas','San Jose',
    'Sydney','Melbourne','Brisbane','Perth','Adelaide','Gold Coast','Newcastle','Canberra','Wollongong','Geelong',
    'Dubai','Abu Dhabi','Sharjah','Riyadh','Jeddah','Doha','Kuwait City','Muscat','Manama','Amman',
    'São Paulo','Rio de Janeiro','Brasília','Salvador','Fortaleza','Belo Horizonte','Manaus','Curitiba','Recife','Porto Alegre'
  ]

  useEffect(() => {
    const cargar = async () => {
      const resultados = []
      for (const city of ciudades) {
        try {
          const data = await getWeather(city)
          resultados.push(data)
        } catch (err) {}
      }
      setAllCities(resultados)
      setCities(resultados)
      setLoading(false)
    }
    cargar()
  }, [])

  useEffect(() => {
    if (search === '') {
      setCities(allCities)
    } else {
      const filtered = allCities.filter(city =>
        city.name.toLowerCase().includes(search.toLowerCase()) ||
        city.sys.country.toLowerCase().includes(search.toLowerCase())
      )
      setCities(filtered)
    }
  }, [search, allCities])

  if (loading) {
    return <div className="cities-loading">Cargando, puede tardar unos segundos...</div>
  }

  return (
    <div className="cities-fullscreen">
      <div className="clouds">
        <div className="cloud cloud1"></div>
        <div className="cloud cloud2"></div>
        <div className="cloud cloud3"></div>
      </div>

      <div className="cities-container">

        <SearchBar value={search} onChange={setSearch} />

        <div className="cities-grid">
          {cities.map(city => (
            <CityCard
              key={city.name}
              name={city.name}
              country={city.sys.country}
              temp={city.main.temp}
              description={city.weather[0].description}
              icon={city.weather[0].icon}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Cities