import '../css/Projects.scss'
import { useRef } from 'react';
import useOnScreen from './useOnScreen';
import CarouselProjects from './CarouselProjects';

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
        <div className="general-container">
            <div ref={projectsRef} id="projects-container">
                <h1 id="projects-heading">PROJECTS</h1>
                <CarouselProjects />
            </div>
        </div>
    );
}
  
export default Projects;