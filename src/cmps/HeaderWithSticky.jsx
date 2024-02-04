import Hamburger from 'hamburger-react'

export function HeaderWithSticky({ isOpenMobileNav, setIsOpenMobileNav }) {

    return (
        <header className="sticky-header flex">
            <div className="bold">NOYLEIBOVICH.</div>
            <ul className="flex row">
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact me</li>
            </ul>
            <Hamburger toggled={isOpenMobileNav} toggle={setIsOpenMobileNav} color={isOpenMobileNav ? "white" : '#08ff98fb'} />
            {isOpenMobileNav && (
                <div className="hamburger-menu">
                    <ul className="flex column justify-center align-center">
                        <li>Home</li>
                        <li>About</li>
                        <li>Skills</li>
                        <li>Projects</li>
                        <li>Contact me</li>
                    </ul>
                </div>
            )}
        </header>
    )
}
