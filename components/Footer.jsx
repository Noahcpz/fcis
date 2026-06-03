import Link from "next/link"
import"../styles/footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faEnvelope,faHome,faCopyright } from '@fortawesome/free-solid-svg-icons'
export default function Footer (){
    return (
        <footer>
            <p className="icone">
                <FontAwesomeIcon icon={faPhone} />
                00 00 00 00 00
            </p>

            <p className="icone">
                <FontAwesomeIcon icon={faEnvelope} />
                mandoche@anoche.fr
            </p>

            <p className="icone"> 
                <FontAwesomeIcon icon={faHome} />
                8 rue de la branche cherbourg
            </p>

            <Link href="/mentions-legales"><p className="nav-icone">Mentions Légales</p></Link>

            <p className="icone">
                <FontAwesomeIcon icon={faCopyright} />{new Date().getFullYear()} FCIS varennes-sur-allier. Tous droits réservés
            </p>

        </footer>

    )
}