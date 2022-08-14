import '../css/Sidebar.scss'

function Scrollbar() {
    
    // function myFunction() {
    //     alert('Button was clicked!');
    // }
    
    // function submitForm(event){
    //     event.preventDefault();
    // }
    
     
    return (
        
        <div id="sidebar">
            <div id="profile-div">
                <img id="profile-pic" src="https://media-exp2.licdn.com/dms/image/C4E03AQHz2TBKyki5Rw/profile-displayphoto-shrink_200_200/0/1632869997229?e=1663804800&v=beta&t=YYrIrmHdZrr2BCUS1UO7SAzpBwNbeyPQ-k8fdGhLcyA" alt="Juanita's Profile Pic"></img>
            </div>
            <div id="profile-description-div">
                <p className="p-description">JUANITA CORBETTE</p>
                <p className="p-description">Experienced individual with over 3 years of experience and several certifications in the Technology sector, with the ability to provide technical support, troubleshooting, web development, cyber security, quality assurance and cloud computing</p>
            </div>
            <div id="links">
                <a href="https://www.linkedin.com/in/juanita-corbette/" target="blank" className="fa fa-linkedin"></a>
                <a href="https://github.com/jcorbette/" target="blank" className="fa fa-github"></a>
                <a href="mailto: juanita@jmcorbette.com" className="fa fa-envelope"></a>
            </div>
            <div id="copyright">
                <p>&copy; 2022 JMCorbette</p>                
            </div>
                       

        </div>
    );
} 

  
export default Scrollbar;