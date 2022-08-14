import '../css/Intro.scss'
import { useRef } from 'react';
import useOnScreen from './useOnScreen';

function Intro(props) {
    
    const introRef = useRef(null);
    const isIntroOnScreen = useOnScreen(introRef);

    if (isIntroOnScreen) {
        props.setIntroShown('dot-2')
    }
    else {
        props.setIntroShown('dot')
    }
  
    return (
        <div className="general-container">
            <div ref={introRef} id="intro-container">
                <h1 id="intro-title">WHO AM I?</h1>
                <p className="p-intro">I am a professional with over 3 years of experience and several certifications in the Technology sector, with the ability to provide technical support, troubleshooting, web development, cyber security, quality assurance and cloud computing.</p>
                <p className="p-intro">I also bring to the table excellent customer service skills, the ability to work with in a diverse collaborative environment, honesty and innovative solutions.</p>
                <p className="p-intro">Current Location: Toronto, Ontario</p>
            </div>
        </div>
    );
}
  
export default Intro;