import { React } from 'react'; 
import '../scss/Footer.scss'



function Footer() {
    
  
    return (
        <div className="footer-container">
            <div className="footer-copyright">
                <p>&copy; 2022 JMCorbette</p>                
            </div>
            <button className="scroll-top" class="fa fa-arrow-up" onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}></button>
        </div>
    );
}
  
export default Footer;