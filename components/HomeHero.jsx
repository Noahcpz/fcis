import Link from "next/link"
import "../styles/HomeHero.css"
export default function HomeHero() {
    return (
        <section className="hero">
            <section className="spitch-intro">
                <h1>Prenez le controle de votre exposition cyber</h1>
                <p>
                    parce qu'une bonne stratégie de sécurité se construit sur 
                    la connaissance de vos vrais risques,<br />
                    nous vous accompagnons pas à pas -<br />
                    de l'évaluation de votre exposition à la mise en place d'un pilotage GRC robuste
                </p>
            </section>
            <Link href="/contact">
                <button>Contactez-nous</button>
            </Link>
            
        </section>
    )
}