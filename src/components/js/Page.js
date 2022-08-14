import { useState, useEffect, useRef, React } from 'react';
import '../css/Page.scss';
import Intro from './Intro';
import Skills from './Skills';
import Projects from './Projects';
import Sidebar from './Sidebar';
import Scrollbar from './Scrollbar';
import Footer from './Footer';


function Page() {
    
   
    const mainRef = useRef(null);    
    
    useEffect(() => {
        if(mainRef.current) mainRef.current.focus();; 
    }, [mainRef]);  
    
    function setIntroShown(i_yes) {
        setIntroVisible(i_yes)
    }
    
    function setSkillsShown(s_yes) {
        setSkillsVisible(s_yes)
    }
    
    function setProjectsShown(i_yes) {
        setProjectsVisible(i_yes)
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
        

        
        <div id="page-container">
            <div className="sidebar-container">
                <Sidebar />
            </div> 
            <div className="scrollbar-container">
                <Scrollbar introVisible={introVisible} skillsVisible={skillsVisible} projectsVisible={projectsVisible}/>
            </div>
            <div id="main-container" ref={mainRef} tabIndex="-1">
                <Intro setIntroShown={setIntroShown}/>
                
                <Skills setSkillsShown={setSkillsShown} />

                <Projects setProjectsShown={setProjectsShown}/>
                
                <Footer />
                
            </div>   
        </div>
        

        
        
    );
}

  
export default Page;