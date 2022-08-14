import { useRef } from 'react';
import '../css/Skills.scss'
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
        <div className="general-container">
            <div ref={skillsRef}id="skills-container">
                <h1 id="skills-heading">SKILLS</h1>
                <div className="skills-list">
                    <div>
                        <ul id="skills-col1">
                            <li>Amazon Web Services</li>
                            <li>Bootstrap</li>
                            <li>CSS</li>
                            <li>Django</li>
                            <li>General IT Support</li>
                            <li>HTML</li>
                        </ul>
                    </div>
                    <div id="skills-col2">
                        <ul >
                            <li>JavaScript</li>
                            <li>Microsoft Azure</li>
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