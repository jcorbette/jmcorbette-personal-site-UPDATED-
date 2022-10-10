import Carousel from 'react-bootstrap/Carousel';
import projecticecreampoll from '../images/projecticecreampoll.jpg'
import projectawsscripts from '../images/projectawsscripts.png'
import projecthangman from '../images/projecthangman.jpeg'
import projectpersonal from '../images/projectpersonal.png'
import personalsitenew from '../images/personalsitenew.jpg'
import jmarketers from '../images/jmarketers.jpeg'

function CarouselProjects() {
  return (
    <Carousel>
        <Carousel.Item>
            <img
                className="d-block project-image"
                src={projecticecreampoll}
                alt="Ice-cream Poll slide"
            />
            <Carousel.Caption className="project-caption">
                <p>Ice-Cream Poll</p>
                <a className="project-caption-link" href="https://github.com/jcorbette/ice-cream-poll" target="blank">See Project</a>
            </Carousel.Caption>
        </Carousel.Item>          

        <Carousel.Item>
            <img
                className="d-block project-image"
                src={projectawsscripts}
                alt="AWS Scripts slide"
            />
            <Carousel.Caption className="project-caption">
                <p>AWS Scripts</p>
                <a className="project-caption-link" href="https://github.com/jcorbette/AWS-scripts" target="blank">See Project</a>
            </Carousel.Caption>
        </Carousel.Item>        
        
        <Carousel.Item >
            <img
                className="d-block project-image"
                src={projecthangman}
                alt="Hangman Project slide"
            />
            <Carousel.Caption className="project-caption">
                <p>Hangman Game</p>
                <a className="project-caption-link" href="https://github.com/jcorbette/hangman-git" target="blank">See Project</a>
            </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item >
            <img
                className="d-block project-image"
                src={projectpersonal}
                alt="Old Personal Site slide"
            />
            <Carousel.Caption className="project-caption">
                <p>Personal Site - Old Version</p>
                <a className="project-caption-link" href="https://github.com/jcorbette/jmcorbette-personal-site" target="blank">See Project</a>
            </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item >
            <img
                className="d-block project-image"
                src={personalsitenew}
                alt="New Personal Site slide"
            />
            <Carousel.Caption className="project-caption">
                <p>Personal Site - Viewing</p>
                <a className="project-caption-link" href="https://github.com/jcorbette/jmcorbette-personal-site-UPDATED-" target="blank">See Code</a>
            </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item >
            <img
                className="d-block project-image"
                src={jmarketers}
                alt="Marketing Website"
            />
            <Carousel.Caption className="project-caption">
                <p>Marketing Website Project</p>
                <a className="project-caption-link" href="https://github.com/jcorbette/jmarketers" target="blank">See Project</a>
            </Carousel.Caption>
        </Carousel.Item>
      
    
    </Carousel>
  );
}

export default CarouselProjects;