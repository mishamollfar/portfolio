import Address from '../../components/Address';
import Image from 'next/image';

export const metadata = {
    title: 'About | Mykhailo Baran Portfolio | mykhailo-baran.pp.ua',
};

export default function AboutPage() {
    return (
        <section className="my-7 w-full">
            <div className='flex flex-col-reverse sm:flex-row items-center w-full py-4 sm:py-6 px-4 mb-4 sm:mb-12'>
                <div>
                    <h1 className="text-4xl sm:text-5xl text-center sm: text-left text-neutral-400 mt-7 mb-10 tracking-[.4em] uppercase">
                        About me
                    </h1>
                    <p className="text-lg mb-4 sm:mb-10 tracking-[.125em]">
                            Я fullstack розробник із Зборова, Тернопільська область, Україна.
                        Розробкою займаюся з 2016 року, створюючи: веб-сервіси, розширення для chrome та користувацькі api.
                    </p>
                </div>
                <Image className="shadow-lg shadow-indigo-500/100" src={ '/me.jpg' } alt="me"
                     width={ 300 } height={ 400 }/>
            </div>
            <div className='flex flex-wrap items-center w-full py-4 sm:py-6 px-4'>
                <h2 className='text-3xl text-neutral-400 tracking-[.4em] text-center mt-10 mb-10 font-semibold w-full'>Професійні навики</h2>
                <div className='flex flex-col sm:flex-row sm:flex-wrap items-center'>
                    <div className='flex flex-col items-center grow basis-1/2 py-4 px-2 mb-8'>
                        <h5 className="text-xl text-neutral-400 tracking-[.2em] py-2">Мови програмування</h5>
                        <h3 className="text-justify text-xl text-sky-300 tracking-[.125em] font-bold p-1 mt-1">
                            C++
                            <em className="font-normal text-slate-300 px-2"> / </em>
                            JavaScript
                            <em className="font-normal text-slate-300 px-2"> / </em>
                            HTML
                            <em className="font-normal text-slate-300 px-2"> / </em>
                            Pascal
                            <em className="font-normal text-slate-300 px-2"> / </em>
                            Python
                        </h3>
                    </div>
                    <div className='flex flex-col items-center grow basis-1/2 py-4 px-2 mb-8'>
                        <h5 className="text-xl text-neutral-400 tracking-[.2em] py-2">Технології програмування</h5>
                        <h3 className="text-justify text-xl text-sky-300 tracking-[.125em] font-bold p-1 mt-1">
                            Angular 2+
                            <em className="font-normal text-slate-300 px-2"> / </em>
                            Node.js
                            <em className="font-normal text-slate-300 px-2"> / </em>
                            Git
                            <em className="font-normal text-slate-300 px-2"> / </em>
                            Rxjs
                            <em className="font-normal text-slate-300 px-2"> / </em>
                            Css
                            <em className="font-normal text-slate-300 px-2"> / </em>
                            Scss
                            <em className="font-normal text-slate-300 px-2"> / </em>
                            Nest js
                            <em className="font-normal text-slate-300 px-2"> / </em>
                            React
                            <em className="font-normal text-slate-300 px-2"> / </em>
                            шаблонізатор - Pug
                        </h3>
                    </div>
                    <div className="flex flex-col items-center grow basis-1/3 py-4 px-2 mb-8">
                        <h5 className="text-xl text-neutral-400 tracking-[.2em] py-2">Веб-редактори</h5>
                        <h3 className="text-justify text-xl text-sky-300 tracking-[.125em] font-bold p-1 mt-1">
                            VS Code
                            <em className="font-normal text-slate-300 px-2"> / </em>
                            WebStorm
                        </h3>
                    </div>
                    <div className="flex flex-col items-center grow basis-1/3 py-4 px-2 mb-8">
                        <h5 className="text-xl text-neutral-400 tracking-[.2em] py-2">Системи зборки</h5>
                        <h3 className="text-justify text-xl text-sky-300 tracking-[.125em] font-bold p-1 mt-1">
                            Webpack
                            <em className="font-normal text-slate-300 px-2"> / </em>
                            Npm
                        </h3>
                    </div>
                    <div className="flex flex-col items-center grow basis-full py-4 px-2 mb-8">
                        <h5 className="text-xl text-neutral-400 tracking-[.2em] py-2">Бази даних</h5>
                        <h3 className="text-justify text-xl text-sky-300 tracking-[.125em] font-bold p-1 mt-1">
                            MongoDb
                        </h3>
                        <div className="flex flex-row flex-wrap w-full items-center py-4 px-2">
                            <Image className="grow basis-1/3 p-1 mt-1" src={ '/m1.jpg' } alt="" width={ 200 }
                                 height={ 200 }/>
                            <Image className="grow basis-1/3 p-1 mt-1" src={ '/m2.jpg' } alt="" width={ 200 }
                                 height={ 200 }/>
                            <Image className="grow basis-1/3 p-1 mt-1" src={ '/m3.jpg' } alt="" width={ 200 }
                                 height={ 200 }/>
                        </div>
                    </div>
                    <div className="flex flex-col items-center grow basis-1/3 py-4 px-2 mr-4 mb-8">
                        <h5 className="text-xl text-neutral-400 tracking-[.2em] py-2">Операційні системи</h5>
                        <h3 className="text-justify text-xl text-sky-300 tracking-[.125em] font-bold p-1 mt-1">
                            Windows 7
                            <em className="font-normal text-slate-300 px-2"> / </em>
                            Windows 8
                            <em className="font-normal text-slate-300 px-2"> / </em>
                            Windows 10
                            <em className="font-normal text-slate-300 px-2"> / </em>
                            Linux Ubuntu
                            <em className="font-normal text-slate-300 px-2"> / </em>
                            MacOs
                        </h3>
                    </div>
                    <div className='flex flex-col items-center grow basis-1/3 py-4 px-2 ml-4 mb-8'>
                        <h5 className="text-xl text-neutral-400 tracking-[.2em] py-2">Офісні пакети</h5>
                        <h3 className="text-justify text-xl text-sky-300 tracking-[.125em] font-bold p-1 mt-1">
                            Microsoft Office
                            <em className="font-normal text-slate-300 px-2"> / </em>
                            LibreOffice
                            <em className="font-normal text-slate-300 px-2"> / </em>
                            MacOffice
                        </h3>
                    </div>
                </div>
            </div>
            <div className='flex flex-col w-full py-4 sm:py-6 px-4'>
                <h2 className='text-3xl text-neutral-400 tracking-[.4em] text-center mt-10 mb-10 font-semibold w-full'>Відомості про роботу</h2>
                <div className='flex flex-col my-4'>
                    <ul className='text-justify'>
                        <li className='my-4'>
                            <span className="text-lg text-pink-500">6 років </span>
                            ( з 06.08.2016р – по 14.11.2022р) - fullstack розробником в компанії “Native Media”(м. Київ).
                        </li>
                        <li className='my-4'>
                            <span className="text-lg text-pink-500">1 місяць </span>
                            ( з 14.11.2022р - по тепер) - fullstack розробником власного потрфоліо.
                        </li>
                        <li className='my-4'>
                            <span className="text-lg text-pink-500">3 місяці </span>
                            ( з 01.11.2023р – по 20.01.2024р) - frontend розробником в аутсорс компанії "OMG", над сайтом "Polygraf.ai".
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col my-4'>
                    <h3 className='text-2xl text-neutral-400 tracking-[.2em] py-2'>Проекти, в розробці яких приймав участь:</h3>
                    <ul className='text-justify border-l-2 border-slate-500 pl-4'>
                        <li className="my-4">
                            <a className="text-xl text-cyan-300 hover:text-cyan-500 transition duration-300"
                               href="https://polygraf-ohgvdy7vb-mishamollfar.vercel.app" target="_blank" rel="noreferrer">
                                Polygraf
                            </a> - сайт компанії
                        </li>
                        <li className="my-4">
                            <a className="text-xl text-cyan-300 hover:text-cyan-500 transition duration-300"
                               href="http://mykhailo-baran.pp.ua/" target="_blank" rel="noreferrer">
                                Portfolio
                            </a> - власне портфоліо проектів
                        </li>
                        <li className="my-4">
                            <a className="text-xl text-cyan-300 hover:text-cyan-500 transition duration-300"
                               href="https://telemetr.io" target="_blank" rel="noreferrer">
                                Telemetrio
                            </a> - сервіс статистики telegram
                        </li>
                        <li className="my-4">
                            <a className="text-xl text-cyan-300 hover:text-cyan-500 transition duration-300"
                               href="https://telepost.me" target="_blank" rel="noreferrer">
                                Telepost
                            </a> - сервіс віддаленого постинку в telegram
                        </li>
                        <li className="my-4">
                            <span className="text-xl text-cyan-300">Plugins</span> - плагіни chrome для сервісу ecotime,
                            instapost і telepost
                        </li>
                        <li className="my-4">
                            <span className="text-xl text-cyan-300">Instapost</span> - сервіс віддаленого постинку в
                            instagram(https://instapost.pw - зараз не підтримується)
                        </li>
                        <li className="my-4">
                            <span className="text-xl text-cyan-300">Cosar</span> - cервіс для модерації контенту
                            вк(зараз не підтримується)
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col my-4'>
                    <h3 className='text-2xl text-neutral-400 tracking-[.2em] py-2'>Виконував різні задачі:</h3>
                    <ul className='text-justify'>
                        <li className='my-4'>
                            backend - розробка api для сервісів(nestjs)
                        </li>
                        <li className='my-4'>
                            frontend - розробка компонентів і сервісів(angular 2+, pug, next.js + rect.js)
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
                        <li className="my-4">
                            плагінів для Chrome
                        </li>
                        <li className="my-4">
                            написання тестів до розробки веб-інтерфесів;
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col my-4">
                    <h3 className="text-2xl text-neutral-400 tracking-[.2em] py-2">Приклад власних сайтів:</h3>
                    <ul className="text-justify border-l-2 border-slate-500 pl-4">
                        <li className="my-4">
                            <a className="text-xl text-cyan-300 hover:text-cyan-500 transition duration-300"
                               href="http://mollfar.pp.ua/" target="_blank" rel="noreferrer">
                                mollfar.pp.ua
                            </a> - mollfar.pp.ua
                        </li>
                        <li className="my-4">
                            <a className="text-xl text-cyan-300 hover:text-cyan-500 transition duration-300"
                               href="http://mykhailo-baran.pp.ua/" target="_blank" rel="noreferrer">
                                portfolio-mykhailo-baran.pp.ua
                            </a> - моє портфоліо на React + Next.js 13
                        </li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-col sm:flex-row sm:flex-wrap w-full py-4 sm:py-6 px-4'>
                <h2 className='text-3xl text-neutral-400 tracking-[.4em] text-center mt-10 mb-10 font-semibold w-full'>Освіта</h2>
                <div className='flex flex-col items-center grow sm:basis-1/4 p-4 mb-10'>
                    <h3 className='tracking-[.12em]'>2008 – 2012 рр.</h3>
                    <p className='text-center'>Зборівський коледж ТНТУ ім. І. Пулюя, спеціальність: “Розробка програмного забезпечення”, кваліфікація: “програміст”;</p>
                </div>
                <div className='flex flex-col items-center grow sm:basis-1/4 p-4 mb-10'>
                    <h3 className='tracking-[.12em]'>2012 – 2014 рр.</h3>
                    <p className='text-center'>Тернопільський національний технічний університет імені Івана Пулюя, напрям підготовки: “Компʼютерні науки”, кваліфікація: “бакалавр-фахівець з інформаційних технологій”;</p>
                </div>
                <div className='flex flex-col items-center grow sm:basis-1/4 p-4 mb-10'>
                    <h3 className='tracking-[.12em]'>2014 – 2016 рр.</h3>
                    <p className='text-center'>Тернопільський національний технічний університет імені Івана Пулюя, здобув повну вищу освіту за спеціальністю: “Інформаційні управляючі системи та технології”, кваліфікація: “аналітик комп’ютерних систем”;</p>
                </div>
            </div>
            <div className='flex flex-wrap items-center w-full py-4 sm:py-6 px-4'>
                <h2 className='text-3xl text-neutral-400 tracking-[.4em] text-center mt-10 mb-10 font-semibold w-full'>Знання мов</h2>
                <div>
                    <p>
                        <b className="text-xl text-cyan-500 tracking-[.125em]">українська</b>
                        <span> - експерт,</span>
                    </p>
                    <p>
                        <b className="text-xl text-cyan-500 tracking-[.125em]">англійська</b>
                        <span> – базовий (читаю і частково розумію, елементарне спілкування, проходжу курси Promova).</span>
                    </p>
                </div>
            </div>
            <div className='flex flex-wrap items-center w-full py-4 sm:py-6 px-4'>
                <h2 className="text-3xl text-neutral-400 tracking-[.4em] text-center mt-10 mb-10 font-semibold w-full">Хоббі</h2>
                <h3 className="text-justify text-xl text-sky-300 font-bold p-1 mt-1 tracking-[.125em]">
                    читати книги
                    <em className="font-normal text-slate-300 px-2"> / </em>
                    слухати музику
                    <em className="font-normal text-slate-300 px-2"> / </em>
                    грати футбол
                    <em className="font-normal text-slate-300 px-2"> / </em>
                    гарти волейбол
                    <em className="font-normal text-slate-300 px-2"> / </em>
                    подорожувати
                    <em className="font-normal text-slate-300 px-2"> / </em>
                    рибалити
                    <em className='font-normal text-slate-300 px-2'> / </em>
                    грати на музичних інстурментах
                    <em className='font-normal text-slate-300 px-2'> / </em>
                    грати настільні ігри
                </h3>
            </div>
            <div className='flex flex-wrap items-center py-4 sm:py-6'>
                <h2 className='text-3xl text-neutral-400 tracking-[.4em] text-center mt-10 mb-5 font-semibold w-full'>Контакти</h2>
                <Address />
            </div>
        </section>
    );
}
