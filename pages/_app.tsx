import '../styles/index.css';
import { AppProps } from 'next/app';

export default function Portfolio({Component, pageProps}: AppProps) {
    return <Component { ...pageProps }/>
}
