import { useState, useEffect } from 'react'
import axios from 'axios'
import './Profile.css'

const Profile = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get('https://randomuser.me/api/?nat=es,us,gb,fr,de,it')
        setUser(res.data.results[0])
      } catch (err) {
        console.log('Error cargando perfil aleatorio')
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [])

  if (loading) {
    return <div className="profile-loading">Cargando perfil...</div>
  }

  if (!user) {
    return <div className="profile-error">No se pudo cargar el perfil</div>
  }

  return (
    <div className="profile-fullscreen">
      <div className="clouds">
        <div className="cloud cloud1"></div>
        <div className="cloud cloud2"></div>
        <div className="cloud cloud3"></div>
      </div>

      <div className="profile-container">
        <h1 className="profile-title">Mi Perfil</h1>

        <div className="profile-card">
          <img 
            src={user.picture.large} 
            alt={`${user.name.first} ${user.name.last}`}
            className="profile-avatar"
          />

          <h2 className="profile-name">
            {user.name.first} {user.name.last}
          </h2>

          <p className="profile-role">Usuario de Clima Mundial</p>

          <div className="profile-info">
            <div className="info-item">
              <span className="label">Edad</span>
              <span className="value">{user.dob.age} años</span>
            </div>
            <div className="info-item">
              <span className="label">País</span>
              <span className="value">{user.location.country}</span>
            </div>
            <div className="info-item">
              <span className="label">Ciudad</span>
              <span className="value">{user.location.city}</span>
            </div>
            <div className="info-item">
              <span className="label">Email</span>
              <span className="value">{user.email}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile