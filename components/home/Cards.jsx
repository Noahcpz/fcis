import "../../styles/Home/Cards.css"

export default function Cards() {
    return (
        <section className="cards-prestations">
            <h2>Comment FCIS vous accompagne</h2>
            <div className="cards-conteneur">
                <div className="card">
                    <h3>Evaluer et Cartographier</h3>
                    <h4>
                      Obtenez une vision claire <br />
                      de votre exposition aux risques
                    </h4>
                    <ul>
                        <li>
                            Analyse de risques
                        </li>
                        <li>
                            Gap analysis ISO 27001 & NIS2
                        </li>
                        <li>
                            Audit organisationnel SSI
                        </li>
                        <li>
                            Feuille de route priorisée
                        </li>
                    </ul>
                    <button>
                        en savoir plus sur cette prestation
                    </button>
                </div>
                <div className="card">
                    <h3>Structurer et Certifier</h3>
                    <h4>
                      Construisez un cadre de sécurité solide et reconnu
                    </h4>
                    <ul>
                        <li>
                            Rédaction de PSSI
                        </li>
                        <li>
                            PCA/PRA avec BIA
                        </li>
                        <li>
                            Acompagnement ISO 27001
                        </li>
                        <li>
                            Préparation CyberVadis
                        </li>
                    </ul>
                    <button>
                        en savoir plus sur cette prestation
                    </button>
                </div>
                <div className="card">
                    <h3>Former et accompagner</h3>   
                    <h4>
                      Engagez vos équipes et ancrez la culture
                    </h4>
                    <ul>
                        <li>
                            Sensibilisation tous profils
                        </li>
                        <li>
                            Supports,quiz et attestations
                        </li>
                        <li>
                            Mission de conseil sur mesure
                        </li>
                    </ul>
                    <button>
                        en savoir plus sur cette prestation
                    </button>
                </div>
            </div>
        </section>
    )
}