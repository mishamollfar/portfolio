import Address from "../components/Address";
import TextSphere from "../components/TextSphere";

export default function HomePage() {
  return (
    <>
      <section id="home" className="flex flex-col w-full px-2 md:px-6 py-12 md:py-36">
        <h5 className="text-lg text-neutral-400 py-1.5 my-4 tracking-[.4em] uppercase">
          Mykhailo Baran
        </h5>
        <h1 className="text-6xl py-1.5 font-bold my-6">
          I am a backend and front end developer
        </h1>
        <h3 className="text-xl text-neutral-400 py-1.5 tracking-[.4em] my-4">
          fullstack developer / javascript
        </h3>
      </section>
      <section id="work" className="flex flex-col w-full px-2 md:px-6 pt-12 md:pt-36 pb-10 md:pb-20">
        <div className="my-10">
          <h5 className="text-2xl text-neutral-400 pb-10 mb-10 tracking-[.4em] uppercase">
            Проекти
          </h5>
          <ul className="flex flex-col lg:flex-row lg:flex-wrap items-center">
            <li className="flex flex-col w-full lg:basis-1/3 grow m-4 p-6 shadow shadow-sky-500">
              <span className="tracking-[.125em]">2023 - 2024рр. frontend developer</span>
              <a className="text-2xl text-cyan-300 tracking-[.25em] mt-4 hover:text-cyan-500 transition duration-300"
                 href="https://telemetr.io" target="_blank" rel="noreferrer">
                Polygraf
              </a>
            </li>
            <li className="flex flex-col w-full lg:basis-1/3 grow m-4 p-6 shadow shadow-sky-500">
              <span className="tracking-[.125em]">2022рр. fullstack developer</span>
              <a className="text-2xl text-cyan-300 tracking-[.25em] mt-4 hover:text-cyan-500 transition duration-300"
                 href="https://telemetr.io" target="_blank" rel="noreferrer">
                Portfolio
              </a>
            </li>
            <li className="flex flex-col w-full lg:basis-1/3 grow m-4 p-6 shadow shadow-sky-500">
              <span className="tracking-[.125em]">2018 - 2022рр. fullstack developer</span>
              <a className="text-2xl text-cyan-300 tracking-[.25em] mt-4 hover:text-cyan-500 transition duration-300"
                 href="https://telemetr.io" target="_blank" rel="noreferrer">
                Telemetrio
              </a>
            </li>
            <li className="flex flex-col w-full lg:basis-1/3 grow m-4 p-6 shadow shadow-sky-500">
              <span className="tracking-[.125em]">2017 - 2018рр. frontend developer</span>
              <a className="text-2xl text-cyan-300 tracking-[.25em] mt-4 hover:text-cyan-500 transition duration-300"
                 href="https://telepost.me" target="_blank" rel="noreferrer">
                Telepost
              </a>
            </li>
            <li className="flex flex-col w-full lg:basis-1/3 grow m-4 p-6 shadow shadow-sky-500">
              <span className="tracking-[.125em]">2017 - 2018рр. fullstack developer</span>
              <span className="text-2xl text-cyan-300 tracking-[.25em] mt-4">Chrome Plugins</span>
            </li>
            <li className='flex flex-col w-full lg:basis-1/3 grow m-4 p-6 shadow shadow-sky-500'>
              <span className="tracking-[.125em]">2017р. frontend developer</span>
              <span className="text-2xl text-cyan-300 tracking-[.25em] mt-4">Instapost</span>
            </li>
            <li className='flex flex-col w-full lg:basis-1/3 grow m-4 p-6 shadow shadow-sky-500'>
              <span className="tracking-[.125em]">2016 - 2017рр. frontend developer / tester</span>
              <span className="text-2xl text-cyan-300 tracking-[.25em] mt-4">Cosar</span>
            </li>
          </ul>
        </div>
        <div className='mt-10'>
          <h5 className='text-2xl text-neutral-400 py-10 mb-10 tracking-[.4em] uppercase'>
            Власні проекти
          </h5>
          <ul className='flex flex-col md:flex-row md:flex-wrap items-center'>
            <li className="flex flex-col w-full md:basis-1/4 grow m-4 p-6 shadow shadow-purple-500">
              <a className="text-2xl text-cyan-300 tracking-[.25em] m-4 hover:text-cyan-500 transition duration-300"
                 href="http://mykhailo-baran.pp.ua/" target="_blank" rel="noreferrer">
                Portfolio
              </a>
            </li>
            <li className="flex flex-col w-full md:basis-1/4 grow m-4 p-6 shadow shadow-purple-500">
              <a className="text-2xl text-cyan-300 tracking-[.25em] m-4 hover:text-cyan-500 transition duration-300"
                 href="https://github.com/mishamollfar/train-tickets" target="_blank" rel="noreferrer">
                Train tickets
              </a>
            </li>
            <li className="flex flex-col w-full md:basis-1/4 grow m-4 p-6 shadow shadow-purple-500">
              <a className="text-2xl text-cyan-300 tracking-[.25em] m-4 hover:text-cyan-500 transition duration-300"
                 href="http://mollfar.pp.ua/" target="_blank" rel="noreferrer">
                mollfar
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section id="skills"
               className="flex flex-col md:flex-row w-full px-2 md:px-6 pt-16 pb-4 md:h-full section-container font-ubuntu justify-around items-center md:min-h-700 relative">
        <div className="text-base mr-4 md:w-1/2 w-full flex flex-col justify-center items-start md:h-full">
          <h5 className="text-lg text-neutral-400 w-full py-5 tracking-[.4em] uppercase relative">
            Мої навики
          </h5>
          <p className="mb-4 break-words whitespace-pre-wrap">
            З початком роботи в якості розробника, 6 років тому, я виконував різні задачі,
            співпрацював із дизайнером через сервіс - figma.
          </p>
          <p className="break-words whitespace-pre-wrap">
            Я розробляв клієнтські і серверні сервіси для статистики та віддалено постингу у соціальних
            мережах, плагіни для chrome, користувацбке api та проектував баз даних - mongoDb.
            Основні технології, які використовував - angualr 2+, node.js, next.js, mongoDb, react,
            css, scss, .pug, npm, git, python.
          </p>
        </div>
        <div
          className="text-sphere text-xl font-medium tracking-wider md:w-1/2 w-full flex justify-center items-center md:h-full">
          <TextSphere/>
        </div>
      </section>
      <section id="contact" className="flex flex-col w-full px-2 md:px-6 pt-16 pb-20">
        <h5 className="text-lg text-neutral-400 py-1.5 px-2 my-4 tracking-[.4em] uppercase">
          contact information
        </h5>
        <Address/>
      </section>
    </>
  );
}
