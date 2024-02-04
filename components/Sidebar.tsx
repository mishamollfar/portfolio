'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <nav className="flex flex-row mt-4 sm:mt-0 items-center justify-center text-base">
            <Link
                className={ `text-lg transition duration-100 ease-in-out navigation-button ${ pathname === '/' ? 'active-nav-btn' : '' }` }
                href={ { pathname: '/' } }>
                Home
            </Link>
            <Link
                className={ `text-lg transition duration-100 ease-in-out navigation-button ${ pathname === '/projects' ? 'active-nav-btn' : '' }` }
                href={ { pathname: '/projects' } }>
                Projects
            </Link>
            <Link
                className={ `text-lg transition duration-100 ease-in-out navigation-button ${ pathname === '/about' ? 'active-nav-btn' : '' }` }
                href={ { pathname: '/about' } }>
                About
            </Link>
            <Link
                className={ `text-lg transition duration-100 ease-in-out navigation-button ${ pathname === '/contact' ? 'active-nav-btn' : '' }` }
                href={ { pathname: '/contact' } }>
                Contact
            </Link>
        </nav>
    );
}
