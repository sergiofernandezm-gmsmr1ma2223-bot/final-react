import axios from 'axios'

export const getWeather = async (city) => {
  //Obtener coordenadas, porque la API que uso no admite nombres de ciudades
  const geoRes = await axios.get(
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=es&format=json`
  )

  if (!geoRes.data.results?.length) {
    throw new Error('Ciudad no encontrada')
  }

  const { latitude, longitude, name, country } = geoRes.data.results[0]

  // 2. Obtener tiempo
  const weatherRes = await axios.get(
    'https://api.open-meteo.com/v1/forecast',
    {
      params: {
        latitude,
        longitude,
        current: 'temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m',
        timezone: 'auto'
      }
    }
  )

  const data = weatherRes.data.current
  const temp = Math.round(data.temperature_2m)
  const code = data.weather_code

  const icons = {
    0: '01d', 1: '02d', 2: '03d', 3: '04d',
    45: '50d', 51: '09d', 61: '10d', 63: '10d',
    80: '09d', 95: '11d'
  }

  return {
    name,
    sys: { country },
    main: {
      temp,
      feels_like: Math.round(data.apparent_temperature),
      humidity: data.relative_humidity_2m
    },
    weather: [{
      description: code === 0 ? 'cielo claro' : code < 4 ? 'nublado' : 'lluvia',
      icon: icons[code] || '01d'
    }],
    wind: { speed: Math.round(data.wind_speed_10m) }
  }
}