import style from "./style.module.css";
const Footer = () => {
    return (
        <footer className={style.footer}>
            <p>&copy; Created by Salmanov Ramis</p>
            <p>All rights reserved.</p>
            <p>{new Date().getFullYear()}</p>
        </footer>
    );
};

export default Footer;
