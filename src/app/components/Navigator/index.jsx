import Link from 'next/link'
import Sstilo from './Navigator.module.css'

export function Navigator({links}){
    return(
        <>
        <header className={Sstilo.header}>
        <nav>
            <ul className={Sstilo.navigator}>
            {links.map(({label, route, index}) => (
                <li key={index}>
                <Link href={route}>{label}</Link>
                </li>
            ))} 
            {/*links.map((link) => (
                <li>
                <Link href={link.route}>{link.label}</Link>
                </li>
            ))*/}
            </ul>
        </nav>
        </header>
        </>
    )
}