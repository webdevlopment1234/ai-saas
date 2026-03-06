# AI-SaaS - AI-Powered Software-as-a-Service Application

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![React.js](https://img.shields.io/badge/React.js-v18.2.0-blue.svg)](https://reactjs.org/)
[![Next.js](https://img.shields.io/badge/Next.js-v13.4.12-blueviolet.svg)](https://nextjs.org/)
[![OpenAI](https://img.shields.io/badge/OpenAI-API-yellow.svg)](https://openai.com/)
[![Replicate](https://img.shields.io/badge/Replicate-v0.12.3-orange.svg)](https://replicate.ai/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v3.3.3-blue.svg)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-v5.0.0-lightgrey.svg)](https://prisma.io/)
[![Stripe](https://img.shields.io/badge/Stripe-API%20v12.16.0-green.svg)](https://stripe.com/)

AI-SaaS is an advanced and adaptable Software-as-a-Service (SaaS) application that harnesses the capabilities of cutting-edge technologies, including Next.js, OpenAI, Replicate, Tailwind CSS, Prisma, and Stripe. The primary goal of this application is to empower users by offering AI-powered services that facilitate easy access and utilization of artificial intelligence in their projects and workflows.

## Features

- **AI Services**: AI-SaaS provides an extensive array of AI services, including conversation, code generation, image generation, music generation, and video generation. These services are accessible through an intuitive and user-friendly interface.

- **Next.js**: AI-SaaS is built on the Next.js framework, offering server-side rendering, routing, and other essential features out of the box. This ensures superior performance and search engine optimization (SEO) for the application.

- **OpenAI Integration**: The application seamlessly integrates with OpenAI's powerful AI models and APIs, enabling users to leverage state-of-the-art AI capabilities. From generating human-like text to answering questions, AI-SaaS harnesses the full potential of OpenAI.

- **Replicate**: AI-SaaS employs Replicate to enhance model reproducibility and facilitate seamless experimentation with various AI models. This ensures the AI models used in the application are robust and reliable.

- **Tailwind CSS**: The UI of AI-SaaS is meticulously styled using Tailwind CSS, a utility-first CSS framework. This enables easy customization and consistent design throughout the application.

- **Prisma**: The application utilizes Prisma as its ORM (Object-Relational Mapping) tool, simplifying database access and management. This enhances the efficiency of handling user data and preferences.

- **Stripe Integration**: AI-SaaS seamlessly incorporates Stripe for secure and efficient payment processing. Users can subscribe to premium plans and access additional AI services based on their subscription level.

- **Authentication**: Secured with Clerk for seamless and robust user authentication.

## Tech Stack
- **Framework**: Next.js 13 (App Router)
- **Styling**: Tailwind CSS, Lucide React, Radix UI
- **Database**: Prisma with SQLite/Postgres
- **AI Models**: OpenAI (GPT-3.5/4), Replicate (Music, Video)
- **Payments**: Stripe
- **Auth**: Clerk

## Getting Started

To run AI-SaaS locally, follow these steps:

1. **Clone the repository**:

```bash
git clone https://github.com/webdevlopment1234/ai-saas.git
cd ai-saas
```

2. **Install dependencies**:

```bash
npm install
```

3. **Configure environment variables**:

Create a `.env` file in the root directory and populate it with the necessary variables. Use `.env.example` as a template:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

OPENAI_API_KEY=
REPLICATE_API_TOKEN=
DATABASE_URL=
STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

4. **Setup Database**:

```bash
npx prisma db push
```

5. **Run the application**:

```bash
npm run dev
```

The application should now be running locally at `http://localhost:3000`.

## Deployment

AI-SaaS can be deployed to various hosting platforms that support Next.js applications (e.g., Vercel, Netlify). Before deployment, make sure you have configured the necessary environment variables for production.

## License

AI-SaaS is released under the [MIT License](https://opensource.org/licenses/MIT).

## Acknowledgments

AI-SaaS is built with the invaluable support and integration of several open-source projects and technologies. I extend my gratitude to the developers and maintainers of Next.js, OpenAI, Replicate, Tailwind CSS, Prisma, and Stripe for their significant contributions to the development community.
