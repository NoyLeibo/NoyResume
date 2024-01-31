import React, { useState } from "react";

import { WelcomePage } from "./cmps/WelcomePage";
import { AboutPage } from "./cmps/AboutPage";

export function RootCmp() {
    const [currentPage, setCurrentPage] = useState("welcome");

    return (
        <main className="main-container">
            <WelcomePage />
            <AboutPage />
            {/* {currentPage === "welcome" && <WelcomePage />} */}
            {/* {currentPage === "about" && <AboutPage />} */}
        </main>
    );
}
