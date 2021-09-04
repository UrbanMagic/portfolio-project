import React from 'react';
import logo from "../logo2.png";
// REACT FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {
    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <a className="navbar-brand" href="#"><img className="logo2" src={logo} alt="logo..."/></a>
                
                <button className="navbar-toggler" 
                type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }}/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m1-auto">

                        
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span> 
                        </a>
                    </li>
                

                    <li className="nav-item">
                        <a className="nav-link" href="#">About Me</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#">Portfolio</a>
                    </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Contacts</a>
                        </li>





              </ul>
        
   
        
        </div>




      </nav> 


  

    )
}


export default Navbar;