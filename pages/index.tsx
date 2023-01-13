import Head from 'next/head';

import Layout from '../components/layout';

const HomePage = () => {
    return (
        <Layout>
            <Head>
                <title>Mykhailo Baran Portfolio</title>
            </Head>
            <section className="flex w-full">
                <h1 className="text-6xl font-bold">
                    Home page
                </h1>
            </section>
        </Layout>
    );
}

export default HomePage
