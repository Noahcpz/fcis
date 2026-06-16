import "../../styles/Home/Cards.css"
import { getAllPrestations } from '@/server/PrestationsDal'
import Link from "next/link"

export default async function Cards() {
    const prestations = await getAllPrestations()
    const slugs = {
        7: 'structurer-et-certifier',
        8: 'evaluer-et-cartographier',
        9: 'former-et-accompagner'
    }   
    return (
        <section className="cards-prestations">
            <h2>Comment FCIS vous accompagne</h2>
            <div className="cards-conteneur">
                {prestations.map((p) => (
                    <div className="card" key={p.id}>
                        <h3>{p.titre}</h3>
                        <h4>{p.sous_titre}</h4>
                        <ul>
                            {[p.detail_1, p.detail_2, p.detail_3, p.detail_4]
                                .filter(Boolean)
                                .map((detail, i) => (
                                    <li key={i}>{detail}</li>
                                ))
                            }
                        </ul>
                        <Link href={`/prestations-details/${slugs[p.id]}`}>
                            <button>
                                en savoir plus sur cette prestation
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
        
    )
}