import "../../styles/Apropos/partie-principal.css"

export default function PartiePrincipal(){
    return (
        <section>
            <div className="bloc-passion">
                <p className="intro-texte">La passion</p>
                <p className="paragraphe-1">
                    Passionnée de cybersécurité depuis mes débuts,
                    j'ai fait de la gouvernance, du risque
                    et de la conformité mon domaine de
                    prédilection.
                    Ce qui me motive au quotidien : aider les organisations à construire
                    une sécurité solide, compréhensible et durable — pas seulement pour
                    cocher des cases, mais pour protéger ce qui compte vraiment.
                </p>
            </div>

            <div className="bloc-expertise">
                <p className="intro-texte">L'Expertise</p>
                <p className="paragraphe-2">
                    J'interviens sur l'ensemble du spectre GRC, avec
                    une approche à la fois rigoureuse et pragmatique :
                </p>
                <ul className="expertise-liste">
                    <li>
                        Accompagnement à la certification ISO 27001 - mise en conformité, audits internes, documentation du SMSI
                    </li>
                    <li>
                        Conformité NIS2 - analyse d'écart, plans de remédiation,
                         gouvernance
                    </li>
                    <li>
                        Analyse de risques selon ISO 27005 et EBIOS RM
                    </li>
                    <li>
                        Rédaction de politiques et procédures - PSSI, PCA/PRA,
                         procédures opérationnelles
                    </li>
                    <li>
                        Évaluations tierces - CYBERVADIS, 
                        questionnaires sécurité fournisseurs
                    </li>
                    <li>
                        Sensibilisation et formation à la cybersécurité
                    </li>
                    <li>
                        Jury de certification et tests d'intrusion (RS 6092)
                    </li>
                </ul>
            </div>
            
            <div className="bloc-approche">
                <p className="intro-texte">
                    L'approche
                </p>
                <p className="paragraphe-3">
                    Chaque misssion est différente. J'adapte mes
                    interventions à la maturité, au secteur et aux contraintes
                    de chaque client - en livrant des documents actionnables, pas des rapports
                    qui finissent dans un tiroir
                </p>
            </div>
        </section>
    )
}