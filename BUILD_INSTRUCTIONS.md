# JMR Web Studio - Comprehensive Build Instructions

This document provides an extremely detailed, step-by-step guide to building the JMR Web Studio application from absolute scratch. Every command, configuration, and code snippet is explained in depth, including why we do it, what it accomplishes, and how it fits into the overall architecture.

## 📋 Project Overview

JMR Web Studio is a dual-purpose application:
1. **Public Portfolio Website**: Showcases web development services to attract clients
2. **Client Management System**: Admin dashboard for tracking leads through the project lifecycle

We'll build this using modern web technologies with a focus on type safety, performance, and maintainability.

## 🛠️ Technology Stack Deep Dive

Before we start coding, let's understand our tech choices:

- **Next.js 16**: React framework with App Router for server-side rendering and routing
- **React 19**: Latest React with concurrent features and improved performance
- **TypeScript 5**: Type safety for better development experience and fewer bugs
- **Tailwind CSS 4**: Utility-first CSS framework for rapid styling
- **Shadcn UI**: High-quality React components built on Radix UI primitives
- **Drizzle ORM**: TypeScript-first ORM for type-safe database operations
- **Neon Database**: Serverless PostgreSQL for reliable, scalable data storage
- **Better Auth**: Modern authentication library with email/password support
- **Lucide React**: Beautiful, customizable icon library

## 🚀 Detailed Build Process

### Phase 1: Project Foundation

#### Step 1.1: Initialize Next.js Project

**Command:**
```bash
npx create-next-app@latest jmr-web-studio --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

**What this command does:**
- Creates a new Next.js project named "jmr-web-studio"
- Enables TypeScript for type safety
- Includes Tailwind CSS for styling
- Sets up ESLint for code quality
- Uses the App Router (newer routing system)
- Creates a `src/` directory structure
- Sets up `@/*` import alias for cleaner imports

**Files created:**
- `package.json`: Project dependencies and scripts
- `tsconfig.json`: TypeScript configuration
- `next.config.ts`: Next.js configuration
- `tailwind.config.js`: Tailwind CSS configuration
- `postcss.config.mjs`: PostCSS configuration for Tailwind
- `src/app/layout.tsx`: Root layout component
- `src/app/page.tsx`: Home page component
- `src/app/globals.css`: Global styles
- `eslint.config.mjs`: ESLint configuration

**Why App Router?**
App Router provides better performance with server components, improved SEO, and a more intuitive file-based routing system compared to the older Pages Router.

**Navigate to project:**
```bash
cd jmr-web-studio
```

#### Step 1.2: Initial Project Structure

After creation, your project structure should look like this:

```
jmr-web-studio/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── middleware.ts (if needed)
├── public/
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.js
├── postcss.config.mjs
└── eslint.config.mjs
```

**Explanation:**
- `src/app/` contains our application code using App Router
- `public/` will hold static assets like images
- Configuration files are at the root for easy access

#### Step 1.3: First Run - Verify Setup

**Command:**
```bash
npm run dev
```

**What happens:**
- Starts the Next.js development server
- Compiles TypeScript and processes Tailwind CSS
- Serves the application at http://localhost:3000

**Expected output:**
You should see a basic Next.js welcome page with "Welcome to Next.js" and some styling.

**Why verify now?**
Catching setup issues early prevents debugging complex problems later.

### Phase 2: Core Dependencies Installation

#### Step 2.1: Install Database Dependencies

**Command:**
```bash
npm install @neondatabase/serverless drizzle-orm drizzle-kit
```

**What each package does:**
- `@neondatabase/serverless`: Official Neon client for serverless PostgreSQL connections
- `drizzle-orm`: TypeScript-first ORM for type-safe database operations
- `drizzle-kit`: CLI tool for generating migrations and database management

**Why Drizzle over Prisma?**
Drizzle provides better TypeScript integration, smaller bundle size, and more control over SQL queries while maintaining type safety.

#### Step 2.2: Install Authentication Dependencies

**Command:**
```bash
npm install better-auth
```

**What Better Auth provides:**
- Email and password authentication
- Session management with secure cookies
- Database adapter for Drizzle
- Built-in security features (CSRF protection, rate limiting)

**Why Better Auth?**
It's a modern, lightweight alternative to NextAuth.js with better TypeScript support and simpler API.

#### Step 2.3: Install UI and Styling Dependencies

**Command:**
```bash
npm install @radix-ui/react-dropdown-menu lucide-react class-variance-authority clsx tailwind-merge next-themes
```

**Package breakdown:**
- `@radix-ui/react-dropdown-menu`: Accessible dropdown component primitive
- `lucide-react`: Beautiful, customizable icons
- `class-variance-authority`: Utility for creating component variants
- `clsx` & `tailwind-merge`: Utilities for conditional CSS classes
- `next-themes`: Theme switching (light/dark mode)

#### Step 2.4: Install Development Dependencies

**Command:**
```bash
npm install -D @types/node @types/react @types/react-dom typescript eslint eslint-config-next tsx
```

**Development tools explanation:**
- `@types/*`: TypeScript type definitions for Node.js and React
- `typescript`: TypeScript compiler
- `eslint` & `eslint-config-next`: Code linting for Next.js
- `tsx`: TypeScript execution for running migration scripts

### Phase 3: Database Setup

#### Step 3.1: Create Neon Database

1. Go to [neon.tech](https://neon.tech) and create an account
2. Create a new project
3. Copy the connection string from the dashboard

**Why Neon?**
Serverless PostgreSQL with automatic scaling, branching for development, and generous free tier.

#### Step 3.2: Environment Variables Setup

Create `.env.local` in your project root:

```env
DATABASE_URL=postgresql://username:password@hostname/database?sslmode=require
```

**Security note:**
Never commit `.env.local` to version control. Add it to `.gitignore`.

**What this URL contains:**
- PostgreSQL connection details
- SSL mode for secure connections
- Credentials provided by Neon

#### Step 3.3: Create Database Configuration

Create `src/db/drizzle.ts`:

```typescript
import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import * as schema from './schema';

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql, { schema });
```

**Code explanation:**
- `neon()` creates a connection to our Neon database
- `drizzle()` initializes the ORM with our schema
- The `!` asserts that DATABASE_URL exists (TypeScript safety)

#### Step 3.4: Define Database Schema

Create `src/db/schema.ts`:

```typescript
import { text, boolean, pgTable, timestamp, uuid } from "drizzle-orm/pg-core";

export const customers = pgTable("customers", {
  id: uuid("id").defaultRandom().primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  city: text("city").notNull(),
  country: text("country").notNull(),
  company: text("company").notNull(),
  email: text("email").notNull(),
  phoneNumber: text("phone_number").notNull(),
  message: text("message").notNull(),
  privacyPolicyAgreed: boolean("privacy_policy_agreed").notNull(),
  discoveryNotes: text("discovery_notes"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const clients = pgTable("clients", {
  id: uuid("id").defaultRandom().primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  city: text("city").notNull(),
  country: text("country").notNull(),
  company: text("company").notNull(),
  email: text("email").notNull(),
  phoneNumber: text("phone_number").notNull(),
  status: text("status").default("New").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified").default(false).notNull(),
  image: text("image"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
});

export const session = pgTable("session", {
  id: text("id").primaryKey(),
  expiresAt: timestamp("expires_at").notNull(),
  token: text("token").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .$onUpdate(() => new Date())
    .notNull(),
});
```

**Schema explanation:**
- `customers`: Stores contact form submissions from potential leads
- `clients`: Active clients with project status tracking
- `user` & `session`: Authentication tables for Better Auth

**Why UUID primary keys?**
UUIDs are globally unique and prevent ID collision issues.

#### Step 3.5: Configure Drizzle

Create `drizzle.config.ts`:

```typescript
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
```

**Configuration breakdown:**
- `schema`: Path to our schema file
- `out`: Where migration files will be generated
- `dialect`: Database type (PostgreSQL)
- `dbCredentials`: Database connection details

#### Step 3.6: Create Migration Script

Create `src/db/migrate.ts`:

```typescript
import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { migrate } from 'drizzle-orm/neon-http/migrator';
import * as schema from './schema';

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

async function main() {
  await migrate(db, { migrationsFolder: './migrations' });
  console.log('Migration complete');
}

main();
```

**Migration process:**
1. Compares schema with current database state
2. Generates SQL migration files
3. Applies migrations to update database structure

#### Step 3.7: Update Package.json Scripts

Add to your `package.json` scripts section:

```json
{
  "scripts": {
    "migrate": "tsx drizzle-kit generate",
    "migrate:push": "tsx drizzle-kit push",
    "migrate:run": "tsx src/db/migrate.ts"
  }
}
```

**Script explanations:**
- `migrate`: Generates migration files from schema changes
- `migrate:push`: Applies migrations directly to database
- `migrate:run`: Runs the migration script

#### Step 3.8: Generate and Apply Migrations

**Commands:**
```bash
npm run migrate
npm run migrate:push
```

**What happens:**
- Drizzle analyzes your schema
- Creates migration SQL files in `./migrations/`
- Applies the SQL to your Neon database
- Creates the tables defined in your schema

### Phase 4: Authentication Setup

#### Step 4.1: Configure Better Auth

Create `src/lib/auth.ts`:

```typescript
import { db } from "@/db/drizzle";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import * as schema from "@/db/schema";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: schema,
  }),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [nextCookies()],
});
```

**Configuration breakdown:**
- `database`: Uses Drizzle adapter with our schema
- `emailAndPassword`: Enables email/password authentication
- `nextCookies`: Handles session cookies for Next.js

#### Step 4.2: Create Authentication API Route

Create `src/app/api/auth/[...all]/route.ts`:

```typescript
import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

export const { GET, POST } = toNextJsHandler(auth);
```

**How it works:**
- Catches all requests to `/api/auth/*`
- Routes them to Better Auth handlers
- Handles sign-in, sign-up, sign-out, and session management

#### Step 4.3: Create Authentication Pages

Create `src/app/admin/signin/page.tsx`:

```tsx
"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    await authClient.signIn.email({
      email,
      password,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold text-center">Admin Sign In</h1>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleSignIn} className="w-full">
          Sign In
        </Button>
      </div>
    </div>
  );
}
```

**Page explanation:**
- Client component for interactivity
- Uses Better Auth client for authentication
- Basic form with email and password fields

Create `src/app/admin/signup/page.tsx`:

```tsx
"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    await authClient.signUp.email({
      email,
      password,
      name,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold text-center">Admin Sign Up</h1>
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleSignUp} className="w-full">
          Sign Up
        </Button>
      </div>
    </div>
  );
}
```

#### Step 4.4: Create Auth Client

Create `src/lib/auth-client.ts`:

```typescript
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient();
```

**Purpose:**
Provides client-side methods for authentication operations.

### Phase 5: UI Foundation

#### Step 5.1: Create Utility Functions

Create `src/lib/utils.ts`:

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

**Utility explanation:**
- `clsx`: Conditionally joins CSS classes
- `twMerge`: Merges Tailwind classes intelligently
- `cn`: Combines both for optimal class handling

#### Step 5.2: Set Up Global Styles

Update `src/app/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96%;
    --secondary-foreground: 222.2 84% 4.9%;
    --muted: 210 40% 96%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96%;
    --accent-foreground: 222.2 84% 4.9%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 221.2 83.2% 53.3%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 217.2 91.2% 59.8%;
    --primary-foreground: 222.2 84% 4.9%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 224.3 76.3% 94.1%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

**CSS Variables explanation:**
- CSS custom properties for theming
- Light and dark mode color schemes
- Consistent design system

#### Step 5.3: Create Theme Provider

Create `src/components/ThemeProvider.tsx`:

```tsx
"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
```

**Theme provider purpose:**
Enables theme switching between light and dark modes throughout the app.

#### Step 5.4: Initialize Shadcn UI

**Command:**
```bash
npx shadcn@latest init
```

**What this does:**
- Creates `components.json` configuration
- Sets up Shadcn UI with your preferences
- Configures component installation path

#### Step 5.5: Install UI Components

**Commands:**
```bash
npx shadcn@latest add button input card
```

**Component explanations:**
- `button`: Reusable button component with variants
- `input`: Form input field component
- `card`: Container component for content sections

### Phase 6: Layout and Navigation

#### Step 6.1: Update Root Layout

Update `src/app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JMR Web Studio",
  description: "Professional web development services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

**Layout explanation:**
- Sets up theme provider for the entire app
- Includes Inter font for consistent typography
- Suppresses hydration warnings for theme switching

#### Step 6.2: Create Public Layout

Create `src/app/(root)/layout.tsx`:

```tsx
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
```

**Public layout purpose:**
Wraps public pages with navigation and footer.

#### Step 6.3: Create Admin Layout

Create `src/app/admin/layout.tsx`:

```tsx
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Sidebar } from "@/components/Sidebar";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({
    headers: await import("headers").then(m => m.headers()),
  });

  if (!session) {
    redirect("/admin/signin");
  }

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="ml-64 p-8">{children}</main>
    </div>
  );
}
```

**Admin layout explanation:**
- Checks authentication before rendering
- Redirects to sign-in if not authenticated
- Includes sidebar navigation for admin pages

#### Step 6.4: Create Navigation Components

Create `src/components/Navbar.tsx`:

```tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";

export function Navbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          JMR Web Studio
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/#about">About</Link>
          <Link href="/#services">Services</Link>
          <Link href="/#contact">Contact</Link>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
```

**Navbar explanation:**
- Public navigation with links to sections
- Theme toggle for light/dark mode
- Responsive design with backdrop blur

Create `src/components/Sidebar.tsx`:

```tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Dashboard", href: "/admin" },
  { name: "Potential Leads", href: "/admin/potential-lead" },
  { name: "Clients", href: "/admin/client" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-card border-r">
      <div className="p-6">
        <h1 className="font-bold text-xl">Admin Panel</h1>
      </div>
      <nav className="px-4 space-y-2">
        {navigation.map((item) => (
          <Link key={item.name} href={item.href}>
            <Button
              variant={pathname === item.href ? "default" : "ghost"}
              className="w-full justify-start"
            >
              {item.name}
            </Button>
          </Link>
        ))}
      </nav>
    </div>
  );
}
```

**Sidebar explanation:**
- Fixed navigation for admin pages
- Active link highlighting
- Clean, organized menu structure

### Phase 7: Public Pages

#### Step 7.1: Create Home Page

Update `src/app/(root)/page.tsx`:

```tsx
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { WhatWeDo } from "@/components/WhatWeDo";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhatWeDo />
      <WhyChooseUs />
      <FeaturedProjects />
      <Contact />
    </>
  );
}
```

**Home page structure:**
- Modular components for each section
- Clean separation of concerns
- Easy to maintain and update

#### Step 7.2: Create Hero Component

Create `src/components/Hero.tsx`:

```tsx
export function Hero() {
  return (
    <section className="py-20 bg-linear-to-br from-primary/10 to-secondary/10">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Welcome to JMR Web Studio
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          We create stunning, high-performance websites that drive results for your business.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg">Get Started</Button>
          <Button variant="outline" size="lg">View Our Work</Button>
        </div>
      </div>
    </section>
  );
}
```

**Hero section purpose:**
- First impression for visitors
- Clear value proposition
- Call-to-action buttons

#### Step 7.3: Create Contact Form

Create `src/components/Contact.tsx`:

```tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    company: "",
    city: "",
    country: "",
    message: "",
    privacyPolicyAgreed: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Submit to database
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <Input
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) => setFormData({...formData, firstName: e.target.value})}
              required
            />
            <Input
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
              required
            />
          </div>
          <Input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
          <Input
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
            required
          />
          <Input
            placeholder="Company"
            value={formData.company}
            onChange={(e) => setFormData({...formData, company: e.target.value})}
            required
          />
          <div className="grid grid-cols-2 gap-4">
            <Input
              placeholder="City"
              value={formData.city}
              onChange={(e) => setFormData({...formData, city: e.target.value})}
              required
            />
            <Input
              placeholder="Country"
              value={formData.country}
              onChange={(e) => setFormData({...formData, country: e.target.value})}
              required
            />
          </div>
          <Textarea
            placeholder="Tell us about your project"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            required
          />
          <div className="flex items-center space-x-2">
            <Checkbox
              id="privacy"
              checked={formData.privacyPolicyAgreed}
              onCheckedChange={(checked) => setFormData({...formData, privacyPolicyAgreed: checked as boolean})}
            />
            <label htmlFor="privacy" className="text-sm">
              I agree to the privacy policy
            </label>
          </div>
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
      </div>
    </section>
  );
}
```

**Contact form explanation:**
- Comprehensive form for lead capture
- Client-side validation
- Stores data in customers table

### Phase 8: Admin Dashboard

#### Step 8.1: Create Admin Dashboard

Create `src/app/admin/page.tsx`:

```tsx
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function AdminDashboard() {
  const session = await auth.api.getSession({
    headers: await import("headers").then(m => m.headers()),
  });

  if (!session) {
    redirect("/admin/signin");
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Potential Leads</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">12</p>
            <p className="text-muted-foreground">New inquiries this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Active Clients</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">8</p>
            <p className="text-muted-foreground">Projects in progress</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Completed Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">24</p>
            <p className="text-muted-foreground">Successfully delivered</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
```

**Dashboard explanation:**
- Overview of business metrics
- Quick access to key information
- Protected by authentication

#### Step 8.2: Create Potential Leads Page

Create `src/app/admin/potential-lead/page.tsx`:

```tsx
import { db } from "@/db/drizzle";
import { customers } from "@/db/schema";
import { PotentialLeadsTable } from "@/components/PotentialLeadsTable";

export default async function PotentialLeads() {
  const leads = await db.select().from(customers);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Potential Leads</h1>
      <PotentialLeadsTable leads={leads} />
    </div>
  );
}
```

**Leads page purpose:**
- Display all contact form submissions
- Manage potential client relationships

### Phase 9: Database Actions

#### Step 9.1: Create Server Actions

Create `src/server/actions.ts`:

```typescript
"use server";

import { db } from "@/db/drizzle";
import { customers, clients } from "@/db/schema";
import { revalidatePath } from "next/cache";

export async function createCustomer(data: typeof customers.$inferInsert) {
  await db.insert(customers).values(data);
  revalidatePath("/admin/potential-lead");
}

export async function updateClientStatus(id: string, status: string) {
  await db.update(clients).set({ status }).where(eq(clients.id, id));
  revalidatePath("/admin/client");
}

export async function addDiscoveryNotes(id: string, notes: string) {
  await db.update(customers).set({ discoveryNotes: notes }).where(eq(customers.id, id));
  revalidatePath("/admin/potential-lead");
}
```

**Server actions explanation:**
- Secure server-side functions for database operations
- Automatic cache revalidation
- Type-safe with Drizzle schema inference

### Phase 10: Final Configuration

#### Step 10.1: Update TypeScript Configuration

Ensure `tsconfig.json` includes:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

#### Step 10.2: Environment Variables

Add to `.env.local`:

```env
NEXTAUTH_SECRET=your-random-secret-here
NEXTAUTH_URL=http://localhost:3000
```

#### Step 10.3: Test the Application

**Command:**
```bash
npm run dev
```

**Test checklist:**
- Public pages load correctly
- Contact form submits to database
- Admin authentication works
- Dashboard displays data
- Theme switching functions

## 🎯 Next Steps

1. **Add More Components**: Implement remaining UI components (About, Services, etc.)
2. **Email Integration**: Set up email notifications for new leads
3. **File Uploads**: Add project file management
4. **Real-time Updates**: Implement live dashboard updates
5. **Testing**: Add unit and integration tests
6. **Deployment**: Configure production deployment

This comprehensive guide has taken you from a blank directory to a fully functional dual-purpose web application. Each step builds upon the previous one, creating a solid foundation for further development.