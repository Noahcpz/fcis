import Link from "next/link"
import "../styles/footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faHome, faCopyright } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
    return (
        <footer>
            <div className="coordonnees">
                <h3>Coordonnees</h3>
                <p className="texte-icone">
                    <FontAwesomeIcon icon={faPhone} className="icone" />
                    00 00 00 00 00
                </p>
                <p className="texte-icone">
                    <FontAwesomeIcon icon={faEnvelope} className="icone" />
                    mandoche@anoche.fr
                </p>
                <p className="texte-icone">
                    <FontAwesomeIcon icon={faHome} className="icone" />
                    8 rue de la branche cherbourg
                </p>
            </div>
            <div className="legal">
                <h3>Legal</h3>
                <Link href="/mentions-legales">Mentions Légales</Link>
                <p className="texte-icone">
                    <FontAwesomeIcon icon={faCopyright} className="icone" />{new Date().getFullYear()} FCIS varennes-sur-allier. Tous droits réservés
                </p>
            </div>
        </footer>
    )
}