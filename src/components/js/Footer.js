import '../css/Footer.scss'



function Footer() {
    
  
    return (
        <div id="footer-container">
            <div id="footer-copyright">
                <p>&copy; 2022 JMCorbette</p>                
            </div>
            <button id="scroll-top" class="fa fa-arrow-up" onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}></button>
        </div>
    );
}
  
export default Footer;