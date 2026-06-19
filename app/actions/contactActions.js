"use server"
import { query } from '@/server/db'

async function verifierTurnstile(token) {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            secret: process.env.TURNSTILE_SECRET_KEY,
            response: token,
        }),
    })
    const data = await response.json()
    return data.success
}

export async function envoyerContact(formData) {
    const honeypot = formData.get('website')
    if (honeypot) {
        return { success: false, error: "Une erreur est survenue." }
    }

    const turnstileToken = formData.get('cf-turnstile-response')
    if (!turnstileToken) {
        return { success: false, error: "Veuillez valider la vérification anti-robot." }
    }

    const turnstileValide = await verifierTurnstile(turnstileToken)
    if (!turnstileValide) {
        return { success: false, error: "Vérification anti-robot échouée, réessayez." }
    }

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

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
        return { success: false, error: "Adresse mail invalide." }
    }

    if (nom.length > 100 || prenom.length > 100) {
        return { success: false, error: "Le nom ou le prénom est trop long." }
    }

    if (message.length > 5000) {
        return { success: false, error: "Votre message est trop long (5000 caractères maximum)." }
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