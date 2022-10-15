import { useRef } from 'react';
import '../scss/Skills.scss'
import useOnScreen from './useOnScreen.js';

function Skills(props) {
    
    const skillsRef = useRef(null);
    const isSkillsOnScreen = useOnScreen(skillsRef);
    
    if (isSkillsOnScreen) {
        props.setSkillsShown('dot-2')
    }
    else {
        props.setSkillsShown('dot')
    }
    
    return (
        
        <div className="main-content-sub">
            <div className="content-container">
                <div ref={skillsRef} className="skills-container">
                    <h1>SKILLS</h1>
                    <div className="skills-container-sub">
                        <ul>
                            <li>Amazon Web Services</li>
                            <li>Bootstrap</li>
                            <li>CSS</li>
                            <li>Cybersecurity</li>
                            <li>Django</li>
                            <li>General IT Support</li>
                            <li>HTML</li>
                            <li>JavaScript</li>
                            <li>Jira</li>
                            <li>Microsoft Azure</li>
                            <li>Node.js</li>
                            <li>Python</li>
                            <li>React</li>
                            <li>SQL</li>
                        </ul>                                    
                    </div>
                    
        
                </div>
            </div>
        </div>
    );
}
  
export default Skills;