export default function Address() {
    return (
        <address
            className="text-lg m-2 md:m-6 p-2 md:p-4 flex flex-col md:flex-row md:flex-wrap items-start md:items-center">
            <p className="basis-1/2 mt-2">
                Address: м. Зборів, Україна
            </p>
            <p className="basis-1/2 mt-2">
                Email: <a className="text-cyan-400 hover:text-sky-500 transition duration-300"
                          href="mailto:tymish1@gmail.com">tymish1@gmail.com</a>
            </p>
            <p className="basis-1/2 mt-2">
                Facebook: <a className="text-cyan-400 hover:text-sky-500 transition duration-300"
                             href="https://www.facebook.com/molfar7" target="_blank" rel="noreferrer">
                molfar7
            </a>
            </p>
            <p className="basis-1/2 mt-2">
                Github: <a className="text-cyan-400 hover:text-sky-500 transition duration-300"
                           href="https://github.com/mishamollfar" target="_blank" rel="noreferrer">
                mishamollfar
            </a>
            </p>
            <p className="basis-1/2 mt-2">
                Linkedin: <a className="text-cyan-400 hover:text-sky-500 transition duration-300"
                             href="https://www.linkedin.com/in/misha-baran-a54895109/"
                             target="_blank" rel="noreferrer">
                misha-baran
            </a>
            </p>
        </address>
    );
}
