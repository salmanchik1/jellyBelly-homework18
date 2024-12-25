import SwitchTheme from "../SwitchTheme";
import style from "./style.module.css";
import Modal from "../Modal";
import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    const [isModal, setIsModal] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <>
            <button className={`${style.burger} ${isMenuOpen ? style.open : ""}`} onClick={toggleMenu}>
                <div/><div/><div/>
            </button>
            <nav
                className={`${style.container} ${isMenuOpen ? style.open : ""}`}
            >
                <Link to="./beans">Beans</Link>
                <Link to="./facts">Facts</Link>
                <Link to="./recipes">Recipes</Link>
                <Link to="./combinations">Combinations</Link>
                <Link to="./history">History</Link>
                <Link to="./review">Review</Link>
                <Link to="./about">About</Link>
                <SwitchTheme />
                <Modal isModal={isModal} onClick={() => setIsModal(false)} />
            </nav>
        </>
    );
};

export default Nav;
