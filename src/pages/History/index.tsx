import HistoryCards from "../../components/HistoryCards";
import style from "./style.module.css";

const HistoryPage = () => {
    return (
        <div className={style.container}>
            <h1>Explore History...</h1>
            <HistoryCards />
        </div>
    );
};

export default HistoryPage;
