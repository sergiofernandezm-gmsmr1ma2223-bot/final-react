import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-title">Clima Mundial</h1>

        <div className="navbar-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/cities">Ciudades</NavLink>
          <NavLink to="/profile">Perfil</NavLink>
          <NavLink to="/contact">Contacto</NavLink>
          <NavLink to="/about">About Us</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar