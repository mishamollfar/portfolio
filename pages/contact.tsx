import Head from 'next/head';
import Layout from '../components/layout';

export default function ContactPage() {
    return (
        <Layout>
            <Head>
                <title>Contact of the portfolio</title>
            </Head>
            <section className="my-7">
                <h1 className="text-2xl mt-7 mb-2">Контакти</h1>
                <p className="text-lg mb-7">Якщо ви хочете зв'язатися зі мною, відправте email або через соціальні
                    мережі</p>
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
                <address className="text-lg my-6">
                    <p>
                        Address: м. Зборів, Тернопільська область, Україна
                    </p>
                    <p>
                        Email: <a className="text-sky-500 hover:text-sky-700 transition duration-300"
                                  href="mailto:tymish1@gmail.com">tymish1@gmail.com</a>
                    </p>
                    <p>
                        Phone: +380671705884
                    </p>
                    <p>
                        Telegram: <a className="text-sky-500 hover:text-sky-700 transition duration-300"
                                     href="https://t.me/moll_far" target="_blank">@moll_far</a>
                    </p>
                    <p>
                        Facebook: <a className="text-sky-500 hover:text-sky-700 transition duration-300"
                                     href="https://www.facebook.com/molfar7" target="_blank">molfar7</a>
                    </p>
                    <p>
                        Github: <a className="text-sky-500 hover:text-sky-700 transition duration-300"
                                   href="https://github.com/mishamollfar" target="_blank">mishamollfar</a>
                    </p>
                    <p>
                        Linkedin: <a className="text-sky-500 hover:text-sky-700 transition duration-300"
                                     href="https://www.linkedin.com/in/misha-baran-a54895109/"
                                     target="_blank">misha-baran</a>
                    </p>
                </address>
            </section>
        </Layout>
    );
}
