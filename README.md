# FCIS — Site Vitrine Cybersécurité

Site vitrine pour FCIS, consultant indépendant spécialisé en cybersécurité, gouvernance, risques et conformité (GRC).

## Stack technique

- **Framework** : Next.js 16.2.6 (App Router)
- **Base de données** : PostgreSQL via Neon
- **ORM** : pg (node-postgres)
- **UI** : React 19, FontAwesome
- **Déploiement** : Vercel

## Prérequis

- Node.js 18+
- Un projet [Neon](https://neon.tech) avec les tables `prestations_cards` et `prestations_detail`

## Installation

```bash
git clone https://github.com/Noahcpz/fcis.git
cd fcis
npm install
```

## Variables d'environnement

Crée un fichier `.env` à la racine :

```env
DATABASE_URL=postgresql://user:password@host/neondb?sslmode=require
```

## Lancer le projet

```bash
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000)

## Scripts

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Build de production |
| `npm run start` | Lance le serveur de production |

## Structure


app/                  # Pages (App Router)
├── api/              # Routes API
│   ├── Prestations/
│   └── PrestationsDetail/
├── prestations-details/  # Pages détail par prestation
├── a-propos/
├── contact/
└── mentions-legales/
components/           # Composants React
server/               # DAL + connexion DB
styles/               # CSS
