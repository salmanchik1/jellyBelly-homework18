import image from "../../images/loading.gif";
import style from "./style.module.css";

const Loader = () => {
    return (
        <div className={style.container}>
            <img src={image} alt="" />
            <p>Loading...</p>
        </div>
    );
};

export default Loader;
