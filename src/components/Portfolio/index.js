import React, { useState } from "react";
import Loader from "react-loaders";
import runBuddy from '../../assets/images/run-buddy.png'
import tourismApp from '../../assets/images/Screenshot (36).png'
import foodLovers from '../../assets/images/Screenshot (4).png'
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";


const Portfolio = () => { 
    const [letterClass] = useState('text-animate');
    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <div className="portfolio-container">
                <div className="images-container">
                    <a href="https://belcross17.github.io/run-buddy/">
                    <img className="image-box" src={runBuddy} alt="run-buddy website" />
                    </a>
                </div>
                <div className="images-container">
                    <a href="https://belcross17.github.io/Tourism-App/">
                    <img className="image-box" src={tourismApp} alt="Tourism app" />
                    </a>
                </div>
                <div className="images-container">
                    <a href="https://food-lovers-project-2.herokuapp.com/">
                    <img className="image-box" src={foodLovers} alt="Food-Lovers-website-blog" />
                    </a>
                </div>
                <div className="images-container">
                    <a href="https://belcross17.github.io/run-buddy/">
                    <img className="image-box" src={runBuddy} alt="run-buddy website" />
                    </a>
                </div>
                <div className="images-container">
                    <a href="https://belcross17.github.io/run-buddy/">
                    <img className="image-box" src={runBuddy} alt="run-buddy website" />
                    </a>
                </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;