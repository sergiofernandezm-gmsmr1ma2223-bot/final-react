import './Home.css'
import DefaultButton from '../../components/buttons/default-button/DefaultButton'

const Home = () => {
  return (
    <div className="home-fullscreen">
      <div className="home-hero">
        <h1 className="home-title">
          Clima Mundial
        </h1>
        <p className="home-subtitle">
          El tiempo real de las principales ciudades del planeta
        </p>
        <p className="home-subtitle2">
          Temperatura • Estado del cielo • Iconos oficiales 
        </p>

        <div className="home-button">
          <DefaultButton
            type="primary"
            text="Explorar ciudades"
            size="large"
            action={() => window.location.href = '/cities'}
          />
        </div>
      </div>

      <div className="clouds">
        <div className="cloud cloud1"></div>
        <div className="cloud cloud2"></div>
        <div className="cloud cloud3"></div>
      </div>
    </div>
  )
}

export default Home