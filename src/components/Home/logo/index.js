import './index.scss';
import { useRef } from 'react'
import LogoB from '../../../assets/images/self.JPG'
// import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';
// import gsap from 'gsap-trial';


const Logo = () => {
    const bgRef = useRef()
    const solidLogoRef = useRef()

    // useEffect(() => {
    //     // gsap.registerPlugin(DrawSVGPlugin)

    // //     gsap
    // //     .timeline()
    //     .to(bgRef.current, {
    //         duration: 1,
    //         opacity: 1,
    //     })
    //     gsap.fromTo(
    //         solidLogoRef.current,
    //         {
    //             opacity: 0,
    //         },
    //         {
    //             opacity: 1,
    //             delay: 4,
    //             duration: 4,
    //         }
    //     )
    // }, [])

    return (
        <div className='logo-container' ref={bgRef}>
            <img ref={solidLogoRef} className='solid-logo' src={LogoB} alt="Barias" />
            <svg
                width="559pt"
                height="897pt"
                version="1.0"
                viewBox="0 0 559 897"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g
                    className="svg-container"
                    transform="translate(0 457) scale(.1 -.1)"
                    fill="none"
                >
                </g>
            </svg>
        </div>
    )
}

export default Logo