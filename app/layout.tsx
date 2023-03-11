import Footer from '../components/footer';
import Logo from '../components/logo';
import Sidebar from '../components/sidebar';
import '../styles/index.css';

export const metadata = {
    title: 'Mykhailo Baran Portfolio | full stack developer - official website | mykhailo-baran.pp.ua',
    description: `Official website of Mykhailo Baran. I am a full stack developer. For 6 years, I worked at a startup creating:
         web services (automated posting to social networks and statistics of Telegram channels),
         extensions for chrome and custom APIs, and also created my own small services.
         Used modern technologies in projects: Angular 2+, Node.js, Nest js, React, Scss, HTML, MongoDb, Rxjs.
         Baran Mykhailo portfolio. Visit the official page of Mykhailo Baran and learn about Mykhailo's work and skills.`,
    keywords: `backend, freelance, freelancer, full stack, frontend, developer, develop, responsive, web, website,
     service,  ui, ux, user, interface, experience, application, app, interaction, git, mongodb, react, angular,
      java script, typesctipt, node.js, next.js, npm, python, telemetr.io, mollfar.pp.ua, junior, middle, portfolio, 
      case, study, studies, projects, ukraine, ternopil, lviv, zboriv, Baran Mykhailo, Баран Михайло, портфоліо, 
      Баран Михайло, офіційна сторінка`,
    themeColor: '#111827',
    openGraph: {
        title: 'Mykhailo Baran Portfolio | full stack developer - official website | mykhailo-baran.pp.ua',
        description: `Official website of Mykhailo Baran. I am a full stack developer. For 6 years, I worked at a startup creating:
         web services (automated posting to social networks and statistics of Telegram channels),
         extensions for chrome and custom APIs, and also created my own small services.
         Used modern technologies in projects: Angular 2+, Node.js, Nest js, React, Scss, HTML, MongoDb, Rxjs.
         Baran Mykhailo portfolio. Visit the official page of Mykhailo Baran and learn about Mykhailo's work and skills.`,
        url: 'http://mykhailo-baran.pp.ua',
        type: 'website',
        images: [
            {
                url: 'http://www.mykhailo-baran.pp.ua/favicon.ico',
                width: 192,
                height: 192,
            },
        ],
    },
    robots: {
        index: true,
    }
}

export default function RootLayout({ children }: {children: React.ReactNode}) {
    return (
        <html className="dark" lang='en'>
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
        </html>
    );
}
