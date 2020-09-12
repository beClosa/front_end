import React from "react";
import InstagramIcon from "../../images/icons/instagram.svg";
import TwitterIcon from "../../images/icons/twitter.svg";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__wrapper">
                <div className="footer__item">
                    <p className="footer__item-community">
                        Community Policy
                    </p>
                </div>
                <div className="footer__item">
                    <p  className="footer__item-referal">
                        Referral
                    </p>
                </div>
                <div className="footer__item">
                    <div>
                        <img src={InstagramIcon} alt="Instagram Icon" />
                    </div>
                    <div>
                        <p  className="footer__item-instagram">
                            Instagram
                        </p>
                    </div>
                </div>
                <div className="footer__item">
                    <div>
                        <img src={TwitterIcon} alt="Twitter Icon"/>
                    </div>
                    <div>
                        <p className="footer__item-twitter">
                            Twitter
                        </p>
                    </div>
                </div>
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