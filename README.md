# Modern Personal Portfolio

A professional, high-performance personal portfolio built with **Next.js 15**, **React**, **TypeScript**, and **Tailwind CSS**. This project features a modern UI/UX design, smooth scroll animations via **AOS**, and a seamless contact integration using **EmailJS**.

---

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Library:** [React](https://react.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [AOS (Animate on Scroll)](https://michalsnik.github.io/aos/)
- **Contact Form:** [EmailJS](https://www.emailjs.com/)

---

## 🛠️ Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/EdSiron/portfolio.git
cd portfolio

```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install

```

### 3. Environment Setup

Create a `.env.local` file in the root directory and populate it with your EmailJS credentials. This file is ignored by git to keep your keys private.

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

```

### 4. Run the Development Server

```bash
npm run dev

```

Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) in your browser to see the result.

---

## 📧 EmailJS Configuration Guide

To make the contact page functional, follow these steps to set up your EmailJS account:

1. **Sign Up:** Create a free account at [emailjs.com](https://www.emailjs.com/).
2. **Add Email Service:** - Go to "Email Services" and click "Add New Service".
* Connect your provider (e.g., Gmail, Outlook).
* Copy the **Service ID** and paste it into your `.env.local`.


3. **Create Email Template:**
* Go to "Email Templates" and click "Create New Template".
* Map your form fields (e.g., `{{from_name}}`, `{{reply_to}}`, `{{message}}`) to your template.
* Save the template and copy the **Template ID** to your `.env.local`.


4. **Retrieve Public Key:**
* Navigate to "Account" -> "API Keys".
* Copy your **Public Key** to your `.env.local`.


5. **Authorized Domains:** In your EmailJS dashboard, ensure you add your production domain (e.g., `yourportfolio.vercel.app`) to the "Authorized Domains" list to ensure the form only works on your site.

---

## ✨ Key Features

* **Modern Design:** Clean, minimalist, and professional UI built with Tailwind CSS.
* **Dynamic Animations:** Integrated AOS for smooth, scroll-triggered entry effects.
* **Type Safety:** Fully typed with TypeScript for robust development and fewer runtime errors.
* **Functional Contact Form:** Fully integrated with EmailJS for direct-to-inbox messaging.
* **Responsive & Mobile-First:** Optimized for seamless viewing across all devices.

---

## 📦 Deployment

This project is optimized for deployment on the [Vercel Platform](https://vercel.com/new).

**Pro Tip:** When deploying, navigate to your Project Settings on Vercel and add your environment variables (`NEXT_PUBLIC_EMAILJS_...`) so the contact form works in production.

---

Built with ❤️ by Ed Mark Angelo Siron

