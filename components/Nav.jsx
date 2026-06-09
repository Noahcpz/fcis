import Link from "next/link"
import "../styles/nav.css"
export default function Nav() {
    return (
        <nav>
            
            <Link href="/" className="nav-principal">Accueil</Link>

            <Link href="/contact" className="nav-principal">Contact</Link>
            
            <Link href="/a-propos" className="nav-principal-marge">A propos</Link>
            
        </nav>
    )
}