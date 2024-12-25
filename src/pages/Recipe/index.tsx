import { Link, useParams } from "react-router-dom";
import style from "./style.module.css";
import { useEffect, useState } from "react";
import { Recipe } from "../../types/recipe";

const RecipePage = () => {
    const params = useParams();
    const [recipeData, setRecipeData] = useState<Recipe | null>(null);
    useEffect(() => {
        const getData = async () => {
            try {
                const req = await fetch(
                    `https://jellybellywikiapi.onrender.com/api/Recipes/${params.id}`
                );
                const data = await req.json();
                setRecipeData(data);
            } catch (error) {
                console.log("Error->", error);
            }
        };
        getData();
    }, []);

    return (
        <div className={style.container}>
            <h1>{recipeData?.name}</h1>
            <p className={style.description}>{recipeData?.description}</p>
            <p className={style.time}>Preparation time: {recipeData?.prepTime}</p>
            <p className={style.time}>Cooking time: {recipeData?.cookTime}</p>
            <p className={style.time}>Total time: {recipeData?.totalTime}</p>
            <p className={style.description}>Recipe makes {recipeData?.makingAmount}</p>
            <img src={recipeData?.imageUrl} alt="" />
            <h2>Ingredients</h2>
            <ul className={style.ingredients}>
                {recipeData?.ingredients.map((ingredient) => (
                    <li key={ingredient}>{ingredient}</li>
                ))}
            </ul>
            <h3>{recipeData?.additions1[0]}</h3>
            <ul className={style.ingredients}>
                {recipeData?.additions1.slice(1,).map((addition) => (
                    <li key={addition}>{addition}</li>
                ))}
            </ul>
            <h3>{recipeData?.additions2[0]}</h3>
            <ul className={style.ingredients}>
                {recipeData?.additions2.slice(1,).map((addition) => (
                    <li key={addition}>{addition}</li>
                ))}
            </ul>
            <h3>{recipeData?.additions3[0]}</h3>
            <ul className={style.ingredients}>
                {recipeData?.additions3.slice(1,).map((addition) => (
                    <li key={addition}>{addition}</li>
                ))}
            </ul>
            <h2>Directions</h2>
            <p className={style.description}>{recipeData?.directions}</p>
            <p className={style.description}>Tips: {recipeData?.tips}</p>

            <Link to={`/recipes`}>Back to Recipes</Link>
        </div>
    );
};

export default RecipePage;
