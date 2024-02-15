import React, { useEffect, useState } from "react";

import { WelcomePage } from "./cmps/WelcomePage";
import { AppHeader } from "./cmps/AppHeader";
import { AboutPage } from "./cmps/AboutPage";
import { SkillsPage } from "./cmps/SkillsPage";
import { SkillsPageTwo } from "./cmps/SkillsPageTwo";
import { ProjectsPage } from "./cmps/ProjectsPage.jsx";

export function RootCmp() {
    // const [currentPage, setCurrentPage] = useState("welcome")
    const [isScrolledDown, setIsScrolledDown] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolledDown(window.scrollY > 0)
            // console.log(window.scrollY);
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <main className="main-container">
            <AppHeader isScrolledDown={isScrolledDown} />
            <WelcomePage />
            <AboutPage />
            <SkillsPage />
            <SkillsPageTwo />
            <ProjectsPage />
            {/* {currentPage === "welcome" && <WelcomePage />} */}
            {/* {currentPage === "about" && <AboutPage />} */}
        </main>
    );
}
