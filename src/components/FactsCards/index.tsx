import { FC, useEffect, useState } from "react";
import { Fact } from "../../types/fact";
import style from "./style.module.css";
import FactCard from "../FactCard";
import Loader from "../Loader";

type Props = {
    filterValue: string;
};

const FactsCards: FC<Props> = ({ filterValue }) => {
    const [initialFacts, setInitialFacts] = useState<null | Fact[]>(null);
    const [updateFacts, setUpdateFacts] = useState<null | Fact[]>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const getData = async () => {
        try {
            setIsError(false);
            setIsLoading(true);
            const req = await fetch(
                "https://jellybellywikiapi.onrender.com/api/facts?pageIndex=1&pageSize=99"
            );
            const data = await req.json();
            setIsLoading(false);
            setInitialFacts(data.items);
            setUpdateFacts(data.items);
        } catch (e) {
            setIsLoading(false);
            setIsError(true);
            console.log("Error -> ", e);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        if (filterValue) {
            const newArray = initialFacts?.filter((item) =>
                item.title.toLowerCase().includes(filterValue.toLowerCase())
            );
            return newArray && setUpdateFacts(newArray);
        } else {
            setUpdateFacts(initialFacts);
        }
    }, [filterValue, initialFacts]);
    useEffect(() => {}, [filterValue]);

    return (
        <>
            {isLoading && <Loader />}
            {isError && <p>Reload the page!</p>}
            <div className={style.container}>
                {updateFacts &&
                    updateFacts.map((item) => (
                        <FactCard data={item} key={item.factId} />
                    ))}
            </div>
        </>
    );
};

export default FactsCards;
