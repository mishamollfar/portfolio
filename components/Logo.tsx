import Link from 'next/link';

export default function Logo() {
    return (
        <Link href={ { pathname: '/' } } className="logo flex items-center">
            <div className="logo-image">
                <img src={ 'favicon.ico' } alt="" width={ 24 } height={ 24 }/>
            </div>
            <p className="logo-info flex flex-col text-left">
                <span className="name text-sky-400 text-base tracking-[.4em] font-bold">
                    Mykhailo Baran
                </span>
                <span className="role text-yellow-400 text-xs tracking-[.4em] uppercase">
                    fullstack developer
                </span>
            </p>
        </Link>
    );
}
