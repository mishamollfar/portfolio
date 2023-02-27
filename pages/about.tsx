import Head from 'next/head';
import Address from'../components/address';
import Layout from '../components/layout';

export default function AboutPage() {
    return (
        <Layout>
            <Head>
                <title>About | Mykhailo Baran Portfolio</title>
            </Head>
            <div className="my-7">
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
                    <h2 className='text-3xl text-center mt-10 mb-10 font-semibold w-full text-indigo-300'>Професійні навики</h2>
                    <div className='flex flex-wrap items-center'>
                        <div className='flex flex-col items-center grow basis-1/2 py-4 px-2 mb-8'>
                            <h5 className='text-xl text-slate-500 py-2'>Мови програмування</h5>
                            <h3 className='text-justify text-xl text-purple-200 font-bold p-1 mt-1'>
                                C++
                                <em className='font-normal text-slate-300 px-2'> / </em>
                                JavaScript
                                <em className='font-normal text-slate-300 px-2'> / </em>
                                HTML
                                <em className='font-normal text-slate-300 px-2'> / </em>
                                Pascal
                                <em className='font-normal text-slate-300 px-2'> / </em>
                                Python
                            </h3>
                        </div>
                        <div className='flex flex-col items-center grow basis-1/2 py-4 px-2 mb-8'>
                            <h5 className='text-xl text-slate-500 py-2'>Технології програмування</h5>
                            <h3 className='text-justify text-xl text-purple-200 font-bold p-1 mt-1'>
                                Angular 2+
                                <em className='font-normal text-slate-300 px-2'> / </em>
                                Node.js
                                <em className='font-normal text-slate-300 px-2'> / </em>
                                Rxjs
                                <em className='font-normal text-slate-300 px-2'> / </em>
                                Css
                                <em className='font-normal text-slate-300 px-2'> / </em>
                                Scss
                                <em className='font-normal text-slate-300 px-2'> / </em>
                                Nest js
                                <em className='font-normal text-slate-300 px-2'> / </em>
                                React
                                <em className='font-normal text-slate-300 px-2'> / </em>
                                шаблонізатор - Pug
                            </h3>
                        </div>
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
                    <h2 className='text-3xl text-center mt-10 mb-10 font-semibold w-full text-indigo-300'>Відомості про роботу</h2>
                    <h3>досвід роботи – 6 роки ( з 06.08.2016р – по 14.11.2022р).</h3>
                    <h3>Працював в компанії  “Native Media”(м. Київ)  - fullstack розробником.</h3>
                    <div className='flex flex-col my-4'>
                        <h3 className='text-2xl text-slate-500 py-2'>Проекти, в розробці яких приймав участь:</h3>
                        <ul className='text-justify border-l-2 border-slate-500 pl-4'>
                            <li className='my-4'>
                                <span className='text-xl text-purple-200'>Telemetrio</span> - сервіс статистики telegram(https://telemetr.io)
                            </li>
                            <li className='my-4'>
                                <span className='text-xl text-purple-200'>Telepost</span> - сервіс віддаленого постинку в telegram(https://telepost.me)
                            </li>
                            <li className='my-4'>
                                <span className='text-xl text-purple-200'>Plugins</span> - плагіни chrome для сервісу ecotime, instapost і telepost
                            </li>
                            <li className='my-4'>
                                <span className='text-xl text-purple-200'>Instapost</span> - сервіс віддаленого постинку в instagram(https://instapost.pw - зараз не підтримується)
                            </li>
                            <li className='my-4'>
                                <span className='text-xl text-purple-200'>Cosar</span> - cервіс для модерації контенту вк(зараз не підтримується)
                            </li>
                        </ul>
                    </div>
                    <div className='flex flex-col my-4'>
                        <h3 className='text-2xl text-slate-500 py-2'>Виконував різні задачі:</h3>
                        <ul className='text-justify'>
                            <li className='my-4'>
                                backend - розробка api для сервісів(nestjs)
                            </li>
                            <li className='my-4'>
                                frontend - розробка компонентів і сервісів(angular 2+, pug)
                            </li>
                            <li className='my-4'>локалізація сервісу</li>
                            <li className='my-4'>
                                telegram бот авторизації для сервісу telemetr.io
                            </li>
                            <li className='my-4'>
                                розробка модуля для збору даних статистики(на python для telegram, використовуючи бібліотеку telethon)
                            </li>
                            <li className='my-4'>
                                модуля адмін-сторінки сервісу.
                            </li>
                            <li className='my-4'>
                                модуля модерації контенту сервісу
                            </li>
                            <li className='my-4'>
                                плагінів для Chrome
                            </li>
                            <li className='my-4'>
                                написання тестів до розробки веб-інтерфесів;
                            </li>
                        </ul>
                    </div>
                    <div className='flex flex-col my-4'>
                        <h3 className='text-2xl text-slate-500 py-2'>Приклад власних сайтів:</h3>
                        <p>
                            <a href="http://mollfar.pp.ua/" target='_blank' className='text-sky-500 hover:text-sky-700 transition duration-300'>
                                http://mollfar.pp.ua/
                            </a>
                            <span> - мій власний на Angular 2+</span>
                        </p>
                    </div>
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
                    <h2 className='text-3xl text-center mt-10 mb-10 font-semibold w-full text-indigo-300'>Знання мов</h2>
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
                    <h2 className='text-3xl text-center mt-10 mb-10 font-semibold w-full text-indigo-300'>Хоббі</h2>
                     <h3 className='text-justify text-xl text-purple-200 font-bold p-1 mt-1'>
                        читати книги
                        <em className='font-normal text-slate-300 px-2'> / </em>
                        слухати музику
                        <em className='font-normal text-slate-300 px-2'> / </em>
                        грати футбол
                        <em className='font-normal text-slate-300 px-2'> / </em>
                        гарти волейбол
                        <em className='font-normal text-slate-300 px-2'> / </em>
                        подорожувати
                        <em className='font-normal text-slate-300 px-2'> / </em>
                        рибалити
                        <em className='font-normal text-slate-300 px-2'> / </em>
                        грати на музичних інстурментах
                        <em className='font-normal text-slate-300 px-2'> / </em>
                        грати настільні ігри
                    </h3>
                </div>
                <div className='flex flex-wrap items-center py-6'>
                    <h2 className='text-3xl text-center mt-10 mb-5 font-semibold w-full text-indigo-300'>Контакти</h2>
                    <Address/>
                </div>
            </div>
        </Layout>
    );
}
