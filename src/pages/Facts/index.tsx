import { useState } from "react";
import FactsCards from "../../components/FactsCards";
import Search from "../../components/Search";

const Facts = () => {
    const [filterValue, setFilterValue] = useState("");
    return (
        <>
            <h1>Explore All Facts...</h1>
            <Search setFilterValue={setFilterValue} />
            <FactsCards filterValue={filterValue} />
        </>
    );
};

export default Facts;
