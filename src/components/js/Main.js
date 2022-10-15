import { useEffect, useState, React } from 'react';
import Intro from './Intro';
import Skills from './Skills';
import Projects from './Projects';
import Scrollbar from './Scrollbar';
import '../scss/Main.scss';


function Main() {
    
    function setIntroShown(i_yes) {
        setIntroVisible(i_yes)
    }
    
    function setSkillsShown(s_yes) {
        setSkillsVisible(s_yes)
    }
    
    function setProjectsShown(p_yes) {
        setProjectsVisible(p_yes)
    }    
       
    const [introVisible, setIntroVisible] = useState('')
    const [skillsVisible, setSkillsVisible] = useState('')
    const [projectsVisible, setProjectsVisible] = useState('')
    
    useEffect(() => {
        setIntroVisible(introVisible);
        setSkillsVisible(skillsVisible);
        setProjectsVisible(projectsVisible);
    }, []);  
    

    return (        

        

        <div className="main-container-sub">
            

            <div className="main-content">
            
                <Intro setIntroShown={setIntroShown}/>
                <Skills setSkillsShown={setSkillsShown}/>
                <Projects setProjectsShown={setProjectsShown}/>
            
            </div>
            
            <Scrollbar introVisible={introVisible} skillsVisible={skillsVisible} projectsVisible={projectsVisible}/>
            
        </div>       
        
    );
}

  
export default Main;