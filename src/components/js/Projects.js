import { useRef } from 'react';
import useOnScreen from './useOnScreen';
import CarouselProjects from './CarouselProjects';
import '../scss/Projects.scss'

function Projects(props) {
    
    const projectsRef = useRef(null);
    const isProjectsOnScreen = useOnScreen(projectsRef);

    if (isProjectsOnScreen) {
        props.setProjectsShown('dot-2')
    }
    else {
        props.setProjectsShown('dot')
    }
    
    return (
        
        <div className="main-content-sub">
            <div className="content-container content-container-3">
                <div ref={projectsRef} className="projects-container">
                    <h1 className="projects-heading">PROJECTS</h1>
                    <CarouselProjects />
                </div>
            </div>
        </div>
    );
}
  
export default Projects;