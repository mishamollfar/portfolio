import Footer from '../components/footer';
import Sidebar from '../components/sidebar';
import '../styles/index.css';

export const metadata = {
    title: 'Mykhailo Baran Portfolio',
    description: `I am a full stack developer. For 6 years, I worked at a startup creating:
         web services (automated posting to social networks and statistics of Telegram channels),
         extensions for chrome and custom APIs, and also created my own small services.
         Used modern technologies in projects: Angular 2+, Node.js, Nest js, React, Scss, HTML, MongoDb, Rxjs`,
    keywords: `backend, freelance, freelancer, full stack, frontend, developer, develop, responsive, web, website,
     service,  ui, ux, user, interface, experience, application, app, interaction, git, mongodb, react, angular,
      java script, typesctipt, node.js, next.js, npm, python, telemetr.io, mollfar.pp.ua, junior, middle, portfolio, 
      case, study, studies, projects, ukraine, ternopil, lviv, zboriv`,
    themeColor: '#111827',
    openGraph: {
        title: 'Mykhailo Baran Portfolio',
        url: 'http://mykhailo-baran.pp.ua',
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
                <header className="container w-auto p-4 my-0 mx-auto">
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
