import "../../styles/Home/Spitch.css"
import Image from "next/image"
export default function Spitch() {
    return (
    <section className="spitch-fcis">
        <h2>
            FCIS-Cybersécurité & GRC pour PME
        </h2>
        <p>
            Consultant indépendant spécialisé en gouvernance,
            risques et conformité, j'accompagne les PME et grandes entreprises
            dans la construction d'une stratégie cyber solide, pragmatique et alignée 
            sur leurs enjeux métier.
            Pas de solution générique une approche sur mesure,
            avec un interlocuteur unique.
        </p>

        <h3 className="titre-reassurance">
            Référentiels et normes maîtrisées
        </h3>
        
        <div className="reassurance-certifs-conteneur">
            
            <div className="reassurance-certifs">
                <Image src="/img/cybervadis.png" alt="CyberVadis" width={200} height={150}/>
                <h4 className="nom-spitch">CyberVadis</h4>
            </div>

          <div className="reassurance-certifs">
            <Image src="/img/iso-27001.png" alt="ISO 27001" width={150} height={100}/>
            <h4 className="nom-spitch">ISO 27001</h4>
          </div>

          <div className="reassurance-certifs-27005">
                <Image src="/img/iso-27005.png" alt="iso 27005" width={150} height={100}/>
                <h4 className="nom-spitch">ISO 27005</h4>
          </div>

          <div className="reassurance-certifs">
                <Image src="/img/nis2.webp" alt="NIS2" width={150} height={100}/>
                <h4 className="nom-spitch">NIS2</h4>
          </div>

          <div className="reassurance-certifs">
                <Image src="/img/ebios-rm.png" alt="EBIOS RM" width={200} height={150}/>
                <h4 className="nom-spitch">EBIOS RM</h4>
          </div>

        </div>
    </section>
    )
}