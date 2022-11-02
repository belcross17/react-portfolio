import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'

const About = () => {
    const [letterClass] =  useState('text-animate')
    return (
        <>
        <div className='container about-page'>
            <div className='text-page'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} 
                        idx={15}
                    />
                </h1>
                <p>
                    My name is Brayan Arias, I was born in Girardot, Colombia, and when i was three months old I had to have a surgery done in my right eye. I moved to the capital no too long after with my family, where i lived for almost 14 years. Ever since I was a little kid, 
                    i had an interest in computers and their software, sadly I didn't have the means necessary to learn it on my own. My dad came to the United States when I was 8 years old, and worked really hard to get me and my family here. A few months after arriving to Miami, Fl, 
                    I restarted school where I joined the Adobe Photoshop Program, i Finished it in my 12 grade and acquired a certificate. During these high school years, I developed a hobbbies for multiple activites such as: Video Games, Anime, and working out.
                </p>
                <p>
                    In my college years, I decided to follow a career path that would eventually lead me to where I am now. Sadly, my passion for computer sciences started to become less important to me. Also, during these college year, I started dating my wife since we shared the same career path, 
                    not too long after we moved on to an actual univeristy where we started the nursing program. In the nursing program, I finally found my passion for studying on my own and to teach others when they needed the help. I became a tutor for the classes that I had passed with 
                    a grade of A- or more. Not too long after, I became the president to the National Nurses association in my University, I held this position until my last semester because I had to fully focus into studying for my board exam.
                </p>
                <p>
                    Now I've been a nurse for over 3 years, in which I've seen and dealt with multiple sudden changes and problems, I've saved lives and seen some others get lost, but I've come to realise that even after all this time, 
                    I still love Computer Sciences and more specific Software to which have brought me to complete the UM Coding Bootcamp.
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                <div className='face1'>
                    <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                </div>
                <div className='face2'>
                    <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                </div>
                <div className='face3'>
                    <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                </div>
                <div className='face4'>
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                </div>
                <div className='face5'>
                    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                </div>
                <div className='face6'>
                    <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                </div>
                </div>

            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About;