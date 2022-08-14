import Carousel from 'react-bootstrap/Carousel';
import projecticecreampoll from '../static/img/projecticecreampoll.jpg'
import projectawsscripts from '../static/img/projectawsscripts.png'
import projecthangman from '../static/img/projecthangman.jpeg'
import projectpersonal from '../static/img/projectpersonal.png'
import personalsitenew from '../static/img/personalsitenew.jpg'

function CarouselProjects() {
  return (
    <Carousel>
        <Carousel.Item>
            <img
                className="d-block project-image"
                src={projecticecreampoll}
                alt="First slide"
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
                alt="First slide"
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
                alt="First slide"
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
                alt="First slide"
            />
            <Carousel.Caption className="project-caption">
                <p>Personal Website - Old Version</p>
                <a className="project-caption-link" href="https://github.com/jcorbette/jmcorbette-personal-site" target="blank">See Project</a>
            </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item >
            <img
                className="d-block project-image"
                src={personalsitenew}
                alt="First slide"
            />
            <Carousel.Caption className="project-caption">
                <p>Personal Website - Currently Viewing</p>
                <a className="project-caption-link" href="https://github.com/jcorbette/jmcorbette-personal-site-UPDATED-" target="blank">See Code</a>
            </Carousel.Caption>
        </Carousel.Item>
      
    
    </Carousel>
  );
}

export default CarouselProjects;