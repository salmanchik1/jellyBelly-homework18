import { FC } from "react";
import { History } from "../../types/history";
import style from "./style.module.css";

interface Props {
    data: History;
}

const HistoryCard: FC<Props> = ({ data }) => {
    return (
        <div className={style.outerContainer}>
            <div className={style.container}>
                <h3>{data.year}</h3>
                <p>{data.description}</p>
            </div>
        </div>
    );
};

export default HistoryCard;
