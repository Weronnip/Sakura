import styles from "./menu_style.module.css";
import axios from "axios";
import React from "react";

export function MenuFood() {
    const [food, setFood] = React.useState([]);
    const apiUrl = '/api/menu_foods';

    React.useEffect(() =>{
        axios.get(apiUrl).then((res) => {
            setFood(res.data);
        })
        .catch((error) => {
            console.log(error);
            
        });
    }, []);

    if (!food) return null;

    return (
        <>
            <div className={styles.wallpaper}>
                <div className={styles.FoodMenu}>
                    {food.map((foods) => (
                        <h3 className={styles.title__food}>{foods.name}</h3>
                    ))};
                </div>
            </div>
        </>
    );
}