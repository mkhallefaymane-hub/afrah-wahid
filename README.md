# afrah-wahid
# Afrah Wahid - Moroccan Wedding & Events Planner

A responsive, bilingual (Arabic/French) website for a Moroccan wedding planner.

## Setup
1. `npm install`
2. `npm run db:push` (to set up the database)
3. `npm run dev` (to start the server)

## Configuration
- **Admin Password**: Set `ADMIN_PASSWORD` in Secrets (default: `admin123`).
- **Database**: Uses PostgreSQL (DATABASE_URL).

## Features
- Bilingual (Arabic/French)
- Contact form (stored in database)
- Admin panel at `/admin` to view messages.
- Modern Moroccan design (Zellige, Cairo font).

## Customization
- **Text/Content**: Edit `client/src/pages` (generated React components).
- **Colors/Theme**: Edit `client/src/index.css` or `tailwind.config.ts`.
- **Images**: Add images to `client/public/` and reference them.

