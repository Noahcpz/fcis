import "../styles/home.css"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <>
    <section className="hero">
        <section className="spitch-fcis">
          <h1>
            Prenez le controle de votre exposition cyber
          </h1>
          <p>
            parce qu'une bonne stratégie de sécurité se construit sur 
            la connaissance de vos
            vrais risques,<br />
            nous vous accompagnons pas à pas - <br />
            de l'évaluation de votre exposition à la mise en place d'un pilotage GRC robuste 
          </p>
        </section>
        <Link href="/contact">
          <button>Contactez-nous</button>
        </Link> 
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
            <p>
              Mise en conformité de vos données avec 
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
      <section className="reassurance">
        <div>
          <h3  className="titre-reassurance">
            Certifications et réferentiels
          </h3>
        </div>
        <div className="reassurance-certifs-conteneur">
          <div className="reassurance-certifs">
              <Image src="/img/iso-27001.png" alt="ISO 27001" 
              width={100} 
              height={100}/>
              <h4>              
                ISO 27001
              </h4>
          </div>
          <div className="reassurance-certifs">
              <Image src="/img/rgpd-logo.webp" alt="rgpd" 
              width={100} 
              height={100}/>
              <h4>
                RGPD
              </h4>
          </div>
          <div className="reassurance-certifs">
              <Image src="/img/Anssi-logo.png" alt="Anssi" 
              width={100} 
              height={100}/>
              <h4>
                ANSSI
              </h4>
          </div>
          <div className="reassurance-certifs">
              <Image src="/img/pci-logo.png" alt="PCI"
              width={100} 
              height={100}/>
              <h4>
                PCI
              </h4>
          </div>
        </div>
      </section>
    </>
  );
}