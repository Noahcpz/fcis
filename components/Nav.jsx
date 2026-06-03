import Link from "next/link"

export default function Nav() {
    return (
        <nav>
            <Link href="/a-propos">A propos</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/prestations">Prestations</Link>
            <Link href="/">Accueil</Link>
        </nav>
    )
}