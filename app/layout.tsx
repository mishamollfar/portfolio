import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script'
import "./globals.css";
import { PropsWithChildren } from "react";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import Sidebar from "../components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: '#111827',
};

export const metadata: Metadata = {
  title: 'Mykhailo Baran Portfolio | full stack developer - official website | mykhailo-baran.pp.ua',
  description: `Офіційний сайт Михайла Барана. Я розробник повного стеку. Протягом 6 років я працював у стартапі, створюючи:
         веб-сервіси, розширення для chrome і користувальницькі API, а також створив власні невеликі сервіси.
         Використовував сучасні технології в проектах: Angular 2+, Node.js, Nest js, React, Scss, HTML, MongoDb, Rxjs.
         Відвідайте офіційну сторінку Михайла Барана та дізнайтеся про його проекти, навики та вміння.`,
  keywords: `backend, freelance, freelancer, full stack, frontend, developer, develop, responsive, web, website,
     service,  ui, ux, user, interface, experience, application, app, interaction, git, mongodb, react, angular,
      java script, typesctipt, node.js, next.js, npm, python, telemetr.io, mollfar.pp.ua, junior, middle, portfolio,
      case, study, studies, projects, Ukraine, Ternopil, Lviv, Zboriv, Baran Mykhailo, Баран Михайло, портфоліо,
      Баран Михайло, офіційна сторінка, розробник, проект, веб-технології, додатки, навики, вміння, бази даних, сервіси,
      сайти, Зборів, Тернопіль, Україна`,
  metadataBase: new URL('https://www.mykhailo-baran.pp.ua'),
  openGraph: {
    title: 'Mykhailo Baran Portfolio | full stack developer - official website | mykhailo-baran.pp.ua',
    description: `Official website of Mykhailo Baran. I am a full stack developer. For 6 years, I worked at a startup creating:
         web services, extensions for chrome and custom APIs, and also created my own small services.
         Used modern technologies in projects: Angular 2+, Node.js, Nest js, React, Scss, HTML, MongoDb, Rxjs.
         Visit the official page of Mykhailo Baran and learn about Mykhailo's work and skills.`,
    url: '/',
    type: 'website',
    images: [
      {
        url: '/favicon.ico',
        width: 192,
        height: 192,
      },
    ],
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: "favicon.ico",
    apple: 'favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

type LayoutProps = PropsWithChildren<{
  children: PropsWithChildren;
}>;

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html className="dark" lang='en'>
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-EHKQDTT2VZ"/>
      </head>
      <body className="dark:bg-slate-900 text-white">
        <header className="container flex flex-col sm:flex-row place-content-between w-full p-4 my-0 mx-auto">
          <Logo/>
          <Sidebar/>
        </header>
        <main className="container w-full p-4 my-0 mx-auto">
          { children }
        </main>
        <Footer/>
      </body>
      <GoogleAnalytics gaId="G-EHKQDTT2VZ" />
    </html>
  );
}
