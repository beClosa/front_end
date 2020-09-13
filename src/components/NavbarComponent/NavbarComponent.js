import React, {useState} from "react";
import "../../scss/components/_navbar.scss";
import "../../scss/pages/Home.scss";
import ClosaLogo from "../../images/icons/logo.svg";
import WhiteLine from "../../images/icons/white-line.svg";
import Arrow from "../../images/icons/arrow.svg";
import { Link } from "react-scroll";
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
                navlists === true ?  <HamburgerLists classValue="isMobile" onClickRef={() => setNavLists(!navlists)}/> : false
            }
       </React.Fragment>
    )
}

const HamburgerLists = ({classValue, onClickRef}) => {
     return (
         <ul className={`navbar__lists ${classValue}`}>
             <li className="navbar__lists-item">
                 <button>About</button>
             </li>
             <li className="navbar__lists-item">
                 <button>Early member</button>
             </li>
             <li className="navbar__lists-item">
                <Link to="section__five" className="footer__item" smooth offset={-20}>
                    <button onClick={onClickRef} >Referral</button>
                </Link>
             </li>
             <li className="navbar__lists-item">
                <a href="https://veylectra.typeform.com/to/torkcFdg">
                    <button>
                        <img className="navbar__white-arrow" src={Arrow} alt="closa__arrow-scrolldown"/>
                        Join the waitlist
                    </button>
                </a>
             </li>
         </ul>
     )
}

export default NavbarCompponent;
