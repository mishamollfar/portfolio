import Address from '../../components/Address';

export const metadata = {
    title: 'Contact | Mykhailo Baran Portfolio | full stack developer - official website | mykhailo-baran.pp.ua',
};

export default function ContactPage() {
    return (
        <section className="my-7">
            <h1 className="text-3xl text-neutral-400 text-center lg:text-left mt-7 mb-4 tracking-[.4em] uppercase">Контакти</h1>
            <p className="text-lg text-center lg:text-left mb-7">
                Якщо ви хочете зв'язатися зі мною, відправте email або через соціальні мережі
            </p>
            <form action="mailto:tymish1@gmail.com" method="post" encType="text/plain"
                  className="flex flex-col justify-center items-center my-8 w-full">
                <div className="flex flex-col mb-6 w-full lg:w-1/2">
                    <label htmlFor="email" className="mb-2 text-lg w-full">
                        Ваш email:
                    </label>
                    <input type="text" name="email" id="email"
                           className="bg-slate-200 focus:outline-none focus:bg-slate-300 py-3 px-4 mb-4 text-black w-full transition duration-300"/>
                </div>
                <div className="flex flex-col mb-6 w-full lg:w-1/2">
                    <label htmlFor="message" className="mb-2 text-lg w-full">
                        Повідомлення:
                    </label>
                    <textarea name="message" id="message"
                              className="bg-slate-200 focus:outline-none focus:bg-slate-300 py-3 px-4 mb-4 text-black text-lg w-full transition duration-300"
                              rows={ 4 }/>
                </div>
                <div className="flex justify-start">
                    <input type="submit" value="Відправити мені"
                           className="mx-4 py-3 px-4 font-medium text-sm cursor-pointer bg-sky-500 hover:bg-sky-700 rounded transition duration-300"/>
                    <input type="reset" value="Очистити"
                           className="mx-4 py-3 px-4 font-medium text-sm cursor-pointer bg-sky-500 hover:bg-sky-700 rounded transition duration-300"/>
                </div>

            </form>
            <Address />
        </section>
    );
}
