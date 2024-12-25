import { FC, useEffect, useState } from "react";
import { History } from "../../types/history";
import style from "./style.module.css";
import HistoryCard from "../HistoryCard";
import Loader from "../Loader";
import image from "../../images/bean.png";

const HistoryCards: FC = () => {
    const [data, setData] = useState<null | History[]>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const getData = async () => {
        try {
            setIsError(false);
            setIsLoading(true);
            const req = await fetch(
                "https://jellybellywikiapi.onrender.com/api/mileStones?pageIndex=1&pageSize=23"
            );
            const data = await req.json();
            setIsLoading(false);
            setData(data.items);
        } catch (e) {
            setIsLoading(false);
            setIsError(true);
            console.log("Error -> ", e);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            {isLoading && <Loader />}
            {isError && <p>Reload the page!</p>}
            <div className={style.container}>
                {data &&
                    data.map((item) => (
                        <HistoryCard data={item} key={item.mileStoneId} />
                    ))}
                {data && <img src={image} alt="" />}
            </div>
        </>
    );
};

export default HistoryCards;
