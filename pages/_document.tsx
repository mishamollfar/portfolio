import { Head, Html, Main, NextScript } from 'next/document';

export default function PortfolioDocument() {
    return (
        <Html className="dark">
            <Head/>
            <body className="dark:bg-slate-900 text-white">
            <Main/>
            <NextScript/>
            </body>
        </Html>
    );
}
