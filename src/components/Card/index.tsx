import { FC } from "react";
import { Bean } from "../../types/bean";
import style from "./style.module.css";
import { Link } from "react-router-dom";

interface Props {
    data: Bean;
}

const Card: FC<Props> = ({ data }) => {
    return (
        <Link to={`/bean/${data.beanId}`} className={style.card}>
            <div className={style.overlay}>
                <img src={data.imageUrl} alt="" />
                <h2>{data.flavorName}</h2>
                <p>{data.description}</p>
                {data.sugarFree ? <p>No sugar</p> : <p>With sugar</p>}
            </div>
        </Link>
    );
};

export default Card;
