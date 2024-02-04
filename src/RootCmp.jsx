import React, { useEffect, useState } from "react";

import { WelcomePage } from "./cmps/WelcomePage";
import { AppHeader } from "./cmps/AppHeader.jsx";
import { AboutPage } from "./cmps/AboutPage";

export function RootCmp() {
    const [currentPage, setCurrentPage] = useState("welcome")
    const [isScrolledDown, setIsScrolledDown] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <main className="main-container">
            <AppHeader />
            <WelcomePage />
            <AboutPage />
            {/* {currentPage === "welcome" && <WelcomePage />} */}
            {/* {currentPage === "about" && <AboutPage />} */}
        </main>
    );
}
