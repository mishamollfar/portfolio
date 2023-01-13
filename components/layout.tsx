import Head from 'next/head';
import Footer from './footer';
import Sidebar from './sidebar';

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <header className="py-4 px-4">
                <Sidebar/>
            </header>
            <main className="container mx-auto h-screen">
                { children }
            </main>
            <Footer/>
        </>
    );
}
