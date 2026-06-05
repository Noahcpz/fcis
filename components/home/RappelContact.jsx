import "../../styles/Home/RappelContact.css"
import Link from "next/link"

export default function RappelContact(){
    return(
        <section className="rappel">
            <h2>Construisons ensemble votre sécurité</h2>
            <p>Chaque jour sans stratégie Cyber est un risque en plus</p>
            <h3>Prenez une longueur d'avance — Un premier échange, sans engagement pour poser les bases :</h3>
            <div className="prestation-contact">
                <Link href="/contact">
                    <button className="contact-primaire">Contactez-nous</button>
                </Link>
                <Link href="/prestations-catalogues">
                    <button className="prestation-secondaire">Voir nos prestations</button>
                </Link>
            </div>
        </section>
    )
}