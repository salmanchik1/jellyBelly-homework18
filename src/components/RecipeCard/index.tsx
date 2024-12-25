import { FC } from "react";
import { Recipe } from "../../types/recipe";
import style from "./style.module.css";
import { Link } from "react-router-dom";

interface Props {
    data: Recipe;
}

const RecipeCard: FC<Props> = ({ data }) => {
    return (
        <div className={style.container}>
            <h3>{data.name}</h3>
            <p>{data.description}</p>
            {data.makingAmount && <p>Make: {data.makingAmount}</p>}
            {data.totalTime && <p>Total time: {data.totalTime}</p>}
            <Link to={`./recipe/${data.recipeId}`}>check out this recipe</Link>
        </div>
    );
};

export default RecipeCard;
