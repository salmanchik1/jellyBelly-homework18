import { FC, useEffect, useState } from "react";
import { Combination } from "../../types/combination";
import style from "./style.module.css";
import CombinationCard from "../CombinationCard";
import Loader from "../Loader";

type Props = {
    filterValue: string;
};

const CombinationsCards: FC<Props> = ({ filterValue }) => {
    const [initialCombinations, setInitialCombinations] = useState<
        null | Combination[]
    >(null);
    const [updateCombinations, setUpdateCombinations] = useState<
        null | Combination[]
    >(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const getData = async () => {
        try {
            setIsError(false);
            setIsLoading(true);
            const req = await fetch(
                "https://jellybellywikiapi.onrender.com/api/combinations?pageIndex=1&pageSize=54"
            );
            const data = await req.json();
            setIsLoading(false);
            setInitialCombinations(data.items);
            setUpdateCombinations(data.items);
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
            const newArray = initialCombinations?.filter((item) =>
                item.name.toLowerCase().includes(filterValue.toLowerCase())
            );
            return newArray && setUpdateCombinations(newArray);
        } else {
            setUpdateCombinations(initialCombinations);
        }
    }, [filterValue, initialCombinations]);
    useEffect(() => {}, [filterValue]);

    return (
        <>
            {isLoading && <Loader />}
            {isError && <p>Reload the page!</p>}
            <div className={style.container}>
                {updateCombinations &&
                    updateCombinations.map((item) => (
                        <CombinationCard data={item} key={item.combinationId} />
                    ))}
            </div>
        </>
    );
};

export default CombinationsCards;
