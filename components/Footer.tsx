import Logo from './Logo';

export default function Footer() {
    return (
        <footer className="container flex flex-col text-center w-full p-4 my-0 mx-auto">
            <div className="flex w-full mb-4 opacity-40">
                <Logo/>
            </div>
            <p className="text-neutral-400"><small>© 2023 Baran Mykhailo. Made in Zboriv, Ukraine<sup>®</sup></small>
            </p>
        </footer>
    );
}
