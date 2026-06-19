"use client"
import Link from "next/link"
import "../styles/nav.css"
import { useState } from "react"

export default function Nav() {
    const [open, setOpen] = useState(false)

    const handleKeyDown = (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            setOpen(!open)
        }
        if (e.key === "Escape") {
            setOpen(false)
        }
    }

    return (
        <nav>
            <Link href="/" className="nav-principal">Accueil</Link>
            <Link href="/contact" className="nav-principal">Contact</Link>
            
            <div className="nav-liste">
                <span 
                    className="nav-principal" 
                    onClick={() => setOpen(!open)} 
                    onKeyDown={handleKeyDown}
                    tabIndex={0}
                    role="button"
                    aria-expanded={open}
                    aria-haspopup="true"
                    style={{cursor: "pointer"}}
                >
                    Prestations
                </span>
                {open && (
                    <ul className="liste-menu">
                        <li>
                            <Link href="/prestations-details/evaluer-et-cartographier" className="nav-principal" onClick={() => setOpen(false)}>
                                Évaluer et Cartographier
                            </Link>
                        </li>
                        <li>
                            <Link href="/prestations-details/structurer-et-certifier" className="nav-principal" onClick={() => setOpen(false)}>
                                Structurer et Certifier
                            </Link>
                        </li>
                        <li>
                            <Link href="/prestations-details/former-et-accompagner" className="nav-principal" onClick={() => setOpen(false)}>
                                Former et Accompagner
                            </Link>
                        </li>
                    </ul>
                )}
            </div>
            <Link href="/a-propos" className="nav-principal-marge">A propos</Link>
        </nav>
    )
}