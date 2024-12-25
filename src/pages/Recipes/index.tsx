import { useState } from "react";
import RecipesCards from "../../components/RecipesCards";
import style from "./style.module.css";
import Search from "../../components/Search";

const Recipes = () => {
    const [filterValue, setFilterValue] = useState("");
    return (
        <div className={style.container}>
            <h1>Explore All Recipes...</h1>
            <Search setFilterValue={setFilterValue} />
            <RecipesCards filterValue={filterValue} />
        </div>
    );
};

export default Recipes;
