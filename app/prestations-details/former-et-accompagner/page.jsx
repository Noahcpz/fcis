import { getPrestationsDetailByPrestationId } from '@/server/PrestationsDetailDal'
import "../../../styles/prestations/former-accompagner.css"

export default async function StructurerEtCertifier() {
    const details = await getPrestationsDetailByPrestationId(2)
    const detail = details[0]

    return (
        <div>
            <h1>{detail.titre}</h1>
            <h2>{detail.sous_titre}</h2>
            <p>{detail.explication}</p>
            <ul>
                <li>{detail.detail_1}</li>
                <li>{detail.detail_2}</li>
                <li>{detail.detail_3}</li>
                <li>{detail.detail_4}</li>
            </ul>
            <p>Livrable : {detail.livrable}</p>
            <p>Prix : {detail.price} €</p>
        </div>
    )
}