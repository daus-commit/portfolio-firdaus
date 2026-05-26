# Firdaus Hakimi — Portfolio

> Personal portfolio website built with Next.js — showcasing projects, experience, skills, and contributions as an Applied AI Engineer.

---

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + MUI
- **Icons:** Lucide React, React Icons
- **State:** React Hooks
- **Email Sender:** Emailjs
- **LLM AI Gateaway:** OpenRouter.ai
- **Analytics:** Google Analytics (GA4)

---

## 📁 Project Structure

```
portfolio-firdaus/
├── app/                  # Next.js App Router pages
├── config/               # Site content & data
│   ├── site.ts           # Name, bio, URL, metadata
│   ├── socials.ts        # Social media links
│   ├── experience.ts     # Work experience
│   ├── projects.ts       # Projects showcase
│   ├── skills.ts         # Tech stack & skills
│   ├── contributions.ts  # Open source contributions
│   ├── pages.ts          # Navigation pages
│   └── routes.ts         # App routes
├── components/           # Reusable UI components
├── public/               # Static assets (images, resume, favicon)
└── .env.local            # Environment variables (not committed)
```

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) v18 or later
- [Git](https://git-scm.com)

### Installation

```bash
# Clone the repository
git clone https://github.com/daus-commit/minimal-next-portfolio.git

# Navigate into the project
cd minimal-next-portfolio

# Install dependencies
npm install
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_RESUME_LINK=/resume.pdf
```

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID` | Google Analytics GA4 Measurement ID |
| `NEXT_PUBLIC_RESUME_LINK` | URL or path to your resume PDF |

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ✏️ Customization

All personal content lives inside the `config/` folder. No need to touch any page components.

| File | What to Edit |
|---|---|
| `config/site.ts` | Name, title, bio, URL, OG image, favicon |
| `config/socials.ts` | GitHub, LinkedIn, Twitter, TikTok links |
| `config/experience.ts` | Work history and job roles |
| `config/projects.ts` | Projects, descriptions, and links |
| `config/skills.ts` | Tech stack and skill icons |
| `config/contributions.ts` | Open source contributions |

### Changing the Profile Photo

Replace the avatar image inside the `public/` folder, keeping the same filename.

### Changing the Resume

Place your `resume.pdf` inside the `public/` folder and set:

```env
NEXT_PUBLIC_RESUME_LINK=/resume.pdf
```

---

## 🌐 Deployment

This project can be deployed to [Vercel](https://vercel.com) in one click:

1. Push your code to GitHub
2. Import the repo on [vercel.com](https://vercel.com)
3. Add your environment variables in the Vercel dashboard
4. Deploy ✅

---

## 📄 License

This project is based on the [minimal-next-portfolio](https://github.com/namanbarkiya/minimal-next-portfolio) template by [Naman Barkiya](https://github.com/namanbarkiya).

---

Made with ❤️ by **Firdaus Hakimi**