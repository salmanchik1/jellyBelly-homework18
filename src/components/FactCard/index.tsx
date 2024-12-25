import { FC } from "react";
import { Fact } from "../../types/fact";
import style from "./style.module.css";

interface Props {
    data: Fact;
}

const FactCard: FC<Props> = ({ data }) => {
    return (
        <div className={style.container}>
            <h3>{data.factId}. {data.title}</h3>
            <p>{data.description}</p>
        </div>
    );
};

export default FactCard;
