import Head from 'next/head';
import Layout from '../components/layout';

export default function ProjectPage() {
    return (
        <Layout>
            <Head>
                <title>Developed Projects | Mykhailo Baran Portfolio</title>
            </Head>
            <section className="my-7">
                <h1 className="text-4xl mt-7 mb-5">Portfolio Projects</h1>
                <p className="text-lg mb-10">Детальніше з моїми власними проектами можна ознайомитись у моєму
                    <a className="text-sky-500 hover:text-sky-700 transition duration-300"
                       href="https://github.com/mishamollfar" target="_blank" rel="noreferrer"> профілі на github</a>
                </p>
                <div className="flex flex-wrap justify-between mt-10">
                    <div className="flex items-center grow p-4 flex-row-reverse mb-10 mt-10">
                        <img className="shadow-lg shadow-indigo-500/100" src={ 'telemetr.png' } alt="Telemetrio"
                             width={ 300 } height={ 300 }/>
                        <p className="p-4">
                            <h3 className="flex items-center text-2xl text-indigo-300 mb-2 font-semibold">
                                <img className="mr-2" src={ 'telemetrio_logo.png' } alt="" width={ 26 } height={ 24 }/>
                                <a href="https://telemetr.io" target="_blank" rel="noreferrer">Telemetr.io</a>
                                <svg fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor"
                                     className="w-6 h-6 ml-2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"/>
                                </svg>
                            </h3>
                            <span>Сервіс статистики - телеграм каналів.
                                Український сервіс для аналізу, порівняння аудиторії і контенту telegram.
                                Над сервісом працював 4 роки, починав як fullstack,а завершив як backend розробник</span>
                        </p>
                    </div>
                    <div className="flex items-center grow p-4 mb-10 mt-10">
                        <img className="shadow-lg shadow-indigo-500/100" src={ 'telepost.png' } alt="Telepost"
                             width={ 300 } height={ 300 }/>
                        <p className="p-4">
                            <h3 className="flex items-center text-2xl text-indigo-300 mb-2 font-semibold">
                                <img className="mr-2" src={ 'telemetrio_logo.png' } alt="" width={ 26 } height={ 24 }/>
                                <a href="https://telepost.me" target="_blank" rel="noreferrer">Telepost.me</a>
                                <svg fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor"
                                     className="w-6 h-6 ml-2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"/>
                                </svg>
                            </h3>
                            <span>Сервіс відкладеного постингу у телеграм.
                                Український сервіс створення контенту,
                                причому з можливістю відкладеного публікування та створення різних типів постів.
                                Над сервісом працював 1 рік як frontend розробник</span>
                        </p>
                    </div>
                    <div
                        className="flex items-center grow basis-1/3 p-4 flex-row-reverse mr-3 mt-10 mb-10 shadow shadow-indigo-500">
                        <p className="p-4">
                            <h3 className="flex items-center text-2xl text-indigo-300 mb-2 font-semibold">
                                <img className="mr-2" src={ 'logo192.png' } alt="" width={ 24 } height={ 24 }/>
                                <a href="https://github.com/mishamollfar/portfolio" target="_blank" rel="noreferrer">Mykhailo
                                    Baran Portfolio</a>
                                <svg fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor"
                                     className="w-6 h-6 ml-2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"/>
                                </svg>
                            </h3>
                            <span>Власне портфоліо. Над сервісом працюю як fullstack розробник</span>
                        </p>
                    </div>
                    <div
                        className="flex items-center flex-row-reverse grow basis-1/3 p-4 flex-row-reverse ml-3 mt-10 mb-10 shadow shadow-indigo-500">
                        <p className="p-4">
                            <h3 className="flex items-center text-2xl text-indigo-300 mb-2 font-semibold">
                                <img className="mr-2" src={ 'train.ico' } alt="" width={ 24 } height={ 24 }/>
                                <a href="https://github.com/mishamollfar/train-tickets" target="_blank"
                                   rel="noreferrer">Train tickets</a>
                                <svg fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor"
                                     className="w-6 h-6 ml-2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"/>
                                </svg>
                            </h3>
                            <span>Сервіс моніторінгу залізничних квитків(на даний час сервіс не підтримується).
                                    Над сервісом працював як fullstack розробник</span>
                        </p>
                    </div>
                    <div className="flex items-center flex-row-reverse grow p-4 mb-10 mt-10">
                        <img src={ 'mollfar.png' } alt="Mollfar" width={ 300 } height={ 300 }
                             className="shadow-lg shadow-indigo-500/100"/>
                        <p className="p-4">
                            <h3 className="flex items-center text-2xl text-indigo-300 mb-2 font-semibold">
                                <img className="mr-2" src={ 'mollfar_logo.ico' } alt="" width={ 24 } height={ 24 }/>
                                <a href="http://mollfar.pp.ua" target="_blank" rel="noreferrer">mollfar</a>
                                <svg fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor"
                                     className="w-6 h-6 ml-2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"/>
                                </svg>
                            </h3>
                            <span>Власний сайт з парсингом новин з РБК-Україна. Над сервісом працюю як fullstack розробник</span>
                        </p>
                    </div>
                    <div className="flex items-center grow basis-1/4 p-4 mt-10 mb-10 shadow shadow-indigo-500">
                        <p className="p-4">
                            <h3 className="flex items-center text-2xl text-indigo-300 mb-2 font-semibold">
                                <svg fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor"
                                     className="w-6 h-6 ml-2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"/>
                                </svg>
                                Instapost.pw
                            </h3>
                            <span>Сервіс відкладеного постингу у інстаграм(на даний час сервіс не підтримується).
                                Український сервіс створення контенту,
                                причому з можливістю відкладеного публікування та створення різних типів постів.
                                Над сервісом працював 1 рік як frontend розробник</span>
                        </p>
                    </div>
                    <div
                        className="flex items-center grow basis-1/4 p-4 mr-3 ml-3 mt-10 mb-10 shadow shadow-indigo-500">
                        <p className="p-4">
                            <h3 className="flex items-center text-2xl text-indigo-300 mb-2 font-semibold">
                                <svg fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor"
                                     className="w-6 h-6 ml-2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"/>
                                </svg>
                                Ecotime Chrome Extension
                            </h3>
                            <span>Chrome Extension - розширення браузера для створення, редагування і збереження контенту із web-сторінок
                                для сервіс Ecotime.me(на даний час сервіс не підтримується).
                                Над сервісом працював 6 місяців як fullstack розробник</span>
                        </p>
                    </div>
                    <div className="flex items-center grow basis-1/4 p-4 mt-10 mb-10 shadow shadow-indigo-500">
                        <p className="p-4">
                            <h3 className="flex items-center text-2xl text-indigo-300 mb-2 font-semibold">
                                <svg fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor"
                                     className="w-6 h-6 ml-2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"/>
                                </svg>
                                Instapost Chrome Extensions
                            </h3>
                            <span>Chrome Extension - розширення браузера для створення, редагування і збереження контенту із web-сторінок
                                для сервіс Instapost.pw(на даний час сервіс не підтримується).
                                Над сервісом працював 6 місяців як fullstack розробник</span>
                        </p>
                    </div>
                </div>
                <h2 className="text-3xl mt-10 mb-10 font-semibold w-full">Власні проекти: розширення Chrome, nodejs -
                    проект так і js - скріпти.</h2>
                <div className="flex flex-wrap">
                    <div
                        className="flex basis-1/3 grow m-3 shadow hover:shadow-lg hover:shadow-sky-500/50 shadow-sky-500">
                        <p className="p-2">
                            <h3 className="text-2xl mb-2 text-sky-200 font-semibold">
                                <a href="https://github.com/mishamollfar/react-chrome-extension-starter" target="_blank"
                                   rel="noreferrer">react-chrome-extension-starter</a>
                            </h3>
                            <span className="italic text-sky-100">Minimal base chrome extension, which use react and typescript.</span>
                        </p>
                    </div>
                    <div
                        className="flex basis-1/3 grow m-3 shadow hover:shadow-lg hover:shadow-sky-500/50 shadow-sky-500">
                        <p className="p-2">
                            <h3 className="text-2xl mb-2 text-sky-200 font-semibold">
                                <a href="https://github.com/mishamollfar/screenshot-puppeteer-cluster" target="_blank"
                                   rel="noreferrer">screenshot-puppetter</a>
                            </h3>
                            <span
                                className="italic text-sky-100">Project for create screenshot by puppeteer-cluster</span>
                        </p>
                    </div>
                    <div
                        className="flex basis-1/3 grow m-3 shadow hover:shadow-lg hover:shadow-sky-500/50 shadow-sky-500">
                        <p className="p-2">
                            <h3 className="text-2xl mb-2 text-sky-200 font-semibold">
                                <a href="https://github.com/mishamollfar/killer-advertising" target="_blank"
                                   rel="noreferrer">killer-advertising</a>
                            </h3>
                            <span className="italic text-sky-100">Slayer of advertising Chrome Extension!</span>
                        </p>
                    </div>
                    <div
                        className="flex basis-1/3 grow m-3 shadow hover:shadow-lg hover:shadow-sky-500/50 shadow-sky-500">
                        <p className="p-2">
                            <h3 className="text-2xl mb-2 text-sky-200 font-semibold">
                                <a href="https://github.com/mishamollfar/timezone-region" target="_blank"
                                   rel="noreferrer">timezone-region</a>
                            </h3>
                            <span
                                className="italic text-sky-100">Angular проект-компонент для вибору timezone-region!</span>
                        </p>
                    </div>
                    <div
                        className="flex basis-1/3 grow m-3 shadow hover:shadow-lg hover:shadow-sky-500/50 shadow-sky-500">
                        <p className="p-2">
                            <h3 className="text-2xl mb-2 text-sky-200 font-semibold">
                                <a href="https://github.com/mishamollfar/script-parse-har-to-json" target="_blank"
                                   rel="noreferrer">script-parse-har-to-json</a>
                            </h3>
                            <span className="italic text-sky-100">JavaScript parse file *.har to *.json!</span>
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
