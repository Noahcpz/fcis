import "../../styles/contact/contact.css"

export default function FicheContact() {
    return (
        <section className="contact">
            <h1>Fiche de Contact</h1>

            <h2>Veuillez inscrire vos informations ici si vous cherchez à nous contacter</h2>

            <label htmlFor="email">Votre adresse mail</label>
            <input type="email" id="email" placeholder="exemple@gmail.com" />

            <div className="nom-prenom">
                <div className="champ">
                    <label htmlFor="nom">Votre nom</label>
                    <input type="text" id="nom" placeholder="Indiquez votre nom" />
                </div>
                <div className="champ">
                    <label htmlFor="prenom">Votre prénom</label>
                    <input type="text" id="prenom" placeholder="Indiquez votre prénom" />
                </div>
            </div>

            <label htmlFor="tel">Votre numéro de téléphone</label>
            <input type="tel" id="tel" placeholder="06 00 00 00 00" />

            <label htmlFor="entreprise">Votre entreprise</label>
            <input type="text" id="entreprise" placeholder="Nom de votre entreprise" />

            <label htmlFor="prestation">Prestation</label>
            <input type="text" id="prestation" placeholder="Indiquez la prestation que vous souhaitez" />

            <label htmlFor="rgpd">Consentez-vous au RGPD ?</label>
            <input type="checkbox" id="rgpd" className="rgpd" />

            <label htmlFor="message">Votre message</label>
            <textarea id="message" name="message" rows="6" placeholder="Écrivez votre message libre ici..." />

            <button className="submit">envoyer ma demande</button>
        </section>
    )
}