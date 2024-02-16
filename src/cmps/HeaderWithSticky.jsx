import Hamburger from 'hamburger-react'
import { useEffect, useState } from 'react'

export function HeaderWithSticky({ isOpenMobileNav, setIsOpenMobileNav }) {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            // console.log(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    const onNavigateMobile = (NavTo) => {
        setIsOpenMobileNav(false)
        switch (NavTo) {
            case 'Home':
                window.scrollTo({ top: 0, behavior: 'smooth' })
                break;
            case 'About':
                window.scrollTo({ top: 659, behavior: 'smooth' })
                break;
            case 'Skills':
                window.scrollTo({ top: 1383, behavior: 'smooth' })
                break;
            case 'Projects':
                window.scrollTo({ top: 3400, behavior: 'smooth' })
                break;
            default:
                break;
        }
    }

    return (
        <header className="sticky-header flex">
            <div className="bold">NOYLEIBOVICH.</div>
            <ul className="flex row">
                <li className={scrollY < 300 ? 'underline bold' : ''} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</li>
                <li className={scrollY >= 300 && scrollY < 1000 ? 'underline bold' : ''} onClick={() => { window.scrollTo({ top: 684, behavior: 'smooth' }) }}>About</li>
                <li className={scrollY >= 1000 && scrollY < 2300 ? 'underline bold' : ''} onClick={() => { window.scrollTo({ top: 1360, behavior: 'smooth' }) }}>Skills</li>
                <li className={scrollY >= 2300 && scrollY < 4000 ? 'underline bold' : ''} onClick={() => { window.scrollTo({ top: 2587, behavior: 'smooth' }) }}>Projects</li>
                <li>Contact me</li>
            </ul>
            <Hamburger toggled={isOpenMobileNav} toggle={setIsOpenMobileNav} color={isOpenMobileNav ? "white" : 'black'} />
            {isOpenMobileNav && (
                <div className="hamburger-menu">
                    <ul className="flex column justify-center align-center">
                        <li onClick={() => onNavigateMobile('Home')}>Home</li>
                        <li onClick={() => onNavigateMobile('About')}>About</li>
                        <li onClick={() => onNavigateMobile('Skills')}>Skills</li>
                        <li onClick={() => onNavigateMobile('Projects')}>Projects</li>
                        <li>Contact me</li>
                    </ul>
                </div>
            )}
        </header>
    )
}
