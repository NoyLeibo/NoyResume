import { NavLink, useNavigate } from "react-router-dom";
import Hamburger from 'hamburger-react'
import { useEffect, useState } from "react";


export function AppHeader() {
    const navigate = useNavigate(); // should navigate the li buttons. IN FUTURE
    const [isOpen, setOpen] = useState(false)

    useEffect(() => {
        console.log(isOpen);
    }, [isOpen]);

    return (
        <header className="flex">
            <div className="bold">NOY<span className="greentxt">LEIBOVICH</span></div>
            <ul className="flex row">
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact me</li>
            </ul>
            <Hamburger toggled={isOpen} toggle={setOpen} color={isOpen ? "white" : '#08ff98fb'} />
            {isOpen ?
                <div className="hamburger-menu">
                    <ul className="flex column justify-center align-center ">
                        <li>Home</li>
                        <li>About</li>
                        <li>Skills</li>
                        <li>Projects</li>
                        <li>Contact me</li>
                    </ul>
                </div> : ''}
        </header>
    )
}