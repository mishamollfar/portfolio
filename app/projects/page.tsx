import Image from 'next/image';

export const metadata = {
    title: 'Developed Projects | Mykhailo Baran Portfolio | full stack developer - official website | mykhailo-baran.pp.ua',
};

export default function ProjectsPage() {
    return (
        <section className="my-7 w-full px-4">
            <h1 className="text-4xl text-neutral-400 mt-7 mb-10 pt-20 tracking-[.4em] uppercase">Portfolio Projects</h1>
            <p className="text-lg mb-10 pb-20 tracking-[.125em]">
                Детальніше з моїми власними проектами можна ознайомитись у моєму
                <a className="text-cyan-300 hover:text-cyan-500 transition duration-300"
                   href="https://github.com/mishamollfar" target="_blank" rel="noreferrer">
                    &nbsp;профілі на github
                </a>
            </p>
            <div className="flex flex-col md:flex-row md:flex-wrap justify-between mt-8 md:mt-20">
                <div
                    className="flex flex-col md:flex-row items-center place-content-between grow p-4 my-6 md:my-10">
                    <Image className="shadow-lg shadow-indigo-500/100" src={ '/polygraf.png' } alt="Polygraf"
                         width={ 300 } height={ 300 }/>
                    <div className="py-4 md:pl-4 md:ml-6">
                        <h3 className="flex items-center text-2xl text-cyan-300 hover:text-cyan-500 transition duration-300 mb-2 font-semibold tracking-[.2em]">
                            <Image className="mr-2" src={ '/polygraf.svg' } alt="" width={ 26 } height={ 24 }/>
                            <a href="https://polygraf-ohgvdy7vb-mishamollfar.vercel.app" target="_blank" rel="noreferrer">
                                Polygraf.ai
                            </a>
                            <svg fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor"
                                 className="w-6 h-6 ml-2">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"/>
                            </svg>
                        </h3>
                        <span>Сайт компанії polygraf.ai.Над сайтом працював 2,5 місяці як frontend розробник</span>
                    </div>
                </div>
                <div
                    className="flex flex-col md:flex-row-reverse items-center place-content-between grow p-4 my-6 md:my-10">
                    <Image className="shadow-lg shadow-indigo-500/100" src={ '/telemetr.png' } alt="Telemetrio"
                         width={ 300 } height={ 300 }/>
                    <div className="py-4 md:pr-4 md:mr-6">
                        <h3 className="flex items-center text-2xl text-cyan-300 hover:text-cyan-500 transition duration-300 mb-2 font-semibold tracking-[.2em]">
                            <Image className="mr-2" src={ '/telemetrio_logo.png' } alt="" width={ 26 } height={ 24 }/>
                            <a href="https://telemetr.io" target="_blank" rel="noreferrer">
                                Telemetr.io
                            </a>
                            <svg fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor"
                                 className="w-6 h-6 ml-2">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"/>
                            </svg>
                        </h3>
                        <span>Сервіс статистики - телеграм каналів.
                                Український сервіс для аналізу, порівняння аудиторії і контенту telegram.
                                Над сервісом працював 4 роки, починав як fullstack,а завершив як backend розробник</span>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center place-content-between grow p-4 my-6 md:my-10">
                    <Image className="shadow-lg shadow-indigo-500/100" src={ '/telepost.png' } alt="Telepost"
                         width={ 300 } height={ 300 }/>
                    <div className="py-4 md:pl-4 md:ml-6">
                        <h3 className="flex items-center text-2xl text-cyan-300 hover:text-cyan-500 transition duration-300 mb-2 font-semibold tracking-[.2em]">
                            <Image className="mr-2" src={ '/telepost-icon.ico' } alt="" width={ 26 } height={ 24 }/>
                            <a href="https://telepost.me" target="_blank" rel="noreferrer">
                                Telepost.me
                            </a>
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
                    </div>
                </div>
                <div
                    className="flex items-center grow basis-1/3 p-4 flex-row-reverse md:mr-3 my-6 md:my-20 shadow shadow-indigo-500">
                    <div className="p-4">
                        <h3 className="flex items-center text-2xl text-cyan-300 hover:text-cyan-500 transition duration-300 mb-2 font-semibold tracking-[.2em]">
                            <Image className="mr-2" src={ '/favicon.ico' } alt="" width={ 24 } height={ 24 }/>
                            <a href="http://mykhailo-baran.pp.ua" target="_blank" rel="noreferrer">
                                Mykhailo Baran Portfolio
                            </a>
                            <svg fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor"
                                 className="w-6 h-6 ml-2">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"/>
                            </svg>
                        </h3>
                        <span>Власне портфоліо. Над сервісом працюю як fullstack розробник</span>
                    </div>
                </div>
                <div
                    className="flex items-center flex-row-reverse grow basis-1/3 p-4 flex-row-reverse md:ml-3 my-6 md:my-20 shadow shadow-indigo-500">
                    <div className="p-4">
                        <h3 className="flex items-center text-2xl text-cyan-300 hover:text-cyan-500 transition duration-300 mb-2 font-semibold tracking-[.2em]">
                            <Image className="mr-2" src={ '/train.ico' } alt="" width={ 24 } height={ 24 }/>
                            <a href="https://github.com/mishamollfar/train-tickets" target="_blank"
                               rel="noreferrer">
                                Train tickets
                            </a>
                            <svg fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor"
                                 className="w-6 h-6 ml-2">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"/>
                            </svg>
                        </h3>
                        <span>Сервіс моніторінгу залізничних квитків(на даний час сервіс не підтримується).
                                    Над сервісом працював як fullstack розробник</span>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row-reverse items-center place-content-between grow p-4 my-8 md:my-20">
                    <Image src={ '/mollfar.png' } alt="Mollfar" width={ 300 } height={ 300 }
                         className="shadow-lg shadow-indigo-500/100"/>
                    <div className="py-4 md:pr-4 md:mr-6">
                        <h3 className="flex items-center text-2xl text-cyan-300 hover:text-cyan-500 transition duration-300 mb-2 font-semibold tracking-[.2em]">
                            <Image className="mr-2" src={ '/mollfar_logo.ico' } alt="" width={ 24 } height={ 24 }/>
                            <a href="http://mollfar.pp.ua" target="_blank" rel="noreferrer">
                                mollfar
                            </a>
                            <svg fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor"
                                 className="w-6 h-6 ml-2">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"/>
                            </svg>
                        </h3>
                        <span>Власний сайт з парсингом новин з РБК-Україна. Над сервісом працюю як fullstack розробник</span>
                    </div>
                </div>
                <div className="flex items-center grow basis-1/4 p-4 my-6 md:my-20 shadow shadow-indigo-500">
                    <div className="p-4">
                        <h3 className="flex items-center text-2xl text-cyan-300 mb-2 font-semibold tracking-[.125em]">
                            Instapost.pw
                        </h3>
                        <span>Сервіс відкладеного постингу у інстаграм(на даний час сервіс не підтримується).
                                Український сервіс створення контенту,
                                причому з можливістю відкладеного публікування та створення різних типів постів.
                                Над сервісом працював 1 рік як frontend розробник</span>
                    </div>
                </div>
                <div
                    className="flex items-center grow basis-1/4 p-4 md:mr-3 md:ml-3 my-6 md:my-20 shadow shadow-indigo-500">
                    <div className="p-4">
                        <h3 className="flex items-center text-2xl text-cyan-300 mb-2 font-semibold tracking-[.125em]">
                            Ecotime Chrome Extension
                        </h3>
                        <span>Chrome Extension - розширення браузера для створення, редагування і збереження контенту із web-сторінок
                                для сервіс Ecotime.me(на даний час сервіс не підтримується).
                                Над сервісом працював 6 місяців як fullstack розробник</span>
                    </div>
                </div>
                <div className="flex items-center grow basis-1/4 p-4 my-6 md:my-20 shadow shadow-indigo-500">
                    <div className="p-4">
                        <h3 className="flex items-center text-2xl text-cyan-300 mb-2 font-semibold tracking-[.125em]">
                            Instapost Chrome Extensions
                        </h3>
                        <span>Chrome Extension - розширення браузера для створення, редагування і збереження контенту із web-сторінок
                                для сервіс Instapost.pw(на даний час сервіс не підтримується).
                                Над сервісом працював 6 місяців як fullstack розробник</span>
                    </div>
                </div>
            </div>
            <h2 className="text-3xl my-8 md:my-20 font-semibold w-full tracking-[.125em]">Власні проекти: розширення Chrome, nodejs -
                проект так і js - скріпти.</h2>
            <div className="flex flex-col md:flex-row md:flex-wrap">
                <div
                    className="flex basis-1/3 grow m-3 shadow hover:shadow-lg hover:shadow-sky-500/50 shadow-sky-500">
                    <div className="p-2">
                        <h3 className="text-2xl mb-2 text-cyan-300 hover:text-cyan-500 transition duration-300 font-semibold tracking-[.12em]">
                            <a href="https://github.com/mishamollfar/react-chrome-extension-starter" target="_blank"
                               rel="noreferrer">
                                react-chrome-extension-starter
                            </a>
                        </h3>
                        <span className="italic text-sky-100">Minimal base chrome extension, which use react and typescript.</span>
                    </div>
                </div>
                <div
                    className="flex basis-1/3 grow m-3 shadow hover:shadow-lg hover:shadow-sky-500/50 shadow-sky-500">
                    <div className="p-2">
                        <h3 className="text-2xl mb-2 text-cyan-300 hover:text-cyan-500 transition duration-300 font-semibold tracking-[.12em]">
                            <a href="https://github.com/mishamollfar/screenshot-puppeteer-cluster" target="_blank"
                               rel="noreferrer">
                                screenshot-puppetter
                            </a>
                        </h3>
                        <span
                            className="italic text-sky-100">Project for create screenshot by puppeteer-cluster</span>
                    </div>
                </div>
                <div
                    className="flex basis-1/3 grow m-3 shadow hover:shadow-lg hover:shadow-sky-500/50 shadow-sky-500">
                    <div className="p-2">
                        <h3 className="text-2xl mb-2 text-cyan-300 hover:text-cyan-500 transition duration-300 font-semibold tracking-[.12em]">
                            <a href="https://github.com/mishamollfar/killer-advertising" target="_blank"
                               rel="noreferrer">
                                killer-advertising
                            </a>
                        </h3>
                        <span className="italic text-sky-100">Slayer of advertising Chrome Extension!</span>
                    </div>
                </div>
                <div
                    className="flex basis-1/3 grow m-3 shadow hover:shadow-lg hover:shadow-sky-500/50 shadow-sky-500">
                    <div className="p-2">
                        <h3 className="text-2xl mb-2 text-cyan-300 hover:text-cyan-500 transition duration-300 font-semibold tracking-[.12em]">
                            <a href="https://github.com/mishamollfar/timezone-region" target="_blank"
                               rel="noreferrer">
                                timezone-region
                            </a>
                        </h3>
                        <span
                            className="italic text-sky-100">Angular проект-компонент для вибору timezone-region!</span>
                    </div>
                </div>
                <div
                    className="flex basis-1/3 grow m-3 shadow hover:shadow-lg hover:shadow-sky-500/50 shadow-sky-500">
                    <div className="p-2">
                        <h3 className="text-2xl mb-2 text-cyan-300 hover:text-cyan-500 transition duration-300 font-semibold tracking-[.12em]">
                            <a href="https://github.com/mishamollfar/script-parse-har-to-json" target="_blank"
                               rel="noreferrer">
                                script-parse-har-to-json
                            </a>
                        </h3>
                        <span className="italic text-sky-100">JavaScript parse file *.har to *.json!</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
