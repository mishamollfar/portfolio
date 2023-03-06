import Address from '../components/address';
import TextSphere from '../components/text-sphere';

export default function HomePage() {
    return (
        <>
            <section id='home' className="flex flex-col w-full px-12 py-36">
                <h5 className='text-lg text-neutral-400 py-1.5 my-4 tracking-[.4em] uppercase'>
                    Mykhailo Baran
                </h5>
                <h1 className="text-6xl py-1.5 font-bold my-6">
                    I am a backend and front end developer
                </h1>
                <h3 className='text-xl text-neutral-400 py-1.5 tracking-[.4em] my-4'>
                    fullstack developer / javascript
                </h3>
            </section>
            <section id='work' className="flex flex-col w-full px-12 pt-36 pb-20">
                <div className='my-10'>
                    <h5 className='text-2xl text-neutral-400 pb-10 mb-10 tracking-[.4em] uppercase'>
                        Проекти
                    </h5>
                    <ul className='flex flex-wrap items-center'>
                        <li className='flex flex-col basis-1/3 grow m-4 p-6 shadow shadow-sky-500'>
                            <span className='tracking-[.125em]'>2018 - 2022рр. fullstack developer</span>
                            <span className='text-2xl text-sky-300 tracking-[.25em] mt-4'>Telemetrio</span>
                        </li>
                        <li className='flex flex-col basis-1/3 grow m-4 p-6 shadow shadow-sky-500'>
                            <span className='tracking-[.125em]'>2017 - 2018рр. frontend developer</span>
                            <span className='text-2xl text-sky-300 tracking-[.25em] mt-4'>Telepost</span>
                        </li>
                        <li className='flex flex-col basis-1/3 grow m-4 p-6 shadow shadow-sky-500'>
                            <span className='tracking-[.125em]'>2017 - 2018рр. fullstack developer</span>
                            <span className='text-2xl text-sky-300 tracking-[.25em] mt-4'>Chrome Plugins</span>
                        </li>
                        <li className='flex flex-col basis-1/3 grow m-4 p-6 shadow shadow-sky-500'>
                            <span className='tracking-[.125em]'>2017р. frontend developer</span>
                            <span className='text-2xl text-sky-300 tracking-[.25em] mt-4'>Instapost</span>
                        </li>
                        <li className='flex flex-col basis-1/3 grow m-4 p-6 shadow shadow-sky-500'>
                            <span className='tracking-[.125em]'>2016 - 2017рр. frontend developer / tester</span>
                            <span className='text-2xl text-sky-300 tracking-[.25em] mt-4'>Cosar</span>
                        </li>
                    </ul>
                </div>
                <div className='mt-10'>
                    <h5 className='text-2xl text-neutral-400 py-10 mb-10 tracking-[.4em] uppercase'>
                        Власні проекти
                    </h5>
                    <ul className='flex flex-wrap items-center'>
                        <li className='flex flex-col basis-1/4 grow m-4 p-6 shadow shadow-purple-500'>
                            <span className='text-2xl text-sky-300 tracking-[.25em] m-4'>Portfolio</span>
                        </li>
                        <li className='flex flex-col basis-1/4 grow m-4 p-6 shadow shadow-purple-500'>
                            <span className='text-2xl text-sky-300 tracking-[.25em] m-4'>Train tickets</span>
                        </li>
                        <li className='flex flex-col basis-1/4 grow m-4 p-6 shadow shadow-purple-500'>
                            <span className='text-2xl text-sky-300 tracking-[.25em] m-4'>mollfar</span>
                        </li>
                    </ul>
                </div>
            </section>
            <section id='skills' className="flex flex-col w-full px-12 pt-16 pb-4">
                <h5 className='text-lg text-neutral-400 pt-10 pb-5 tracking-[.4em] uppercase'>
                    Мої навики
                </h5>
                <div className='flex items-center'>
                    <div className='flex flex-col text-base mr-4'>
                        <p className='mb-4 break-words whitespace-pre-wrap'>
                            З початком роботи в якості розробника, 6 років тому, я виконував різні задачі,
                            співпрацював із дизайнером через сервіс -  figma.
                        </p>
                        <p className='break-words whitespace-pre-wrap'>
                            Я розробляв клієнтські і серверні сервіси для статистики та віддалено постингу у соціальних
                            мережах, плагіни для chrome, користувацбке api та проектував баз даних - mongoDb.
                            Основні технології, які використовував - angualr 2+, node.js, next.js, mongoDb, react,
                            css, scss, .pug, npm, git, python.
                        </p>
                    </div>
                    <TextSphere />
                </div>
            </section>
            <section id='contact' className="flex flex-col w-full px-12 pt-16 pb-20">
                <h5 className='text-lg text-neutral-400 py-1.5 my-4 tracking-[.4em] uppercase'>
                   contact information
                </h5>
                <Address />
            </section>
        </>
    );
}
