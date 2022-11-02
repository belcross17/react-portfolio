import { useState } from 'react';
// import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Contact = () => {
    const [letterClass] =  useState('text-animate')
    
    return (
        <>
            <div className='container contact-page'>
                <div className='text-page'>
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']} 
                        idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in freelance  opportunities, especially ambitious or Frontend projects.
                        However, if you have any questions or possible challenges, please don't hesitate to contact me using 
                        the information below or send me your info plus a message and I will get back to you as soon as possible.
                    </p>
                    <br />
                    <ul>
                        <li>
                            Email: alfredochabes1@hotmail.com 
                        </li>
                        <li>
                            Phone Number: (786)-234-5421
                        </li>
                    </ul>

                    <div className='contact-form'>
                        <form>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder="Name" required />
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder="Email" required />
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" name="subject" required/>
                                </li>
                                <li>
                                    <textarea placeholder="Message" name="Message" required/>
                                </li>
                                <li>
                                    <input className='flat-button' type="submit" value="SEND"/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Brayan Arias
                    <br />
                    United States,
                    <br />
                    1901 South river Dr <br />
                    Miami <br />
                    <span>alfredochabes1@hotmail.com</span>

                </div>
                {/* <div className='map-wrap'>
                    <MapContainer center={[25.798, -80.13339]} zoom= {13}>
                        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                        <Marker position={[25.798, -80.13339]}>
                            <Popup>The Sunshine city</Popup>
                        </Marker>
                    </MapContainer>
                </div> */}
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact;