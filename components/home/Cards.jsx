import "../../styles/Home/Cards.css"

export default function Cards() {
    return (
        <section className="cards-prestations">
            <h2>Comment FCIS vous accompagne</h2>
            <div className="cards-conteneur">
                <div className="card">
                    <h4>Analyse de risques</h4>
                    <p>
                      Cartographie des risques SI selon ISO 27005 ou EBIOS RM.
                    </p>
                </div>
                <div className="card">
                    <h4>Rédaction de PSSI</h4>
                    <p>
                      Élaboration de la Politique de Sécurité des Système d'information
                    </p>
                </div>
                <div className="card">
                    <h4>Accompagnement ISO 27001</h4>   
                    <p>
                      Accompagnement complet à la certification : 
                      SMSI, audits internes, préparation audit 
                    </p>
                </div>
                <div className="card">
                    <h4>Évaluation CyberVadis</h4>
                    <p>
                      Préparation à l'évaluation CyberVadis, optimisation du score
                    </p>
                </div>
            </div>
        </section>
    )
}