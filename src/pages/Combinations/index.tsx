import { useState } from "react";
import CombinationsCards from "../../components/CombinationsCards";
import style from "./style.module.css";
import Search from "../../components/Search";

const CombinationsPage = () => {
    const [filterValue, setFilterValue] = useState("");
    return (
        <div className={style.container}>
            <h1>Explore All Combinations...</h1>
            <Search setFilterValue={setFilterValue} />
            <CombinationsCards filterValue={filterValue} />
        </div>
    );
};

export default CombinationsPage;
