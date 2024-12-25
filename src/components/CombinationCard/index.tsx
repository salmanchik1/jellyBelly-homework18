import { FC } from "react";
import { Combination } from "../../types/combination";
import style from "./style.module.css";

interface Props {
    data: Combination;
}

const CombinationCard: FC<Props> = ({ data }) => {
    return (
        <div className={style.container}>
            <h3>
                {data.name}
            </h3>
            <p>{data.tag.join(" ")}</p>
        </div>
    );
};

export default CombinationCard;
