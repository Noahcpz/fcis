import { getPrestationsDetailByPrestationId } from '@/server/PrestationsDetailDal'
import "../../../styles/prestations/prestations.css"

export default async function EvaluerEtCartographier() {
    const details = await getPrestationsDetailByPrestationId(1)
    const detail = details[0]

    return (
        <div className="prestation-detail">
            <h1>{detail.titre}</h1>
            <h2>{detail.sous_titre}</h2>
            <p className='explication'>{detail.explication}</p>
            
            <ul>
                <li className='detail'>{detail.detail_1}</li>
                <li className='detail'>{detail.detail_2}</li>
                <li className='detail'>{detail.detail_3}</li>
                <li className='detail'>{detail.detail_4}</li>
            </ul>

            <div className="separateur"></div>
            <p className='livrable-prix'>Livrable : {detail.livrable}</p>
            <p className='livrable-prix'>Prix : {detail.price} €</p>
        </div>
    )
}