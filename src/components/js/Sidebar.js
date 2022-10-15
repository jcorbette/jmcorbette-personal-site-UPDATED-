import { React } from 'react';
import '../scss/Sidebar.scss';
import profilepicture from '../images/profile-picture.jpeg'


function Sidebar() {
    

    return (        

        
        <div className="sidebar-container-sub">
            
            <div className="profile-img-div">
                <img className="profile-img-pic" src={profilepicture} alt="Juanita's Profile Pic"></img>
            </div>
            <div className="sidebar-description">
                <p className="sidebar-description-name">JUANITA CORBETTE</p>
                <p className="sidebar-description-intro">Experienced individual with over 3 years of experience and several certifications in the Technology sector, with the ability to provide technical support, troubleshooting, web development, cyber security, quality assurance and cloud computing</p>
            </div>
            <div className="links">
                <a href="https://www.linkedin.com/in/juanita-corbette/" target="blank" className="fa fa-linkedin"></a>
                <a href="https://github.com/jcorbette/" target="blank" className="fa fa-github"></a>
                <a href="mailto: juanita@jmcorbette.com" className="fa fa-envelope"></a>
            </div>
            <div className="copyright">
                <p>&copy; 2022 JMCorbette</p>                
            </div>
            
        </div>       
        
    );
}

  
export default Sidebar;