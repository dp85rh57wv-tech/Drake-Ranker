# Drake Ranker 🎵

A social platform where Drake fans can rank his songs, share their rankings, and compete with friends.

## Features

- **User Authentication**: Sign up, log in, and manage your profile
- **Song Rankings**: Drag-and-drop interface to rank Drake songs
- **Social Sharing**: Post rankings and share them with the community
- **Likes & Engagement**: Like other users' rankings and see what's popular
- **User Profiles**: View other users' rankings and discover new perspectives

## Tech Stack

- **Frontend**: Next.js 14 + React + Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL + Prisma ORM
- **Authentication**: NextAuth.js

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database

### Installation

1. Clone the repository
```bash
git clone https://github.com/dp85rh57wv-tech/Drake-Ranker.git
cd Drake-Ranker
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env.local
# Edit .env.local with your database URL and NextAuth secret
```

4. Set up the database
```bash
npm run db:push
```

5. Run the development server
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
.
├── app/                    # Next.js App Router pages & layouts
│   ├── api/               # API routes (auth, rankings, likes)
│   ├── auth/              # Authentication pages (login, signup)
│   ├── dashboard/         # Main app dashboard
│   └── layout.tsx         # Root layout
├── components/            # Reusable React components
│   ├── RankingDragDrop/  # Drag-and-drop ranking interface
│   ├── RankingCard/      # Display individual rankings
│   └── Navbar/           # Navigation component
├── lib/                   # Utilities & helpers
│   ├── auth.ts           # Authentication logic
│   └── api.ts            # API client functions
├── prisma/               # Database schema & migrations
├── public/               # Static assets
└── README.md
```

## Database Schema

- **User**: User accounts with authentication
- **Song**: Drake songs in the catalog
- **Ranking**: User-created rankings (ordered lists of songs)
- **RankingItem**: Individual songs within a ranking
- **Like**: Likes on rankings from other users

## Next Steps

- [ ] Implement authentication pages (login/signup)
- [ ] Build drag-and-drop ranking interface
- [ ] Create API endpoints for CRUD operations
- [ ] Build user profile pages
- [ ] Implement like/engagement system
- [ ] Seed database with Drake songs
- [ ] Deploy to production (Vercel + Railway/Supabase)

## Contributing

Pull requests welcome! Please create a branch for your feature.

## License

MIT
