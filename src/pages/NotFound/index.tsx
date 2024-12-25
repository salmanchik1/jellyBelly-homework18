import image from "../../images/404.gif";
import style from "./style.module.css";

const NotFound = () => {
    return (
        <div className={style.container}>
            <p>Sorry. This page does not exist yet...</p>
            <img src={image} alt="" />
        </div>
    );
};

export default NotFound;
