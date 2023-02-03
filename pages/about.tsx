import Head from 'next/head';
import Address from'../components/address';
import Layout from '../components/layout';

export default function AboutPage() {
    return (
        <Layout>
            <Head>
                <title>About | Mykhailo Baran Portfolio</title>
            </Head>
            <section className="my-7">
                <div className='flex items-center py-6 mb-10'>
                    <div>
                        <h1 className="text-5xl mt-7 mb-5">About me</h1>
                        <p className="text-lg mb-10">Я fullstack розробник із Зборова, Тернопільська область, Україна.
                            Розробкою займаюся з 2016 року, створюючи: веб-сервіси, розширення для chrome та користувацькі api.
                        </p>
                    </div>
                    <img className="shadow-lg shadow-indigo-500/100" src={ 'me.jpg' } alt="me"
                         width={ 300 } height={ 400 }/>
                </div>
                <div className='flex flex-wrap items-center py-6'>
                    <h2 className='text-3xl mt-10 mb-10 font-semibold w-full text-indigo-300'>Професійні навики</h2>
                    <p>
                        Мови і технології програмування: Pascal, C++,  JavaScript, Angular 2+, Rxjs, HTML, Css, node js, Nest js, React, шаблонізатор - Pug
                    </p>
                    <div className='flex flex-wrap items-center'>
                        <div className='flex flex-col items-center grow basis-1/4 py-4 px-2 mb-8'>
                            <h5 className='text-xl text-slate-500 py-2'>Веб-редактори</h5>
                            <h3 className='text-justify text-xl text-purple-200 font-bold p-1 mt-1'>
                                VS Code
                                <em className='font-normal text-slate-300 px-2'> / </em>
                                WebStorm
                            </h3>
                        </div>
                        <div className='flex flex-col items-center grow basis-1/4 py-4 px-2 mb-8'>
                            <h5 className='text-xl text-slate-500 py-2'>Бази даних</h5>
                            <h3 className='text-justify text-xl text-purple-200 font-bold p-1 mt-1'>
                                MongoDb
                            </h3>
                        </div>
                        <div className='flex flex-col items-center grow basis-1/4 py-4 px-2 mb-8'>
                            <h5 className='text-xl text-slate-500 py-2'>Системи зборки</h5>
                            <h3 className='text-justify text-xl text-purple-200 font-bold p-1 mt-1'>
                                Webpack
                                <em className='font-normal text-slate-300 px-2'> / </em>
                                Npm
                            </h3>
                        </div>
                        <div className='flex flex-col items-center grow basis-1/3 py-4 px-2 mr-4 mb-8'>
                            <h5 className='text-xl text-slate-500 py-2'>Операційні системи</h5>
                            <h3 className='text-justify text-xl text-purple-200 font-bold p-1 mt-1'>
                                Windows 7
                                <em className='font-normal text-slate-300 px-2'> / </em>
                                Windows 8
                                <em className='font-normal text-slate-300 px-2'> / </em>
                                Windows 10
                                <em className='font-normal text-slate-300 px-2'> / </em>
                                Linux Ubuntu
                                <em className='font-normal text-slate-300 px-2'> / </em>
                                MacOs
                            </h3>
                        </div>
                        <div className='flex flex-col items-center grow basis-1/3 py-4 px-2 ml-4 mb-8'>
                            <h5 className='text-xl text-slate-500 py-2'>Офісні пакети</h5>
                            <h3 className='text-justify text-xl text-purple-200 font-bold p-1 mt-1'>
                                Microsoft Office
                                <em className='font-normal text-slate-300 px-2'> / </em>
                                LibreOffice
                                <em className='font-normal text-slate-300 px-2'> / </em>
                                MacOffice
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='flex flex-wrap items-center py-6'>
                    <h2 className='text-3xl mt-10 mb-10 font-semibold w-full text-indigo-300'>Відомості про роботу</h2>
                    <p>
                        досвід роботи – 6 роки ( з 06.08.2016р – по 14.11.2022р).
                        Працював в компанії  “Native Media”(м. Київ)  - fullstack розробником.
                        Проекти, в розробці яких приймав участь:
                        Сервіс для модерації контенту вк(зараз не підтримується)
                        Instapost - сервіс віддаленого постинку в instagram(https://instapost.pw - зараз не підтримується)
                        Plugins - плагіни chrome для сервісу ecotime, instapost і telepost
                        Telepost - сервіс віддаленого постинку в telegram(https://telepost.me)
                        Telemetrio - сервіс статистики telegram(https://telemetr.io)
                        За весь час роботи виконував різні задачі:
                        написання тестів до розробки веб-інтерфесів;
                        frontend - розробка компонентів і сервісів(angular 2+, pug)
                        локалізація сервісу
                        backend - розробка api для сервісів(nestjs)
                        розробка модуля для збору даних статистики(на python для telegram, використовуючи бібліотеку telethon)
                        модуля адмін-сторінки сервісу.
                        модуля модерації контенту сервісу
                        плагінів для Chrome
                        telegram бот авторизації для сервісу telemetr.io
                        Приклад власних сайтів:
                        http://mollfar.pp.ua/ - мій власний
                    </p>
                </div>
                <div className='flex flex-wrap py-6'>
                    <h2 className='text-3xl text-center mt-10 mb-10 font-semibold w-full text-indigo-300 w-full'>Освіта</h2>
                    <div className='flex flex-col items-center grow basis-1/4 p-4 mb-10'>
                        <h3>2008 – 2012 рр.</h3>
                        <p className='text-center'>Зборівський коледж ТНТУ ім. І. Пулюя, спеціальність: “Розробка програмного забезпечення”, кваліфікація: “програміст”;</p>
                    </div>
                    <div className='flex flex-col items-center grow basis-1/4 p-4 mb-10'>
                        <h3>2012 – 2014 рр.</h3>
                        <p className='text-center'>Тернопільський національний технічний університет імені Івана Пулюя, напрям підготовки: “Компʼютерні науки”, кваліфікація: “бакалавр-фахівець з інформаційних технологій”;</p>
                    </div>
                    <div className='flex flex-col items-center grow basis-1/4 p-4 mb-10'>
                        <h3>2014 – 2016 рр.</h3>
                        <p className='text-center'>Тернопільський національний технічний університет імені Івана Пулюя, здобув повну вищу освіту за спеціальністю: “Інформаційні управляючі системи та технології”, кваліфікація: “аналітик комп’ютерних систем”;</p>
                    </div>
                </div>
                <div className='flex flex-wrap items-center py-6'>
                    <h2 className='text-3xl mt-10 mb-10 font-semibold w-full text-indigo-300'>Знання мов</h2>
                    <p>
                        <p>
                            <b className='text-purple-400'>українська</b>
                            <span> - експерт,</span>
                        </p>
                        <p>
                            <b className='text-purple-400'>англійська</b>
                            <span> – базовий (читаю і частково розумію, елементарне спілкування).</span>
                        </p>
                    </p>
                </div>
                <div className='flex flex-wrap items-center py-6'>
                    <h2 className='text-3xl mt-10 mb-10 font-semibold w-full text-indigo-300'>Хоббі</h2>
                    <p>
                    </p>
                </div>
                <div className='flex flex-wrap items-center py-6'>
                    <h2 className='text-3xl mt-10 mb-5 font-semibold w-full text-indigo-300'>Контакти</h2>
                    <Address/>
                </div>
            </section>
        </Layout>
    );
}
