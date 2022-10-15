import '../scss/Scrollbar.scss';



function Scrollbar(props) {
    
   
     
    return (
        
        
        <div className="scrollbar">
            
            <div className="scrollbar-sub">
                
                <span className={`dot ${props.introVisible}`}></span>
                <span className={`dot ${props.skillsVisible}`}></span>
                <span className={`dot ${props.projectsVisible}`}></span>
              
            </div>
        </div>
    );
}
  
export default Scrollbar