import { useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import LogoTitle  from '../../assets/images/logo-b.png'
import Logo from './logo'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Home = () => {
    const [letterClass, ] =  useState('text-animate')
    const nameArray = ['P', 'o', 'r', 't', 'f','o', 'l', 'i', 'o']
    const jobArray = ['F','u', 'l', 'l', ' ', 'S','t', 'a', 'c', 'k', ' ', 'W', 'e', 'b', ' ','D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r',]

    return(
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1> 
                <span className={letterClass}>W</span>
                <span className={`${letterClass} _12`}>e</span>
                <span className={`${letterClass} _13`}>l</span>
                <span className={`${letterClass} _14`}>c</span>
                <span className={`${letterClass} _15`}>o</span>
                <span className={`${letterClass} _16`}>m</span>
                <span className={`${letterClass} _17`}>e</span>
                <span className={`${letterClass} _18`}> </span>
                <span className={`${letterClass} _19`}>T</span>
                <span className={`${letterClass} _20`}>o</span>
                    <br />
                <img src={LogoTitle} alt="Developer name and logo" />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22} />
                </h1>
                <h2> Future Frontend Developer / Registered Nurse / Anime Lover</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            <Logo />
        </div>
        <Loader type='pacman' />
    </>
    );
}

export default Home;