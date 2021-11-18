import React, { useContext } from 'react';
import { ModeContext } from '../../context/modeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faFacebook, faInstagram, faTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons';
import "../../styles/footer.css"

function Footer() {
    const { mode } = useContext(ModeContext);

    return (
        <footer className={mode ? "footer_container night_mode" : "footer_container day_mode"}>
            <div className={mode ? "footer_subcontainer night_mode" : "footer_subcontainer day_mode"}>
                <p className="footer_texto">© 2021 — GIFOS Project</p>
                <section className="iconos_footer">
                    <a href="https://www.spotify.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faSpotify}/></a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram}/></a>
                    <a href="https://www.twitter.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter}/></a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook}/></a>
                    <a href="https://web.telegram.org/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTelegram}/></a>
                </section>
            </div>
        </footer>
    )
};

export default Footer;
