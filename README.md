# ByteSpace

ByteSpace is a modern, high-performance online learning platform web application built with Next.js, React, TypeScript, Tailwind CSS, and GSAP. It features a pixel-perfect design, smooth entrance animations, momentum-based scrolling, and a complete suite of course discovery and user authentication pages.

## Tech Stack

- Framework: Next.js (App Router)
- Language: TypeScript
- UI Library: React 19
- Styling: Tailwind CSS v4
- Animations: GSAP 3 with ScrollTrigger
- Smooth Scrolling: Lenis
- Typography: Poppins, Satoshi, and Clash Display

## Key Features

- Responsive Design: Fully optimized for desktop, tablet, and mobile viewports.
- Smooth Motion: Refined GSAP animations synchronized with Lenis momentum scrolling.
- Course Exploration: Filterable and searchable course catalogs with detailed information.
- Creator Hub: Creator profiles showcasing stats, followers, bio, and published courses.
- Course Details: Comprehensive syllabus, review breakdown, instructor stats, and pricing tiers.
- Authentication Flows: Dedicated, accessible login and registration interfaces.
- Custom 404 Experience: Tailored not-found page with smooth entrance transitions.

## Pages and Routing

- Home Page: `/`
- Course Details: `/course-details` and `/courses/[id]`
- Course Search: `/search`
- Creator Profile: `/creator-profile` and `/creators/[id]`
- Registration: `/register` and `/signup`
- Login: `/login`
- Not Found: `/404`

## Project Structure

```text
bytespace/
├── app/                        # Next.js App Router pages and layouts
│   ├── 404/                    # Static 404 route
│   ├── course-details/         # Course details page route
│   ├── courses/                # Dynamic course routes
│   ├── creator-profile/        # Creator profile page route
│   ├── creators/               # Dynamic creator routes
│   ├── login/                  # User login route
│   ├── register/               # User registration route
│   ├── search/                 # Course search route
│   ├── signup/                 # Signup alias route
│   ├── globals.css             # Design tokens, theme colors, and utility styles
│   ├── layout.tsx              # Root HTML layout and global metadata
│   ├── not-found.tsx           # Global Next.js not-found boundary
│   └── page.tsx                # Home page composition
├── public/                     # Static assets (images, icons, logos, brand mark)
├── src/
│   ├── components/
│   │   ├── layout/             # Header, Navbar, and Footer components
│   │   ├── pages/              # Full-page client component implementations
│   │   ├── providers/          # Lenis and GSAP smooth scroll provider
│   │   ├── sections/           # Modular landing page sections
│   │   └── ui/                 # Reusable UI primitives (Buttons, Cards, Badges)
│   ├── data/                   # Structured mock data and configuration objects
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # GSAP plugin registrations and utilities
│   └── types/                  # TypeScript interface definitions
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites

Ensure you have Node.js (version 18.18.0 or higher recommended) and npm installed on your system.

### Installation

Clone the repository and install project dependencies:

```bash
git clone https://github.com/Anthic/bytespace.git
cd bytespace
npm install
```

### Development

To start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Production Build

To generate an optimized production bundle:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run start
```

### Code Quality and Linting

To run ESLint across the codebase:

```bash
npm run lint
```

## License

This project is private and proprietary.
