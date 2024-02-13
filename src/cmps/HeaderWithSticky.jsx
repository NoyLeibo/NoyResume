import Hamburger from 'hamburger-react'

export function HeaderWithSticky({ isOpenMobileNav, setIsOpenMobileNav }) {

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
                <li onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }}>Home</li>
                <li onClick={() => { window.scrollTo({ top: 607, behavior: 'smooth' }) }}>About</li>
                <li onClick={() => { window.scrollTo({ top: 1300, behavior: 'smooth' }) }}>Skills</li>
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
