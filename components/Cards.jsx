import "../styles/Cards.css"
export default function Cards (){
    return(
    <section className="cards-prestations">
        <div className="card">
          <h4>Audit de sécurité</h4>
          <p>Analyse complète de vos systèmes et identification des vulnérabilités.</p>
        </div>
        <div className="card">
          <h4>Test d'intrusion</h4>
          <p>Simulation d'attaques pour tester la résistance de votre infrastructure.</p>
        </div>
        <div className="card">
          <h4>Conformité RGPD</h4>
          <p>Mise en conformité de vos données avec la réglementation européenne.</p>
        </div>
        <div className="card">
          <h4>Formation</h4>
          <p>Sensibilisation de vos équipes aux bonnes pratiques de cybersécurité.</p>
        </div>
    </section>
    )
}
