import React from "react";
import InstagramIcon from "../../images/icons/instagram.svg";
import TwitterIcon from "../../images/icons/twitter.svg";
import { Link } from "react-scroll";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__wrapper">
                <a href="https://www.notion.so/Community-Policy-141b72e0476a4beab46bded6672fd536" className="footer__item" target="_blank" rel="noreferrer noopener">
                    <p className="footer__item-community">
                        Community Policy
                    </p>
                </a>
                <Link to="section__five" className="footer__item" smooth offset={-65}>
                    <p  className="footer__item-referal">
                        Referral
                    </p>
                </Link>
                <a href="https://instagram.com/beclosa" className="footer__item" target="_blank" rel="noreferrer noopener">
                    <div>
                        <img src={InstagramIcon} alt="Instagram Icon" />
                    </div>
                    <div>
                        <p  className="footer__item-instagram">
                            Instagram
                        </p>
                    </div>
                </a>
                <a href="https://twitter.com/beclosa" className="footer__item" target="_blank" rel="noreferrer noopener">
                    <div>
                        <img src={TwitterIcon} alt="Twitter Icon"/>
                    </div>
                    <div>
                        <p className="footer__item-twitter">
                            Twitter
                        </p>
                    </div>
                </a>
            </div>
            <div className="footer__creator">
                <p>
                    Made with ❤ by our members.️
                </p>
            </div>
        </div>
    )
}

export default Footer;