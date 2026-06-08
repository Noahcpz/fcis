import Link from "next/link"
import"../styles/footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faEnvelope,faHome,faCopyright } from '@fortawesome/free-solid-svg-icons'

export default function Footer (){
    return (
        <footer>
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

            <Link href="/mentions-legales" className="nav-icone">Mentions Légales</Link>

            <p className="texte-icone">
                <FontAwesomeIcon icon={faCopyright} className="icone" />{new Date().getFullYear()} FCIS varennes-sur-allier. Tous droits réservés
            </p>

        </footer>

    )
}