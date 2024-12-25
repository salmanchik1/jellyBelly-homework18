import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Bean } from "../../types/bean";
import style from "./style.module.css";

const BeanPage = () => {
    const params = useParams();
    const [beanData, setBeanData] = useState<Bean | null>(null);
    useEffect(() => {
        const getData = async () => {
            try {
                const req = await fetch(
                    `https://jellybellywikiapi.onrender.com/api/Beans/${params.id}`
                );
                const data = await req.json();
                setBeanData(data);
            } catch (error) {
                console.log("Error->", error);
            }
        };
        getData();
    }, []);
    return (
        <>
            {beanData && (
                <div className={style.container}>
                    <h1>{beanData.flavorName}</h1>
                    <p>{beanData.description}</p>
                    <img src={beanData.imageUrl} alt="" />
                    <h3>Group Name:</h3> <p>{beanData.groupName}</p>
                    <h3>Ingredients</h3>
                    <p>{beanData.ingredients.join(", ")}.</p>
                    <table>
                        <tr>
                            <td>Color group: </td>
                            <td>Hexademical_color: </td>
                            <td>Bean ID: </td>
                            <td>Kosher: </td>
                        </tr>
                        <tr>
                            <td>"{beanData.colorGroup}"</td>
                            <td>{beanData.backgroundColor}</td>
                            <td>{beanData.beanId}</td>
                            <td>{beanData.kosher ? "Yes" : "No"}</td>
                        </tr>
                        <tr></tr>
                        <tr></tr>
                        <tr>
                            <td>Seasonal: </td>
                            <td>Sugar free: </td>
                            <td>Gluten free: </td>
                        </tr>
                        <tr>
                            <td>{beanData.seasonal ? "Yes" : "No"}</td>
                            <td>{beanData.sugarFree ? "Yes" : "No"}</td>
                            <td>{beanData.glutenFree ? "Yes" : "No"}</td>
                        </tr>
                    </table>
                    <Link to="./beans">Back to Beans</Link>
                </div>
            )}
        </>
    );
};

export default BeanPage;
