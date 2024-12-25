import { FC, useEffect, useState } from "react";
import style from "./style.module.css";
import { Recipe } from "../../types/recipe";
import Loader from "../Loader";
import RecipeCard from "../RecipeCard";

type Props = {
    filterValue: string;
};

const RecipesCards: FC<Props> = ({ filterValue }) => {
    const [initialRecipes, setInitialRecipes] = useState<null | Recipe[]>(null);
    const [updateRecipes, setUpdateRecipes] = useState<null | Recipe[]>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const getData = async () => {
        try {
            setIsError(false);
            setIsLoading(true);
            const req = await fetch(
                "https://jellybellywikiapi.onrender.com/api/recipes?pageIndex=1&pageSize=27"
            );
            const data = await req.json();
            setIsLoading(false);
            setInitialRecipes(data.items);
            setUpdateRecipes(data.items);
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
            const newArray = initialRecipes?.filter((item) =>
                item.name.toLowerCase().includes(filterValue.toLowerCase())
            );
            return newArray && setUpdateRecipes(newArray);
        } else {
            setUpdateRecipes(initialRecipes);
        }
    }, [filterValue, initialRecipes]);
    useEffect(() => {}, [filterValue]);

    return (
        <>
            {isLoading && <Loader />}
            {isError && <p>Reload the page!</p>}
            <div className={style.container}>
                {updateRecipes &&
                    updateRecipes.map((item) => (
                        <RecipeCard key={item.recipeId} data={item} />
                    ))}
            </div>
        </>
    );
};

export default RecipesCards;
