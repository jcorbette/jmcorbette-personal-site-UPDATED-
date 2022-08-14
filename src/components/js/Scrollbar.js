import '../css/Scrollbar.scss';



function Scrollbar(props) {
    
    
     
    return (
        <div id="scrollbar">
            
            <span className={`dot ${props.introVisible}`}></span>
            <span className={`dot ${props.skillsVisible}`}></span>
            <span className={`dot ${props.projectsVisible}`}></span>
        </div>
    );
}
  
export default Scrollbar