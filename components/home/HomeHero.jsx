import "../../styles/Home/HomeHero.css"
import Image from "next/image"

export default function HomeHero() {
    return (
        <section className="hero">
            <Image src="/img/background-image.avif" alt="" width={400} height={700} className="hero-img"/>
            <section className="spitch-intro">
                <h1>
                    Prenez le contrôle de votre exposition cyber
                </h1>

                <p>
                    parce qu'une bonne stratégie de sécurité se construit sur 
                    la connaissance de vos vrais risques,
                    nous vous accompagnons pas à pas -
                    de l'évaluation de votre exposition à la mise en place d'un pilotage GRC robuste
                </p>
            </section>
            <Image src="/img/background-image.avif" alt="" width={400} height={700} className="hero-img"/>
        </section>
    )
}