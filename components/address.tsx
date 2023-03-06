export default function Address() {
    return (
        <address className="text-lg my-6">
            <p className='my-4 tracking-[.125em]'>
                Address: м. Зборів, Тернопільська область, Україна
            </p>
            <div className='flex flex-wrap items-center'>
                <p className='basis-1/2 mt-2'>
                    Email: <a className="text-sky-500 hover:text-sky-700 transition duration-300"
                              href="mailto:tymish1@gmail.com">tymish1@gmail.com</a>
                </p>
                <p className='basis-1/2 mt-2'>
                    Phone: +380671705884
                </p>
                <p className='basis-1/2 mt-2'>
                    Telegram: <a className="text-sky-500 hover:text-sky-700 transition duration-300"
                                 href="https://t.me/moll_far" target="_blank">@moll_far</a>
                </p>
                <p className='basis-1/2 mt-2'>
                    Facebook: <a className="text-sky-500 hover:text-sky-700 transition duration-300"
                                 href="https://www.facebook.com/molfar7" target="_blank">molfar7</a>
                </p>
                <p className='basis-1/2 mt-2'>
                    Github: <a className="text-sky-500 hover:text-sky-700 transition duration-300"
                               href="https://github.com/mishamollfar" target="_blank">mishamollfar</a>
                </p>
                <p className='basis-1/2 mt-2'>
                    Linkedin: <a className="text-sky-500 hover:text-sky-700 transition duration-300"
                                 href="https://www.linkedin.com/in/misha-baran-a54895109/"
                                 target="_blank">misha-baran</a>
                </p>
            </div>
        </address>
    );
}
