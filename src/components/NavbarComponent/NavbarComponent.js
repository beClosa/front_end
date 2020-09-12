import React, {useState} from "react";
import "../../scss/components/_navbar.scss";
import "../../scss/pages/Home.scss";
import ClosaLogo from "../../images/icons/logo.svg";
import WhiteLine from "../../images/icons/white-line.svg";
import Arrow from "../../images/icons/arrow.svg";
const NavbarCompponent = () => {
    const [navlists, setNavLists] = useState(false);
    return (
       <React.Fragment>
           <nav className="navbar">
               <div className="navbar__images">
                   <img src={ClosaLogo} alt="Closa Logo"/>
               </div>
               <div className="navbar__hamburger" onClick={() => setNavLists(!navlists)}>
                   <img src={WhiteLine} alt="burger one" />
                   <img src={WhiteLine} alt="burger-two"/>
               </div>
                <HamburgerLists classValue="isDesktop"/>
           </nav>
            {
                navlists === true ?  <HamburgerLists classValue="isMobile"/> : false
            }
       </React.Fragment>
    )
}

const HamburgerLists = ({classValue}) => {
     return (
         <ul className={`navbar__lists ${classValue}`}>
             <li className="navbar__lists-item">
                 <button>About</button>
             </li>
             <li className="navbar__lists-item">
                 <button>Referral</button>
             </li>
             <li className="navbar__lists-item">
                 <button>Referral</button>
             </li>
             <li className="navbar__lists-item">
                 <button>
                     <img className="navbar__white-arrow" src={Arrow} alt="closa__arrow-scrolldown"/>
                     Join the waitlist
                 </button>
             </li>
         </ul>
     )
}

export default NavbarCompponent;
