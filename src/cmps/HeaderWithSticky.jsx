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
                window.scrollTo({ top: 559, behavior: 'smooth' })
                break;
            case 'Skills':
                window.scrollTo({ top: 1200, behavior: 'smooth' })
                break;
            default:
                break;
        }
    }

    return (
        <header className="sticky-header flex">
            <div className="bold">NOYLEIBOVICH.</div>
            <ul className="flex row">
                <li className={scrollY < 760 ? 'underline bold' : ''} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</li>
                {/* style={{ color: scrollY < 760 ? "black" : "inherit", }} */}
                <li className={scrollY >= 760 && scrollY < 1300 ? 'underline bold' : ''} onClick={() => { window.scrollTo({ top: 760, behavior: 'smooth' }) }}>About</li>
                <li className={scrollY >= 1300 && scrollY < 2300 ? 'underline bold' : ''} onClick={() => { window.scrollTo({ top: 1300, behavior: 'smooth' }) }}>Skills</li>
                <li>Projects</li>
                <li>Contact me</li>
            </ul>
            <Hamburger toggled={isOpenMobileNav} toggle={setIsOpenMobileNav} color={isOpenMobileNav ? "white" : '#08ff98fb'} />
            {isOpenMobileNav && (
                <div className="hamburger-menu">
                    <ul className="flex column justify-center align-center">
                        <li onClick={() => onNavigateMobile('Home')}>Home</li>
                        <li onClick={() => onNavigateMobile('About')}>About</li>
                        <li onClick={() => onNavigateMobile('Skills')}>Skills</li>
                        <li>Projects</li>
                        <li>Contact me</li>
                    </ul>
                </div>
            )}
        </header>
    )
}
