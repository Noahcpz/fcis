import Link from "next/link"

export default function Nav() {
    return (
        <nav>
            <Link href="/"><p class="nav-principal">Accueil</p></Link>
            <Link href="/a-propos"><p class="nav-principal">A propos</p></Link>
            <Link href="/contact"><p class="nav-principal">Contact</p></Link>
            <Link href="/prestations"><p class="nav-principal">Prestations</p></Link>

        </nav>
    )
}