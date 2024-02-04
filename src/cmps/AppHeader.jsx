import { NavLink, useNavigate } from "react-router-dom";
import Hamburger from 'hamburger-react'
import { useEffect, useState } from "react";
import { HeaderWithoutSticky } from "./HeaderWithoutSticky";
import { HeaderWithSticky } from "./HeaderWithSticky";
// import { useLockBodyScroll } from "@uidotdev/usehooks";


export function AppHeader({ isScrolledDown }) {
    const navigate = useNavigate(); // should navigate the li buttons. IN FUTURE
    const [isOpenMobileNav, setIsOpenMobileNav] = useState(false)

    useEffect(() => {
        const lockBodyScroll = () => {
            document.body.style.overflow = 'hidden';
        };
        const unlockBodyScroll = () => {
            document.body.style.overflow = '';
        };

        if (isOpenMobileNav) return (lockBodyScroll())
        return (unlockBodyScroll())
    }, [isOpenMobileNav]);

    return (
        isScrolledDown ? (
            <HeaderWithSticky isOpenMobileNav={isOpenMobileNav} setIsOpenMobileNav={setIsOpenMobileNav} />
        ) : (
            <HeaderWithoutSticky isOpenMobileNav={isOpenMobileNav} setIsOpenMobileNav={setIsOpenMobileNav} />
        )
    )
}