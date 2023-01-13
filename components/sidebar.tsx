import Link from 'next/link';

export default function Sidebar() {
    return (
        <nav className="flex flex-row items-center justify-end text-base">
            <Link className="text-lg transition duration-100 ease-in-out hover:text-sky-400 mr-4" href="/">Home</Link>
            <Link className="text-lg transition duration-100 ease-in-out hover:text-sky-400 mr-4"
                  href="/projects">Projects</Link>
            <Link className="text-lg transition duration-100 ease-in-out hover:text-sky-400 mr-4"
                  href="/about">About</Link>
            <Link className="text-lg transition duration-100 ease-in-out hover:text-sky-400 mr-4"
                  href="/contact">Contact</Link>
        </nav>
    );
}
