import { NavLink, useNavigate } from "react-router-dom";
import Hamburger from 'hamburger-react'
import { useEffect, useState } from "react";

export function AppHeader() {
    const navigate = useNavigate();
    const [isOpen, setOpen] = useState(false)

    useEffect(() => {
        console.log(isOpen);
    }, [isOpen]);

    return (
        <header className="flex">
            <div className="bold">NOY<span className="greentxt">LEIBOVICH</span></div>
            <div className="manu-header flex row">
                <NavLink>Home</NavLink>
                <NavLink>About</NavLink>
                <NavLink>Skills</NavLink>
                <NavLink>Projects</NavLink>
                <NavLink>Contact me</NavLink>
            </div>
            <Hamburger toggled={isOpen} toggle={setOpen} color={isOpen ? "black" : '#08ff98fb'} />
            {/* {isOpen ? } */}
        </header>
    )
}