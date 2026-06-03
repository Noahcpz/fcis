'use client'
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faEnvelope,faHome,faCopyright } from '@fortawesome/free-solid-svg-icons'
export default function Footer (){
    return (
        <footer>
            <p>
                <FontAwesomeIcon icon={faPhone} />
                00 00 00 00 00

                <FontAwesomeIcon icon={faEnvelope} />
                mandoche@anoche.fr

                <FontAwesomeIcon icon={faHome} />
                8 rue de la branche cherbourg
            </p>

            <Link href="/mentions-legales"><p class="nav-principal">Mentions Légales</p></Link>
            <p>
                <FontAwesomeIcon icon={faCopyright} />{new Date().getFullYear()} FCIS varennes-sur-allier. Tous droits réservés
            </p>
        </footer>

    )
}