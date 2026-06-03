import "../styles/home.css"
import Link from "next/link"

export default function Home() {
  return (
    <>
    <section className="hero">
        <section className="spitch-fcis">

          <p>FCIS est une entreprise spécialisée en cybersécurité,
          accompagnant les professionnels et les organisations dans la protection de leurs systèmes et données numériques.<br />
          Dans un monde où les cybermenaces évoluent chaque jour,
          FCIS propose des solutions adaptées à chaque besoin.<br />
          Notre mission : 
          rendre la cybersécurité accessible,
          efficace et durable pour toutes les structures, 
          quelle que soit leur taille.</p>
          
        </section>

        <section className="cards-prestations">

          <div className="card">
            <h4>
              Audit de sécurité
            </h4>
            <p>
              Analyse complète de vos systèmes 
              et identification des vulnérabilités.
            </p>
          </div>

          <div className="card">
            <h4>
              Test d'intrusion
            </h4>
            <p>
              Simulation d'attaques pour tester la 
              résistance de votre infrastructure.
            </p>
          </div>

          <div className="card">
              <h4>
                Conformité RGPD
              </h4>
              <p>Mise en conformité de vos données avec 
                la réglementation européenne.
              </p>
          </div>

          <div className="card">
            <h4>
              Formation
            </h4>
            <p>
              Sensibilisation de vos équipes aux bonnes 
              pratiques de cybersécurité.
            </p>
          </div>

        </section>
      </section>
    </>
  );
}