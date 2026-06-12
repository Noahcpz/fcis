import { getPrestationsDetailByPrestationId } from '@/server/PrestationsDetailDal'
import "../../../styles/prestations/prestations.css"
import Link from 'next/link'

export default async function FormerEtAccompagner() {
    const details = await getPrestationsDetailByPrestationId(3)
    const detail = details[0]
    return (
        <div className="prestation-detail">
            <h1 className="prestation-titre">{detail.titre}</h1>
            <h2 className="prestation-sous-titre">{detail.sous_titre}</h2>
            <p className="explication">{detail.explication}</p>
            <ul>
                <li className="detail">{detail.detail_1}</li>
                <li className="detail">{detail.detail_2}</li>
                <li className="detail">{detail.detail_3}</li>
                <li className="detail">{detail.detail_4}</li>
            </ul>
            <div className="separateur"></div>
            <p className="livrable-prix">Livrable : {detail.livrable}</p>
            <p className="livrable-prix">Prix : {detail.price} €</p>
            <Link href="/contact">
                <button className="bn-contact">prendre contact</button>
            </Link>
            <div className="nav-prestations">
                <Link href="/prestations-details/structurer-et-certifier">
                    <button className="bn-contact">← prestation précédente</button>
                </Link>
            </div>
        </div>
    )
}