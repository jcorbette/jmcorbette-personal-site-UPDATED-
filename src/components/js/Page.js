import { React } from 'react';
import Sidebar from './Sidebar';
import Main from './Main';
import Footer from './Footer';
import '../scss/Page.scss';


function Page() {
    

    return (        

        
        <div className="page-container">
            
            <div className="page-container-sub">
                
                <div className="sidebar-container">                
                    <Sidebar />           
                </div>  
                
                <div className="main-container">               
                    <Main />                    
                </div> 
            
                <div className="footer-container">
                    <Footer />
                </div> 
                    
                
            </div>           
            
        </div>       
        
    );
}

  
export default Page;