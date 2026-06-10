import { getPrestationsDetailByPrestationId } from '@/server/PrestationsDetailDal'
import "../../../styles/prestations/structurer-certifier.css"

export default async function FormerEtAccompagner() {
    const details = await getPrestationsDetailByPrestationId(3)
    const detail = details[0]

    return (
        <div>
            <h1>{detail.titre}</h1>
            <h2>{detail.sous_titre}</h2>
            <p>{detail.explication}</p>
            <ul>
                {[detail.detail_1, detail.detail_2, detail.detail_3, detail.detail_4]
                    .filter(Boolean)
                    .map((d, i) => <li key={i}>{d}</li>)
                }
            </ul>
            <p>Livrable : {detail.livrable}</p>
            <p>Prix : {detail.price} €</p>
        </div>
    )
}