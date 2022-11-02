import { Link, NavLink } from 'react-router-dom'
import LogoB from '../../assets/images/logo-b.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './index.scss'
import { useState } from 'react'

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoB} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="Brayan Arias" />
        </Link>
        <nav className={showNav ? 'mobile-show' : ''}>
            <NavLink exact="true" activeclassname="active" className="home-link" onClick={() => setShowNav(false)} to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" onClick={() => setShowNav(false)} to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" onClick={() => setShowNav(false)} to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="portfolio-link" onClick={() => setShowNav(false)} to="/portfolio">
                <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
            </NavLink>
            <FontAwesomeIcon 
                onClick={() => setShowNav(false)}
                icon={faClose}
                color="#ffd700"
                size="3x"
                className='close-icon' />
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/brayan-arias-9b338b152/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/belcross17'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
        </ul>
        <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />
    </div>
    )
}

export default Sidebar;