"use client"
import { useState, useRef } from "react"
import "../../styles/contact/contact.css"
import { envoyerContact } from "@/app/actions/contactActions"

export default function FicheContact() {
    const [statut, setStatut] = useState(null)
    const formRef = useRef(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const result = await envoyerContact(formData)

        if (result.success) {
            setStatut({ type: "success", message: "Votre message a bien été envoyé !" })
            formRef.current.reset()
        } else {
            setStatut({ type: "error", message: result.error })
        }
    }

    return (
        <section className="contact">
            <h1>Fiche de Contact</h1>
            <h2>Veuillez inscrire vos informations ici si vous cherchez à nous contacter</h2>

            <form ref={formRef} onSubmit={handleSubmit}>
                <label htmlFor="email">Votre adresse mail</label>
                <input type="email" id="email" name="email" placeholder="exemple@gmail.com" required />

                <div className="nom-prenom">
                    <div className="champ">
                        <label htmlFor="nom">Votre nom</label>
                        <input type="text" id="nom" name="nom" placeholder="Indiquez votre nom" required />
                    </div>
                    <div className="champ">
                        <label htmlFor="prenom">Votre prénom</label>
                        <input type="text" id="prenom" name="prenom" placeholder="Indiquez votre prénom" required />
                    </div>
                </div>

                <label htmlFor="tel">Votre numéro de téléphone</label>
                <input
                    type="tel"
                    id="tel"
                    name="tel"
                    placeholder="06 00 00 00 00"
                    pattern="[0-9\s]{10,14}"
                    maxLength="14"
                    onKeyPress={(e) => {
                        if (!/[0-9\s]/.test(e.key)) e.preventDefault()
                    }}
                />

                <label htmlFor="entreprise">Votre entreprise</label>
                <input type="text" id="entreprise" name="entreprise" placeholder="Nom de votre entreprise" />

                <label htmlFor="prestation">Prestation</label>
                <input type="text" id="prestation" name="prestation" placeholder="Indiquez la prestation que vous souhaitez" />

                <label htmlFor="rgpd">Consentez-vous au RGPD ?</label>
                <input type="checkbox" id="rgpd" name="rgpd" className="rgpd" />

                <label htmlFor="message">Votre message</label>
                <textarea id="message" name="message" rows="6" placeholder="Écrivez votre message libre ici..." required />

                {statut && (
                    <p className={statut.type === "success" ? "msg-success" : "msg-error"}>
                        {statut.message}
                    </p>
                )}

                <button type="submit" className="submit">envoyer ma demande</button>
            </form>
        </section>
    )
}