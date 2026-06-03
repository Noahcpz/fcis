import Link from "next/link"
import "../styles/nav.css"
export default function Nav() {
    return (
        <nav>

            <Link href="/" className="nav-principal">Accueil</Link>

            <Link href="/prestations-catalogues" className="nav-principal">Prestations-catalogue</Link>

            <Link href="/prestations-details" className="nav-principal">Prestations-details</Link>

            <Link href="/contact" className="nav-principal">Contact</Link>
            
            <Link href="/a-propos" className="nav-principal">A propos</Link>

        </nav>
    )
}