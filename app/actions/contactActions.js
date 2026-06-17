"use server"
import { query } from '@/server/db'

export async function envoyerContact(formData) {
    const nom = formData.get('nom')
    const prenom = formData.get('prenom')
    const email = formData.get('email')
    const telephone = formData.get('tel')
    const entreprise = formData.get('entreprise')
    const prestation = formData.get('prestation')
    const message = formData.get('message')
    const rgpd = formData.get('rgpd') === 'on'

    if (!nom || !prenom || !email || !message) {
        return { success: false, error: "Veuillez remplir tous les champs obligatoires." }
    }

    if (!rgpd) {
        return { success: false, error: "Vous devez accepter le RGPD." }
    }

    try {
        await query(
            `INSERT INTO contacts (nom, prenom, email, telephone, entreprise, prestation, message, rgpd)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
            [nom, prenom, email, telephone, entreprise, prestation, message, rgpd]
        )
        return { success: true }
    } catch (err) {
        console.error("Erreur insertion contact :", err.message)
        return { success: false, error: "Une erreur est survenue, réessayez plus tard." }
    }
}